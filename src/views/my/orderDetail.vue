<template>
    <div class="page_wrap">
        <div class="top flex_box" v-if="item.status==='0'">
            <div class="bd">
                <p class="tt">待支付</p>
                <p class="dis">还有 <span class="time">1小时56分</span>  自动关闭订单</p>
            </div>
            <img src="../../assets/images/xq_dfk@2x.png" alt="" class="ft">
        </div>
        <div class="top flex_box" v-if="item.status==='1'">
            <div class="bd">
                <p class="tt">等待开始上课</p>
                <p class="dis">距离上课还有  <span class="time">1天 20小时 56分</span></p>
            </div>
            <img src="../../assets/images/xq_dkk@2x.png" alt="" class="ft" v-if="item.status==='1'">
        </div>
        <div class="top flex_box" v-if="item.status==='4'">
            <div class="bd">
                <p class="tt">交易已关闭</p>
            </div>
            <img src="../../assets/images/xq_ddgb@2x.png" alt="" class="ft" v-if="item.status==='4'">
        </div>
        <div class="top flex_box" v-if="item.status==='2'">
            <div class="bd">
                <p class="tt">交易已完成</p>
            </div>
            <img src="../../assets/images/xq_ddcg@2x.png" alt="" class="ft" v-if="item.status==='2'">
        </div>
        
        <div class="card list">
            <div class="top_info flex_box">
                <img src="../../assets/images/icon_sk@2x.png" alt="" class="top_icon">
                <p class="bd">私课</p>
            </div>
            <div class="flex_box img_info">
                <img :src="item.header" alt="" class="header">
                <div class="bd">
                    <p class="name">{{item.teacher}} 老师</p>
                    <p class="color_shadow calender_icon f15">
                        <img src="../../assets/images/rili_big@2x.png" alt="" class="icon">
                        {{item.time}}
                    </p>
                    <p class="text_dis">
                        {{['0'].indexOf(item.status) > -1 ? '需付款' : '已付款'}}
                        <span :class="{red:item.status==='0'}">¥{{item.price}}</span>
                    </p>
                </div>
            </div>
            <div class="order_info">
                <p class="tt">订单信息</p>
                <p class="text_dis">
                    <span>订单编号</span>
                    <span>1225588487746</span>
                    <button class="btn plain_blue">复制</button>
                </p>
                <p class="text_dis">
                    <span>创建时间</span>
                    <span>2020年7月25日 15:50:50</span>
                </p>
            </div>
        </div>

        <div class="action_area flex_box">
            <div class="bd"><img src="../../assets/images/lxkf_bt@2x.png" alt="" class="kefu"></div>
            <button class="btn plain_grey ft" v-if="item.status==='0'">取消订单</button>
            <button class="btn red ft" v-if="item.status==='0'">付款</button>
            <button class="btn plain_grey ft" v-if="item.status==='1'">删除订单</button>
            <button class="btn plain_grey ft" v-if="item.status==='1'">重新购买</button>
            <button class="btn plain_red ft" v-if="item.status==='2'">进入教室</button>
            <button class="btn plain_grey ft" v-if="item.status==='4'">查看回放</button>
            <button class="btn plain_grey ft" v-if="item.status==='4'">评价</button>
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
    .top{
        margin-top: 10px;
        margin-bottom: 24px;
        padding-left: 24px;
        padding-right: 30px;
        height: 115px;
        background: url('static/images/xq_topbg@2x.png') center no-repeat;
        background-size: 100%;
        .tt{
            font-size:20px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(255,255,255,1);
        }
        .dis{
            padding-top: 4px;
            font-size: 12px;
            color: #fff;
            .time{
                color: #FFDB66;
            }
        }
        img.ft{
            width: 82px;
        }
    }
    .list{
        position: relative;
        padding: 5px 8px 18px;
        margin-bottom: 10px;
        .top_info{
            height: 40px;
            padding-left: 8px;
            padding-right: 8px;
            .top_icon{
                width: 18px;
            }
            .bd{
                font-size:14px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(18,23,50,1);
            }
        }
        .order_info{
            padding-left: 8px;
            border-top: solid 1px #F3F3F3;
            .tt{
                padding-top: 22px;
                padding-bottom: 14px;
                font-size:14px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(18,23,50,1);
            }
            .text_dis {
                margin-bottom: 12px;
                span:first-child{
                    min-width: 61px;
                }
                button{
                    // width:32px;
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
            padding: 10px 8px 22px;
            .header{
                width:69px;
                height:69px;
                border-radius:8px;
            }
            >.bd{
                padding-left: 12px;
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
        
    }

    .action_area{
        position: fixed;
        left: -0;
        right: -0;
        bottom: 0;
        height: 51px;
        padding: 0 16px;
        background: #fff;
        // justify-content: flex-end;
        .bd{
            padding-left: 0;
        }
        .kefu{
            display: block;
            width: 81px;
        }
        button{
            margin-left: 14px;
        }
    }
</style>