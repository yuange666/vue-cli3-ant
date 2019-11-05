<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <a-alert :message="vuexTest" type="success" style="width: 200px;margin: 0 auto 20px"/>
        <a-button type="primary" @click="login">网络请求测试</a-button>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex';
    import API from '../api/api_user';
    import {bus} from '../bus';
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {

            }
        },
        computed:{
          ...mapState('module1',{
            vuexTest:state=>state.vuexTest
          })
        },
        methods: {
            login() {
                API.login({
                    userName: 'admin',
                    password: 'admin'
                }).then((res) => {
                    this.$message.success('接口成功返回');
                })
            }
        },
        mounted() {
            bus.$on('eventBus',(v)=>{
                console.log(v);
            })
        },
        destroyed() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
