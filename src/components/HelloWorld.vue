<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <a-alert :message="vuexTest" type="success" style="width: 200px;margin: 0 auto 20px"/>
        <a-button type="primary" @click="login">网络请求测试</a-button>
        <div class="pagination">
            <a-pagination
                    style="margin-top: 41px;margin-bottom: 51px"
                    v-model="searchCondition.pageNum"
                    :total="100"
                    :pageSize.sync="searchCondition.pageSize"
                    :pageSizeOptions="pageSizeOptions"
                    showSizeChanger
                    showQuickJumper
                    @change="pageChange"
                    @showSizeChange="onShowSizeChange"
            />
        </div>
        <a-select style="width: 200px" v-model="database">
            <a-select-option :value="item.id" v-for="item in databaseOptions">
                {{item.serverDatabase}}
            </a-select-option>
        </a-select>
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
                searchCondition: {
                    request: "{}",
                    pageNum: 1,
                    pageSize: 12,
                },
                pageSizeOptions: ['12', '24', '36'],
                total: 0,
                database:'123',
                databaseOptions:[
                    {
                        id:'123',
                        serverDatabase:'aaaa'
                    },
                    {
                        id:'21',
                        serverDatabase:'bbbb'
                    }
                ]
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
            },
            pageChange(page, pageSize) {
                this.searchCondition.pageNum=page;
                setTimeout(()=>{
                    this.total=100;
                },30)
            },
            //每页显示条数发生变化的回调
            onShowSizeChange(current, pageSize) {
                this.searchCondition.pageNum = current;
            },
        },
        mounted() {
            console.log(this.searchCondition);
            bus.$on('eventBus',(v)=>{
                console.log(v);
            });
            setTimeout(()=>{
                this.total=100;
            },200)
        },
        destroyed() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
