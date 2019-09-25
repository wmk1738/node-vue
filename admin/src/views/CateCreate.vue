<template>
    <div class="create-wrapper">
        <h1>{{this.id?'编辑':'新增'}}分类</h1>
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
            <el-form-item label="分类名"
                          prop="parent">
                <el-select v-model="ruleForm.parent"
                           placeholder="请选择分类名">
                    <el-option v-for="item in options"
                               :key="item._id"
                               :label="item.name"
                               :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="子类名"
                          prop="name">
                <el-col :span="6">
                    <el-input v-model="ruleForm.name"
                              placeholder="请输入子类名"></el-input>
                </el-col>
                <!-- <el-input v-model="ruleForm.name"></el-input> -->
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
                parent: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入创建名称",
                        trigger: "blur"
                    }
                ]
            },
            options: []
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
            await this.$http.post("/reset/categories/create", body);
            this.golist();
        },
        async edit(body) {
            await this.$http.put(`/reset/categories/update/${this.id}`, body);
            this.golist();
        },
        golist() {
            this.$router.push("/categories/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async setCate() {
            let res = await this.$http.get(`/reset/categories/info/${this.id}`);
            this.ruleForm = res.data;
        },
        //获取父类的下拉数据
        async fetchDropPar() {
            let res = await this.$http.get("/reset/categories/options");
            this.options = res.data;
            console.log("options", this.options);
        }
    },
    created() {
        this.fetchDropPar();
    },
    mounted() {
        this.id && this.setCate();
    }
};
</script>