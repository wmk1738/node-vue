<template>
    <div>
        <h1>{{table_config.title}}</h1>
        <el-table :data="tableData">
            <el-table-column v-for="item in table_config.columns"
                :key="item.prop"
                :label="item.label">
                <template slot-scope="scope">
                    <img v-if="!!item.showSlot"
                        :src="scope.row[item.prop]"
                        alt="">
                    <span v-else>{{item.handleCon?item.handleCon(scope.row):scope.row[item.prop]}}</span>
                </template>
            </el-table-column>
            <el-table-column fixed="right"
                label="操作">
                <template slot-scope="scope">
                    <el-button type="text"
                        @click="edit(scope.row)"
                        size="small">编辑</el-button>
                    <el-button type="text"
                        @click="remove(scope.row)"
                        size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "List",
    props: ["table_config", "api_model", "populate_name"],
    data: () => ({ tableData: [] }),
    methods: {
        async fetchList() {
            let url = `/reset/${this.api_model}${
                    this.populate_name ? "/" + this.populate_name : ""
                }`,
                items = await this.$http.get(url);
            this.tableData = items.data;
        },
        edit(row) {
            this.$router.push(`/${this.api_model}/edit/${row._id}`);
        },
        async remove(row) {
            await this.$http.delete(
                `/reset/${this.api_model}/delete/${row._id}`
            );
            this.fetchList();
            this.$message({
                type: "success",
                message: "删除成功！"
            });
        }
    },
    created() {
        this.fetchList();
    }
};
</script>

<style lang='scss' scoped>
</style>