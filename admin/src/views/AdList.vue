<template>
    <List v-bind="props"></List>
</template>

<script>
export default {
    data() {
        return {
            props: {
                table_config: {
                    title: "广告列表",
                    columns: [
                        { prop: "_id", label: "ID" },
                        { prop: "title", label: "广告名称" },
                    ]
                },
                api_model: "ads",
                // populate_name:'categories'
            }
        };
    }
};
</script>
