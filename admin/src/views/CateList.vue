<template>
    <List v-bind="props"></List>
</template>

<script>
export default {
    data() {
        return {
            props: {
                table_config: {
                    title: "分类",
                    columns: [
                        { prop: "_id", label: "ID" },
                        { prop: "parent", label: "类名" },
                        { prop: "name", label: "子类" }
                    ]
                },
                api_model: "categories"
            }
        };
    }
};
</script>