<template>
    <div class="create-wrapper">
        <h1>{{this.id?'编辑':'新增'}}用户</h1>
        <el-form :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="用户名"
                prop="user">
                <el-col :span="6">
                    <el-input v-model="ruleForm.user"
                        placeholder="请输入用户名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="密码"
                prop="password">
                <el-col :span="6">
                    <el-input v-model="ruleForm.password"
                        placeholder="请输入密码"></el-input>
                </el-col>
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
                user: null,
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
            await this.$http.post("/reset/users/create", body);
            this.golist();
        },
        async edit(body) {
            await this.$http.put(`/reset/users/update/${this.id}`, body);
            this.golist();
        },
        golist() {
            this.$router.push("/users/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async setCate() {
            let res = await this.$http.get(`/reset/users/info/${this.id}`);
            this.ruleForm = res.data;
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
