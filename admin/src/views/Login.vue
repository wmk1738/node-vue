<template>
    <el-card class="box-card">
        <div slot="header"
            class="clearfix">
            <span>用户登录</span>
        </div>
        <el-form :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="用户名">
                <el-input v-model="ruleForm.user"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password"
                    v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                    @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                user: null,
                password: null
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.login();
                } else {
                    return false;
                }
            });
        },
        async login() {
            let res = await this.$http.post("login", this.ruleForm);
            localStorage.setItem("token", res.data.token);
            this.$message({
                type: "success",
                message: "登陆成功！"
            });
            this.$router.push("/");
        }
    }
};
</script>

<style lang='scss' scoped>
.box-card {
    width: 520px;
    margin: 0 auto;
    margin-top: 200px;
    .clearfix {
        height: 32px;
    }
}
</style>