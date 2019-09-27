<template>
    <el-menu router
        :default-openeds="['0']"
        :default-active="$route.path">
        <el-submenu v-for="(sub,i) in this.menu_config"
            :key="i"
            :index="''+i">
            <template slot="title"><i class="el-icon-message"></i>{{sub.title}}</template>
            <el-menu-item-group v-for="(group,group_i) in sub.group"
                :key="group_i">
                <template slot="title">{{group.title}}</template>
                <el-menu-item v-for="(item,item_i) in group.items"
                    :key="item_i"
                    :index="item.router">{{item.title}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>

</template>

<script>
export default {
    name: "Menu",
    props: ["menu_config"],
};
</script>

<style lang='scss' scoped>
</style>