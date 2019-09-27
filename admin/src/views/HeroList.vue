<template>
    <List v-bind="props"></List>
</template>

<script>
export default {
    data() {
        return {
            props: {
                table_config: {
                    title: "英雄列表",
                    columns: [
                        { prop: "name", label: "英雄名称" },
                        { prop: "avatar", label: "英雄图片", showSlot: true }
                    ]
                },
                api_model: "heroes"
            }
        };
    }
};
</script>
