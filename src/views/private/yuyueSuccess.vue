<template>
    <div class="page_wrap yuyue_success_page ">
        <div class="top">
            <img src="../../assets/images/yycg@2x.png" alt="" class="suc_img">
            <div class="text_dis">成功预约 汪涛老师 私课</div>
            <p class="color_shadow">{{data.time}}</p>
            <button class="btn blue block">进入教室</button>
        </div>
        <div class="card question">
            <p class="tt">您的问题</p>
            <p class="text_dis">填写您想咨询老师的问题，方便老师提前准备</p>
            <button class="btn plain_grey block">填写</button>
        </div>
        <img src="../../assets/images/kefu@2x.png" alt="" class="kefu" @click="showPop=true">

        <PopWrap 
            :popupVisible="showPop" 
            title="添加客服"
            @cancel="showPop=false"
            @skip="showPop=false">
            <div class="flex_box kefu_alert">
                <div class="item">
                    <img src="../../assets/images/header.jpg" alt="" class="ewm">
                    <p class="text_dis">客服微信二维码</p>
                    <button class="btn plain_blue">保存</button>
                </div>
                <div class="item">
                    <div class="weixin_info flex_box">
                        <img src="../../assets/images/wx@2x.png" alt="" class="weix">
                        <p class="name">cike001</p>
                    </div>
                    <p class="text_dis">客服微信账号</p>
                    <button class="btn plain_blue">复制</button>
                </div>
            </div>
        </PopWrap>  
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import PopWrap from '@/components/PopWrap';

export default {
    name: 'test',
        data() {
        return {
            data: {
                teacher: '汪涛',
                header: require('../../assets/images/header.jpg'),
                studentHeader: require('../../assets/images/header.jpg'),
                time: '2020年8月1日 17:00-18:00',
                name: '罗昭诚',
                comment: '讲课非常好，非常清楚'
                
            },
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
    .yuyue_success_page{
        padding:0;
        .top{
            padding: 49px 60px;
            height:305px;
            background: url('static/images/yycg_bg@2x.png') top center no-repeat;
            background-size: 100%;
            text-align: center;
            .suc_img{
                height: 60px;
                margin-bottom: 15px;
            }
            .text_dis{
                margin-bottom: 10px;
                font-size:15px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(182,186,233,1);
            }
            .btn{
                margin-top: 40px;
                // width:177px;
                height:43px;
                font-size: 16px;
            }
        }
        
        .question{
            padding: 21px 27px;
            margin: 7px 16px 17px;
            .tt{
                padding-bottom: 7px;
                font-size:16px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(18,23,50,1);
            }
            .btn{
                height: 32px;
                margin-top: 22px;
                color: #1B226E;
                font-size: 14px;
            }
        }
        .kefu{
            position: fixed;
            right: 7px;
            bottom: 11px;
            height: 48px;
        }
        .kefu_alert{
            // padding: 29px 0 40px;
            justify-content: space-around;
            .item, .ewm, .weixin_info{
                width:110px;
                height:110px;
                text-align: center;
            }
            .item{
                height: auto;
                .btn{
                    margin: 15px auto 0;
                    width:68px;
                    height:27px;
                }
            }
            .weixin_info{
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .weix{
                    width: 29px;
                    margin-bottom: 12px;
                }
                
            }

        }
    }
   
</style>