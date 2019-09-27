<template>
    <div class="create-wrapper">
        <h1>{{this.id?'编辑':'新增'}}物品</h1>
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
            <el-form-item label="物品名"
                          prop="name">
                <el-col :span="6">
                    <el-input v-model="ruleForm.name"
                              placeholder="请输入物品名"></el-input>
                </el-col>
                <!-- <el-input v-model="ruleForm.name"></el-input> -->
            </el-form-item>
            <el-form-item label="物品图片"
                          prop="img_url">
                <el-upload class="avatar-uploader"
                           :action="this.$http.defaults.baseURL + '/upload'"
                           :show-file-list="false"
                           :on-success="upload">
                    <img v-if="ruleForm.img_url"
                         :src="ruleForm.img_url"
                         class="avatar">
                    <i v-else
                       class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary"
                           @click="submitForm('ruleForm')">{{this.id?'编辑':'创建'}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>>
<script>
export default {
    props: ["id"],
    data() {
        return {
            ruleForm: {
                name: "",
                img_url: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入物品",
                        trigger: "blur"
                    }
                ]
            },
            options: [],
            imageUrl: ""
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (!valid) {
                    return;
                }
                let model = this.$refs.ruleForm.model;
                this.id ? this.edit(model) : this.add(model);
            });
        },
        async add(body) {
            await this.$http.post("/reset/goods/create", body);
            this.golist();
        },
        async edit(body) {
            await this.$http.put(`/reset/goods/update/${this.id}`, body);
            this.golist();
        },
        golist() {
            this.$router.push("/goods/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async setCate() {
            let res = await this.$http.get(`/reset/goods/info/${this.id}`);
            this.ruleForm = res.data;
        },
        upload(res) {
            this.$set(this.ruleForm, "img_url", res.url);
        }
    },
    mounted() {
        this.id && this.setCate();
    }
};
</script>
