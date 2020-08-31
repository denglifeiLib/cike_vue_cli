<template>
    <div class="login_page" alt="">
        <img src="../../assets/images/Hello.png" alt="" class="hello">
        <p class="slogen">欢迎来到此课</p>
        <div class="flex_box row">
            <img src="../../assets/images/icon_login_account@2x.png" alt="" class="hd icon">
            <mt-field placeholder="请输入用户名" v-model="username" class="bd"></mt-field>
        </div>
        <div class="flex_box row">
            <img src="../../assets/images/icon_login_password@2x.png" alt="" class="hd icon">
            <mt-field type="password" placeholder="请输入用户名" v-model="password" class="bd"></mt-field>
        </div>
        <button class="btn white block" @click="$router.push('/')">刷新</button>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import Tabs from '@/components/Tabs';
export default {
    name: 'test',
    data() {
        return {}
    },
    created() {
        
        console.log(999, this.$route.query)
    },
    methods: {
       fresh(index) {
           
        },
    },
    components: {}
}
</script>

<style lang="less">
.login_page{
    min-height: 100vh;
    background: url('static/images/login_bg@2x.png');
    background-size: contain;
    padding: 135px 30px 0;
    .hello{
        height: 38px;
    }
    .slogen{
        padding-top: 8px;
        margin-bottom: 26px;
        font-size: 26px;
        font-family: AlibabaPuHuiTi-Medium, AlibabaPuHuiTi;
        font-weight: 500;
        color: #FFFFFF;
    }
    .row{
        padding-left: 4px;
        border-bottom: solid 1px rgba(255,255,255,.4);
        .icon{
            width: 16px;
        }
        .bd{
            margin-bottom: 0;
            border: 0;
            background: transparent;
        }
        input{
            color: #fff;
            background: transparent;
            &::placeholder{
                color: rgba(247, 247, 247, 0.6);
            }
        }
        .mintui-field-error:before{
            color: #fff;
        }
    }
    .btn{
        margin-top: 60px;
        width: 291px;
        height: 46px;
        font-size: 17px;
        font-weight: 400;
    }
}


    
</style>