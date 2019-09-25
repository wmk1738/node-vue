<template>
    <el-container style="height: 100vh">
        <el-aside width="200px"
                  style="background-color: rgb(238, 241, 246)">
            <Menu :menu_config="menu_config"></Menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>

<script>
import Menu from "./../components/Menu";
export default {
    components: { Menu },
    data() {
        return {
            menu_config: [
                {
                    title: "内容管理",
                    group: [
                        {
                            title: "分类",
                            items: [
                                {
                                    title: "分类列表",
                                    router: "/categories/list"
                                },
                                {
                                    title: "新增分类",
                                    router: "/categories/create"
                                }
                            ]
                        },
                        {
                            title: "物品",
                            items: [
                                {
                                    title: "物品列表",
                                    router: "/goods/list"
                                },
                                {
                                    title: "新增物品",
                                    router: "/goods/create"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
</script>
