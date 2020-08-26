<template>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup common_pop_wrap">
        <div class="pop_wrap">
            <div class="pop_box">
                <img src="static/images/close.png" alt="" class="close" @click="close()">
                <span class="skip" @click="skip()" v-if="showSkip">跳过</span>
                <div class="pop_tt">{{title}}</div>
                <div class="cont">
                    <slot></slot>   
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
        showSkip:{ 
            type: Boolean,
            default: false
        },
        title:{ 
            type: String,
            default: ''
        },
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


.common_pop_wrap {
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
        }
    }
}


    


</style>