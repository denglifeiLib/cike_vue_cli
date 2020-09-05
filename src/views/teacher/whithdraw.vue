<template>
    <div class="teacher_withdraw_page">
        <div class="card">
            <p class="text_dis">提现金额</p>
            <mt-field label="¥" placeholder="" v-model="money" class="input" type="number"></mt-field>
            <p>
                <span class="text_dis">当前余额 120.22元</span>
                <span class="normal">全部提现</span>
            </p>
            <p class="tt">提现方式</p>
            <div class="way flex_box" @click="checked=!checked">
                <img src="../../assets/images/wx.png" alt="" class="hd wx">
                <p class="bd">微信提现</p>
                <img src="../../assets/images/gou.png" alt="" class="gou ft" v-if="checked">
                <span class="gou_line ft" v-else></span>
            </div>
            <p class="tt">提现说明</p>
            <p class="text_dis">1.提现到微信零钱，预计两个工作日内到账</p>
            <p class="text_dis">2.提现失败后，系统会在24小时内返还到原账户</p>
            <p class="text_dis">3.每个用户每天可提现一次</p>
            <button class="btn block red f16" @click="$router.push({name:'teacher_whithdraw_success'})">立即提现</button>
        </div>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';

export default {
    name: 'test',
    data() {
        return {
            money: '',
            checked: false
        }
    },
    created() {
        // this.$emit('showClasstip')
        this.$emit('tabbar', {
            show: false
        })
    },
    methods: {
        choose(item, i) {
            

        },
        onConfirm(date) {
            
        },
        formatDate(date) {
            
        },
    },
    components: {}
}
</script>

<style lang="less">
.teacher_withdraw_page{
    padding: 8px 16px;
    .card{
        padding: 28px 16px 32px;
        .input{
            padding: 0;
            border: 0;
            border-radius: 0;
            border-bottom: solid 1px #F0F0F0;
            input{
                font-size: 40px;
                font-family: Helvetica-Bold, Helvetica;
                font-weight: bold;
                color: #121732;
                line-height: 72px;
            }
            .mint-cell-title{
                margin-right: 12px;
                width: auto;
                font-size: 30px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #121732;
                line-height: 42px;
            }
        }
        .normal{
            margin-left: 12px;
        }
        .tt{
            margin: 32px 0 12px;
        }
        .way{
            padding: 0 12px 0 14px;
            width: 128px;
            height: 38px;
            background: #F9F9F9;
            border-radius: 8px;
            border: 1px solid #E4E4E4;
        }
        .gou_line{
            width: 12px;
            height: 12px;
            border-radius: 3px;
            background-color: #fff;
            border: solid 1px #E4E4E4;
        }
        .gou{width: 12px;}
        .wx{width: 17px;}
        .btn{
            margin-top: 24px;
            height: 42px;
        }
    }
}
   
</style>