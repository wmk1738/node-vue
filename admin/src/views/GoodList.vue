<template>
    <List v-bind="props"></List>
</template>

<script>
export default {
    data() {
        return {
            props: {
                table_config: {
                    title: "物品列表",
                    columns: [
                        { prop: "name", label: "物品名称" },
                        { prop: "img_url", label: "物品图片", showSlot: true }
                    ]
                },
                api_model: "goods"
            }
        };
    }
};
</script>
