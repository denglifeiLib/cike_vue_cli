<template>
    <div class="orders_page_wrap">
       <div class="flex_box">
           <tabs :list="tabList" :active="activeTab" @change="changeTab" class="bd"></tabs> 
            <img src="../../assets/images/shaixuan@2x.png" alt="" class="saixuan">
       </div>

       <div class="main">
           <div class="card list" v-for="(item,i) in myClassList" :key="i" @click="$router.push('order_detail')">
               <div class="top_info flex_box">
                   <img src="../../assets/images/icon_sk@2x.png" alt="" class="top_icon">
                   <p class="bd">私课</p>
                   <span class="ft red" v-if="item.status==='0'">等待付款</span>
                   <span class="ft text_dis" v-if="item.status==='1'">交易关闭</span>
                   <span class="ft blue" v-if="item.status==='2'">等待开始</span>
                   <span class="ft text_dis" v-if="item.status==='3'">已完成</span>
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
                <div class="action_area flex_box" @click.stop="">
                    <button class="btn plain_grey ft" v-if="item.status==='0'">取消订单</button>
                    <button class="btn red ft" v-if="item.status==='0'">付款</button>
                    <button class="btn plain_grey ft" v-if="item.status==='1'">删除订单</button>
                    <button class="btn plain_grey ft" v-if="item.status==='1'">重新购买</button>
                    <button class="btn plain_red ft" v-if="item.status==='2'">进入教室</button>
                    <button class="btn plain_grey ft" v-if="item.status==='3'">查看回放</button>
                    <button class="btn plain_grey ft" v-if="item.status==='3'">评价</button>
                </div>
            </div>

            <div class="empty" v-if="!myClassList || myClassList.length==0">
                <img src="../../assets/images/my/kong_dindan@2x.png" alt="">
                <span class="text_dis">暂无评论</span>
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
            tabList: ['全部', '待付款', '已购买', '已完成', '待评价'],
            activeTab: 0,

            myClassList: [],
            allClassList: [
                {
                    status: '1',
                    teacher: '汪涛',
                    price: 110,
                    time: '2020年8月1日 17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }, {
                    status: '0',
                    teacher: '汪涛',
                    num: '1',
                    price: 110,
                    time: '2020年8月1日 17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }, {
                    status: '2',
                    teacher: '汪涛',
                    num: '2',
                    price: 110,
                    time: '2020年8月1日 17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }, {
                    status: '3',
                    teacher: '汪涛',
                    num: '2',
                    price: 110,
                    time: '2020年8月1日 17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }
            ]
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {show: false})
        this.classStatusMap = {
            '0': '待付款',
            '1': '已购买',
            '2': '已完成',
            '3': '待评价',
        }

        this.changeTab((this.$route.query||{}).activeTab || 0)
        this.myClassList = this.allClassList

        console.log(999, this.$route.query)
    },
    methods: {
       changeTab(index) {
           console.log(333, index)
            this.activeTab = index*1;
            if(index===0) {
                this.myClassList = this.allClassList
            } else {
                this.myClassList = this.allClassList.filter(item=> item.status == index-1)
            }
        },
    },
    components: {Tabs}
}
</script>

<style lang="less" scoped>
.orders_page_wrap{
    .empty{
        height: calc(100vh - 90px);
        padding-bottom: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 95px;
            margin-bottom: 12px;
        }
    }
}

    .main{
        margin-top: 12px;
        padding: 0 16px;
        overflow: hidden;
    }
    .saixuan{
        width: 24px;
    }
    .list{
        position: relative;
        padding: 5px 8px 0;
        margin-bottom: 10px;
        .top_info{
            height: 40px;
            padding-left: 8px;
            padding-right: 8px;
            border-bottom: solid 1px #F3F3F3;
            .top_icon{
                width: 18px;
            }
            .bd{
                font-size:14px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(18,23,50,1);
            }
            .ft{
                font-size: 12px;
                &.red{
                    color: #D32D26;
                }
                &.blue{
                    color:#3039A5 ;
                }
            }
        }
        .img_info{
            padding: 10px 8px;
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
        .action_area{
            padding: 8px 8px 10px;
            border-top: solid 1px #F3F3F3;
            justify-content: flex-end;
            button{
                margin-left: 14px;
            }
        }
    }
</style>