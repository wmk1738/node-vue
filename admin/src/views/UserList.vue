<template>
    <List v-bind="props"></List>
</template>

<script>
export default {
    data() {
        return {
            props: {
                table_config: {
                    title: "用户列表",
                    columns: [
                        { prop: "_id", label: "ID" },
                        { prop: "user", label: "用户名称" },
                        // { prop: "password", label: "密码" },
                    ]
                },
                api_model: "users",
            }
        };
    }
};
</script>
