<template>
    <div class="income_detail_page">
        
        <div class="card list">

            <div class="kecheng">
                <div class="top_info">购买课程</div>
                <div class="guessList flex_box">
                    <div class="image_hover">
                        <img src="../../assets/images/default1.jpg" alt="" class="bg poster">
                        <div class="score_label hover rightBottom">
                            <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                            <span class="">5.0</span>
                        </div>
                    </div>
                    <div>
                        <p class="f14 title ellipsis2">颠覆传颠覆传统的英语陪练课颠覆传统的英语陪练课统的英语陪练课</p>
                        <p class="text_dis">
                            <span class="f10 red">¥</span>
                            <span class="f14 red">230</span>
                            <span class="f10 originPrice">¥889</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="zhibo">
                <div class="top_info">购买直播</div>
                <div class="guessList flex_box">
                    <div class="image_hover">
                        <img src="../../assets/images/default1.jpg" alt="" class="bg poster">
                        <img src="../../assets/images/jiiaobiaohuifang@2x.png" alt="" class="hover topLeft">
                    </div>
                    <div>
                        <p class="f14 title ellipsis2">签单-大客户销售手册</p>
                        <p class="text_dis">
                            <span class="f10 red">¥</span>
                            <span class="f14 red">230</span>
                            <span class="f10 originPrice">¥889</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="sike">
                <div class="top_info">购买私课</div>
                <div class="flex_box img_info">
                    <img :src="item.header" alt="" class="header">
                    <div class="bd">
                        <p class="name">{{item.teacher}} 老师</p>
                        <p class="color_shadow calender_icon f15">
                            <img src="../../assets/images/rili_big@2x.png" alt="" class="icon">
                            {{item.time}}
                        </p>
                    </div>
                </div>
            </div>

            <div class="order_info">
                <p class="tt">提现信息</p>
                <p class="text_dis">
                    <span>订单编号</span>
                    <span>1225588487746</span>
                    <button class="btn plain_blue">复制</button>
                </p>
                <p class="text_dis">
                    <span>提现时间</span>
                    <span>2020年7月25日 15:50:50</span>
                </p>
                <p class="text_dis">
                    <span>提现状态</span>
                    <span class="blue">审核中</span>
                </p>
                <p class="text_dis">
                    <span>提现金额</span>
                    <span>232.00元</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import Tabs from '@/components/Tabs';
export default {
    name: 'test',
    data() {
        return {
            item: {
                status: '2',
                teacher: '汪涛',
                price: 110,
                time: '2020年8月1日 17:00-18:00',
                header: require('../../assets/images/header.jpg')
            },
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {show: false})
        this.classStatusMap = {
            '0': '待付款',
            '1': '已购买',
            '2': '已完成',
            // '3': '待评价',
            '4': '交易已关闭',
        }
        this.myClassList = this.allClassList
    },
    methods: {},
    components: {Tabs}
}
</script>

<style lang="less" scoped>
.income_detail_page{
    padding: 8px 16px 16px;
    .list{
        position: relative;
        padding:24px 16px;
        margin-bottom: 10px;
        .top_info{
            font-size:14px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(18,23,50,1);
        }
        .order_info{
            padding-left: 8px;
            .tt{
                padding-bottom: 14px;
                font-size:14px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(18,23,50,1);
            }
            .text_dis {
                margin-bottom: 12px;
                span:first-child{
                    display: inline-block;
                    min-width: 61px;
                }
                button{
                    // width:32px;
                    margin-left: 10px;
                    padding-top: 0;
                    padding-bottom: 0;
                    display: inline-block;
                    // height:15px;
                    min-width: auto;
                    font-size: 10px;
                    vertical-align: middle;
                }
            }
        }
        .img_info{
            padding: 19px 0 0;
            margin-bottom: 32px;
            .header{
                width:44px;
                height:44px;
                border-radius:8px;
            }
            >.bd{
                padding-left: 14px;
            }
            .name{
                padding-bottom: 2px;
                font-size:14px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(18,23,50,1);
            }
            .text_dis{padding-top: 7px;}
        }

        .guessList{
            padding: 19px 5px 0;
            margin-bottom: 32px;
            .image_hover{
                margin-right: 14px;
            }
            .poster{
               width: 123px;
                height: 68px;
                border-radius: 3px;
            }
            .topLeft{
                width: 58px;
            }
            .title{
                margin: 0 0 5px;
                height: 38px;
            }
            // .group_icon{
            //     height: 10px;
            //     margin-right: 3px;
            //     vertical-align: middle;
            // }
            .originPrice{
                border-bottom: solid 1px #949BA5;
                line-height: 0.1;
                display: inline-block;
            }
        }
        
    }
}
    

</style>