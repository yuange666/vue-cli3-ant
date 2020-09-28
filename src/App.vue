<template>
        <a-config-provider :autoInsertSpaceInButton="false" :locale="locale">
            <div id="app">
                <div id="nav">
                    <router-link to="/">Home</router-link>
                    |
                    <router-link to="/about">About</router-link>
                    <a-tabs default-active-key="2">
                        <a-tab-pane key="1">
      <span slot="tab">
        <img src="./assets/logo.png" alt="">
        Tab 1
      </span>
                            Tab 1
                        </a-tab-pane>
                        <a-tab-pane key="2">
      <span slot="tab">
        <a-icon type="android" />
        Tab 2
      </span>
                            Tab 2
                        </a-tab-pane>
                    </a-tabs>
                </div>
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
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
