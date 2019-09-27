<template>
    <div class="create-wrapper">
        <h1>{{this.id?'编辑':'新增'}}文章</h1>
        <el-form :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="文章名"
                prop="title">
                <el-col :span="6">
                    <el-input v-model="ruleForm.title"
                        placeholder="请输入文章名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="分类"
                prop="categories">
                <el-select v-model="ruleForm.categories"
                    placeholder="请选择分类">
                    <el-option v-for="item in options"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="内容"
                prop="categories">
                <vue-editor v-model="ruleForm.content"
                    useCustomImageHandler
                    @image-added="handleImageAdded"></vue-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                    @click="submitForm('ruleForm')">{{this.id?'编辑':'创建'}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    components: { VueEditor },
    props: ["id"],
    data() {
        return {
            ruleForm: {
                title: null,
                categories: null,
                content: null
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
            await this.$http.post("/reset/articles/create", body);
            this.golist();
        },
        async edit(body) {
            await this.$http.put(`/reset/articles/update/${this.id}`, body);
            this.golist();
        },
        golist() {
            this.$router.push("/articles/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async setCate() {
            let res = await this.$http.get(`/reset/articles/info/${this.id}`);
            this.ruleForm = res.data;
        },
        async fetchOptions() {
            let res = await this.$http.get("/reset/categories");
            this.options = res.data;
        },
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            var formData = new FormData();
            formData.append("file", file);

            let res = await this.$http.post(
                this.$http.defaults.baseURL + "/upload",
                formData
            );
            console.log("upload", res);
            let url = res.data.url; // Get url from response
            Editor.insertEmbed(cursorLocation, "image", url);
            resetUploader();
        }
    },
    created() {
        this.fetchOptions();
    },
    mounted() {
        this.id && this.setCate();
    }
};
</script>
