<template>
    <div style="height: 100vh;display: flex;align-items: center;justify-content: center">
        <a-result status="404" title="404" sub-title="很遗憾，你访问的页面未找到">
            <template #extra>
                <a-button type="primary" @click="gotoNotFound">
                    返回首页
                </a-button>
            </template>
        </a-result>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {}
    },
    methods: {
        gotoNotFound(){
            this.$router.replace('/');
        }
    },
    mounted() {

    }
}
</script>
<style scoped>

</style>
