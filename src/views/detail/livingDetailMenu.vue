<template>
    <div class="living_detail_menu_page">
       <div class="card mulu">
            <div class="f16 bold tt">课程目录</div>
            <div class="flex_box text_dis sub_tt">
                <span class="bd">
                    进度14/15
                    <!-- <img src="../../assets/images/weiwanc@2x.png" alt="" class="label"> -->
                    <img src="../../assets/images/yiwancheng@2x.png" alt="" class="label">
                </span>
                <img src="../../assets/images/yiwenicon@2x.png" alt="" class="ft yiwen" @click="showPop=true">
                <span class="ft">完成规则</span>
            </div>
            <ul class="list">
                <li class="flex_box red">
                    <p class="bd">01、软件入门</p>
                    <img src="../../assets/images/icon_zcsk@2x.png" alt="" class="icon">
                </li>
                <li class="flex_box">
                    <p class="bd">02、界面介绍&新建和存储</p>
                    <img src="../../assets/images/kybf@2x.png" alt="" class="icon">
                </li>
                <li class="flex_box grey">
                    <p class="bd">03、如何创建一个逼真的场景</p>
                    <img src="../../assets/images/ywc@2x.png" alt="" class="icon">
                </li>
                <li class="flex_box">
                    <p class="bd">04、课后作业</p>
                </li>
            </ul>
        </div>

        <pop-wrap
            :popupVisible="showPop" 
            title="完成规则"
            :showClose="false"
            class="rules_pop"
            @cancel="showPop=false">
            <div class="rules">
                课件内所有视频看完
            </div>
            <button class="btn white block" @click="showPop=false">我知道了</button>
        </pop-wrap>
    </div>
</template>

<script>
import PopWrap from '@/components/PopWrap';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            showPop: false
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('tabbar', {
            show: false
        })
    },
    methods: {
    },
    components: {PopWrap}
}
</script>

<style lang="less" scoped>
.living_detail_menu_page{
    padding: 0 16px 60px;
    .card{
        padding: 24px 16px ;
        margin-top: 12px;
    }

    .mulu{
       padding-bottom: 8px;
       .yiwen{
           width: 12px;
           margin-right: 6px;
       }
       .label{
           height: 18px;
           margin-left: 8px;
           vertical-align: middle;
       }
       .sub_tt{
           font-size: 13px;
           padding-top: 4px;
           padding-bottom: 8px;
       }
       .bd{padding-left: 0;}
       .list{
           li{
               height: 52px;
               border-top: solid 1px #F0F0F0;
               font-size: 14px;
               font-weight: bold;
               &:first-child{
                   border-top: 0;
               }
               .icon{
                   width: 15px;
               }
           }
       }
   }

   .rules_pop{
       .rules{
           padding: 0 16px 33px;
           min-height: 100px;
           color: #585B60;
           font-size: 15px;
       }
       button{
           margin-bottom: -40px;
           height: 66px;
           border-top: solid 1px #F3F3F3;
       }
   }

}
   
</style>