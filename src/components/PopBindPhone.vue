<template>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup bind_phone_wrap">
        <div class="pop_wrap">
            <div class="pop_box">
                <img src="static/images/close.png" alt="" class="close" @click="close()">
                <span class="skip" @click="skip()">跳过</span>
                <div class="pop_tt">绑定手机号码</div>
                <div class="cont">
                    <p class="red_dis">绑定手机号码可以在开课前收到短信提醒</p>
                    <mt-field placeholder="请输入手机号码" type="tel" v-model="form.phone"></mt-field>
                    <mt-field placeholder="请输入验证码" v-model="form.code">
                        <button class="btn blue">获取验证码</button>
                    </mt-field>
                    <button class="btn red block h42" :disabled="!form.phone && !form.code">立即预约</button>
                </div>
            </div>
        </div>
    </mt-popup>
</template>

<script>

export default({
    data(){
        return {}
    },
    props:{
        popupVisible:{ 
            type: Boolean,
            default: false
        },
        form: {
            type: Object,
            default() {
                return {
                    phone: '',
                    code: ''
                }
            }
        }
    },
    created() {},
    computed:{},
    methods: {
        skip() {
            this.$emit('skip')
        }, 
        close() {
            this.$emit('cancel')
        }
    }
})
</script>

<style lang="less">


.bind_phone_wrap {
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.7);
    backface-visibility: hidden;
    .pop_wrap{
        position: relative;
        height: 100vh;
        width: 375px;
    }

    .pop_box{
        position: absolute;
        background: #fff;
        left: 0;
        right: 0;
        bottom: 0;
        width: 375px;
        border-radius:12px 12px 0px 0px;
        .close{
            position: absolute;
            width: 14px;
            height: 14px;
            right: 18px;
            top: 14px;
        }
        .skip{
            position: absolute;
            height: 24px;
            left: 18px;
            top: 14px;
            font-size:13px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(148,155,165,1);
        }
        .pop_tt{
            padding: 10px;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            text-align: center;
            color:rgba(18,23,50,1);
        }
        .cont{
            padding: 20px 24px 40px;
            .mint-cell-wrapper,.mint-cell:last-child{
                background-image: none;
            }
            .mint-cell{
                padding-left:14px;
                border-radius:28px;
                border:1px solid rgba(240,240,240,1);
                margin-bottom: 16px;
                button{
                    height: 31px;
                }
            }
            .red_dis{
                padding-bottom: 12px;
                font-size:13px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(211,45,38,1);
                text-align: center;
            }
        }
    }
}


    


</style>