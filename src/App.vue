<template>
        <a-config-provider :autoInsertSpaceInButton="false" :locale="locale">
            <div id="app">
                <router-view/>
            </div>
        </a-config-provider>
</template>
<script>
    import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

    export default {
        data() {
            return {
                locale: zhCN,
            }
        }
    }
</script>
<style lang="scss">

</style>
