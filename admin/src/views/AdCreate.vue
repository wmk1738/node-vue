<template>
    <div class="create-wrapper">
        <h1>{{this.id?'编辑':'新增'}}广告</h1>
        <el-form :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="广告名"
                prop="title">
                <el-col :span="6">
                    <el-input v-model="ruleForm.title"
                        placeholder="请输入广告名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="广告图组">
                <el-button type="primary"
                    @click="ruleForm.items.push({})"
                    icon="el-icon-plus">添加广告</el-button>
                <el-row style="margin-top:10px"
                    :gutter="20">
                    <el-col :span="8"
                        style="margin-top: 10px;"
                        v-for="(item,i) in ruleForm.items"
                        :key="i">
                        <el-card shadow="never">
                            <div slot="header"
                                class="clearfix">
                                <span>图{{i+1}}</span>
                                <el-button type="danger"
                                    icon="el-icon-delete"
                                    @click="ruleForm.items.splice(i,1)"
                                    circle></el-button>
                            </div>
                            <el-form-item label="跳转链接">
                                <el-input v-model="item.link_url"
                                    placeholder="请输入跳转链接"></el-input>
                            </el-form-item>
                            <el-form-item label="广告图"
                                style="margin-top:10px">
                                <el-upload class="avatar-uploader"
                                    :action="$http.defaults.baseURL + '/upload'"
                                    :show-file-list="false"
                                    :on-success="(res)=>uploaded(res,item)">
                                    <img v-if="item.img_url"
                                        :src="item.img_url"
                                        class="avatar">
                                    <i v-else
                                        class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-card>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                    @click="submitForm('ruleForm')">{{this.id?'编辑':'创建'}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props: ["id"],
    data() {
        return {
            ruleForm: {
                title: null,
                items: []
            }
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
            await this.$http.post("/reset/ads/create", body);
            this.golist();
        },
        async edit(body) {
            await this.$http.put(`/reset/ads/update/${this.id}`, body);
            this.golist();
        },
        golist() {
            this.$router.push("/ads/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async setCate() {
            let res = await this.$http.get(`/reset/ads/info/${this.id}`);
            this.ruleForm = res.data;
        },
        uploaded(res, item) {
            this.$set(item, "img_url", res.url);
        }
    },
    mounted() {
        this.id && this.setCate();
    }
};
</script>
<style>
.avatar {
    height: 128px;
    display: block;
}
</style>
