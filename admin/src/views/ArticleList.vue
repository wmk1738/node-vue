<template>
    <List v-bind="props"></List>
</template>

<script>
export default {
    data() {
        return {
            props: {
                table_config: {
                    title: "文章列表",
                    columns: [
                        { prop: "_id", label: "ID" },
                        { prop: "title", label: "文章名称" },
                        // { prop: "categories", label: "文章分类" }
                    ]
                },
                api_model: "articles",
                populate_name:'categories'
            }
        };
    }
};
</script>
