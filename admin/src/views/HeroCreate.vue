<template>
    <div class="create-wrapper">
        <h1>{{this.id?'编辑':'新增'}}英雄</h1>
        <el-form :model="ruleForm"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
            <el-tabs type="border-card"
                     value="base">
                <el-tab-pane label="基本信息"
                             name="base">
                    <el-form-item label="英雄名">
                        <el-col :span="6">
                            <el-input v-model="ruleForm.name"
                                      placeholder="请输入英雄名"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="称号">
                        <el-col :span="6">
                            <el-input v-model="ruleForm.title"
                                      placeholder="请输入称号"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="英雄头像">
                        <el-upload class="avatar-uploader"
                                   :action="this.$http.defaults.baseURL + '/upload'"
                                   :show-file-list="false"
                                   :on-success="upload">
                            <img v-if="ruleForm.avatar"
                                 :src="ruleForm.avatar"
                                 class="avatar">
                            <i v-else
                               class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="职业">
                        <el-col :span="6">
                            <el-select multiple
                                       v-model="ruleForm.professions"
                                       placeholder="请选择英雄职业">
                                <el-option v-for="item in professions"
                                           :key="item._id"
                                           :label="item.name"
                                           :value="item._id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="难度">
                        <el-col :span="6">
                            <el-rate v-model="ruleForm.dif_i"
                                     show-score
                                     allow-half
                                     :max="10"
                                     text-color="#ff9900">
                            </el-rate>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="技能">
                        <el-col :span="6">
                            <el-rate v-model="ruleForm.skill_i"
                                     show-score
                                     allow-half
                                     :max="10"
                                     text-color="#ff9900">
                            </el-rate>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="攻击">
                        <el-col :span="6">
                            <el-rate v-model="ruleForm.attack_i"
                                     show-score
                                     :max="10"
                                     allow-half
                                     text-color="#ff9900">
                            </el-rate>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="生存">
                        <el-col :span="6">
                            <el-rate v-model="ruleForm.survive_i"
                                     show-score
                                     :max="10"
                                     text-color="#ff9900">
                            </el-rate>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="顺风出装">
                        <el-col :span="6">
                            <el-select multiple
                                       v-model="ruleForm.follow_goods.goods"
                                       placeholder="请选择顺风出装">
                                <el-option v-for="item in goods"
                                           :key="item._id"
                                           :label="item.name"
                                           :value="item._id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="顺风小提示">
                        <el-col :span="6">
                            <el-input v-model="ruleForm.follow_goods.tip"
                                      type="textarea"
                                      :rows="3"
                                      placeholder="请输入顺风小提示"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="逆风出装">
                        <el-col :span="6">
                            <el-select multiple
                                       v-model="ruleForm.against_goods.goods"
                                       placeholder="请选择逆风出装">
                                <el-option v-for="item in goods"
                                           :key="item._id"
                                           :label="item.name"
                                           :value="item._id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="逆风小提示">
                        <el-col :span="6">
                            <el-input v-model="ruleForm.against_goods.tip"
                                      type="textarea"
                                      :rows="3"
                                      placeholder="请输入逆风小提示"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="使用技巧">
                        <el-col :span="6">
                            <el-input v-model="ruleForm.use_skill"
                                      type="textarea"
                                      :rows="3"
                                      placeholder="请输入使用技巧"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="对抗技巧">
                        <el-col :span="6">
                            <el-input v-model="ruleForm.against_skill"
                                      type="textarea"
                                      :rows="3"
                                      placeholder="请输入对抗技巧"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="团战思路">
                        <el-col :span="6">
                            <el-input v-model="ruleForm.group_skill"
                                      type="textarea"
                                      :rows="3"
                                      placeholder="请输入团战思路"></el-input>
                        </el-col>
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="技能"
                             name="skill">
                    <el-button type="primary"
                               @click="ruleForm.skills.push({})"
                               icon="el-icon-plus">添加技能</el-button>
                    <el-row style="margin-top:10px"
                            :gutter="20">
                        <el-col :span="8"
                                style="margin-top: 10px;"
                                v-for="(skill,i) in ruleForm.skills"
                                :key="i">
                            <el-card shadow="never">
                                <div slot="header"
                                     class="clearfix">
                                    <span>技能{{i+1}}</span>
                                    <el-button type="danger"
                                               icon="el-icon-delete"
                                               @click="ruleForm.skills.splice(i,1)"
                                               circle></el-button>
                                </div>
                                <el-form-item label="技能名">
                                    <el-input v-model="skill.name"
                                              placeholder="请输入技能名"></el-input>
                                </el-form-item>
                                <el-form-item label="技能图标">
                                    <el-upload class="avatar-uploader"
                                               :action="$http.defaults.baseURL + '/upload'"
                                               :show-file-list="false"
                                               :on-success="(res)=>skillUpload(res,skill)">
                                        <img v-if="skill.icon"
                                             :src="skill.icon"
                                             class="avatar">
                                        <i v-else
                                           class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </el-form-item>
                                <el-form-item label="冷却值">
                                    <el-input v-model="skill.cool"
                                              placeholder="请输入冷却值"></el-input>
                                </el-form-item>
                                <el-form-item label="消耗">
                                    <el-input v-model="skill.consume"
                                              placeholder="请输入消耗"></el-input>
                                </el-form-item>
                                <el-form-item label="技能描述">
                                    <el-input type="textarea"
                                              :rows="3"
                                              v-model="skill.description"
                                              placeholder="请输入技能描述"></el-input>
                                </el-form-item>
                                <el-form-item label="提示">
                                    <el-input v-model="skill.tip"
                                              type="textarea"
                                              :rows="3"
                                              placeholder="请输入提示"></el-input>
                                </el-form-item>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
            <el-form-item style="margin-top:1rem">
                <el-button style="margin: 0 auto;display: block;"
                           type="primary"
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
                avatar: "",
                title: null,
                professions: [],
                dif_i: null,
                skill_i: null,
                attack_i: null,
                survive_i: null,
                skills: [],
                follow_goods: {},
                against_goods: {},
                use_skill: null,
                against_skill: null,
                group_skill: null
            },
            options: [],
            professions: [],
            goods: [],
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
            await this.$http.post("/reset/heroes/create", body);
            this.golist();
        },
        async edit(body) {
            await this.$http.put(`/reset/heroes/update/${this.id}`, body);
            this.golist();
        },
        golist() {
            this.$router.push("/heroes/list");
            this.$message({
                type: "success",
                message: "保存成功"
            });
        },
        async setCate() {
            let res = await this.$http.get(`/reset/heroes/info/${this.id}`);
            this.ruleForm = res.data;
        },
        upload(res) {
            this.$set(this.ruleForm, "avatar", res.url);
        },
        skillUpload(res, skill) {
            this.$set(skill, "icon", res.url);
        },
        async fetchOptions() {
            let res = await this.$http.get("/reset/categories");
            this.professions = res.data;
            let res2 = await this.$http.get("/reset/goods");
            this.goods = res2.data;
            console.log("res", res);
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

<style>
.el-rate {
    margin-top: 10px;
}
.el-card__header {
    padding-top: 6px;
    padding-bottom: 6px;
}
.clearfix {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>