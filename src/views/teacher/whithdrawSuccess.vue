<template>
    <div class="teacher_withdraw_success_page">
        <div class="main">
            <img src="../../assets/images/tix.png" alt="" class="tix">
            <p class="text_dis">请耐心等待审核，预计两个工作日<br>提现到微信零钱</p>
            <button class="btn block plain_blue f16">返回</button>
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
.teacher_withdraw_success_page{
    padding: 36px 32px;
    .main{
        .tix{
            display: block;
            width: 151px;
        }
        .text_dis{
            margin-top: 50vh;
            line-height: 1.5;
            text-align: center;
        }
        .btn{
            margin-top: 24px;
            height: 42px;
            background: transparent;
        }
    }
}
   
</style>