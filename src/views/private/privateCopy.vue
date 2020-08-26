<template>
    <div class="page_wrap">
       <tabs :list="tabList" :active="activeTab" size="large" @change="changeTab"></tabs> 

       <div class="main">

            <div v-if="activeTab==0">
                <div class="card list" v-for="(item,i) in teachersList" :key="i">
                    <div class="flex_box img_info">
                        <div class="header_wrap ft">
                            <img src="static/images/header.jpg" alt="" class="header">
                            <img src="static/images/xinshang@2x.png" alt="" class="label" v-if="item.isNew">
                            <img src="static/images/renqi@2x.png" alt="" class="label" v-if="item.isHot">
                        </div>
                        <div class="bd">
                            <p class="name">{{item.teacher}} 老师</p>
                            <p class="text_dis">{{item.introduce}}</p>
                        </div>
                    </div>
                    <div class="action_area flex_box">
                        <p class="text_dis bd">已授课{{item.timeLong}} | {{item.studentNum}}人次</p>
                        <button class="btn plain_red ft" @click="$router.push('yuyue')">立即预约</button>
                    </div>
                    <div class="tag" v-if="item.isFull">今日已约满</div>
                </div>
            </div>

            <div v-if="activeTab==1">
                <div class="my_list" v-for="(item,i) in myClassList" :key="i">
                    <div class="flex_box list_tt">
                        <img src="../../assets/images/icon_zcsk@2x.png" alt="" v-if="item.status==='1'"/>
                        <img src="../../assets/images/icon_wks@2x.png" alt="" v-else-if="item.status==='0'"/>
                        <img src="../../assets/images/icon_yjs@2x.png" alt="" v-else-if="item.status==='2'"/>
                        {{classStatusMap[item.status]}}
                        <span class="num" v-if="item.num">{{item.num}}</span>
                    </div>
                    <div class="card list_type flex_box" >
                        <div class="bd">
                            <div class="flex_box img_info">
                                <img :src="item.header" alt="" class="header">
                                <p class="name">{{item.teacher}} 老师</p>
                            </div>
                            <p class="color_shadow calender_icon">
                                <img src="../../assets/images/rili_big@2x.png" alt="" class="icon">
                                {{item.time}}
                            </p>
                        </div>
                        <div class="ft">
                            <img src="../../assets/images/btn_ckhf@2x.png" alt="" v-if="item.status==='2'" class="action_icon"/>
                            <img src="../../assets/images/btn_jrjs@2x.png" class="action_icon" alt="" v-else/>
                            {{item.status==='2' ? '进入教室' : '查看回放'}}
                        </div>
                    </div>
                </div>
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
            tabList: [
                {
                    label: '大咖',
                    number: 0
                }, {
                    label: '我的课程',
                    number: 2
                }
            ],
            activeTab: 0,
            teachersList: [
                {
                    teacher: '汪涛',
                    header: require('../../assets/images/header.jpg'),
                    introduce: '有功无过是短暂的，无功有过是行不通的，有功有过是最好的',
                    timeLong: '20小时',
                    studentNum: '2340',
                    isFull: true,
                    isNew: true,
                },
                {
                    teacher: '汪涛',
                    header: require('../../assets/images/header.jpg'),
                    introduce: '有功无过是短暂的，无功有过是行不通的，有功有过是最好的',
                    timeLong: '20小时',
                    studentNum: '2340',
                    isFull: false,
                    isNew: false,
                    isHot: true
                }, {
                    teacher: '汪涛',
                    header: require('../../assets/images/header.jpg'),
                    introduce: '有功无过是短暂的，无功有过是行不通的，有功有过是最好的',
                    timeLong: '20小时',
                    studentNum: '2340',
                    isFull: false,
                    isNew: false,
                    isHot: true
                }
            ],
            myClassList: [
                {
                    status: '1',
                    teacher: '汪涛',
                    time: '2020年8月1日 17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }, {
                    status: '0',
                    teacher: '汪涛',
                    num: '1',
                    time: '2020年8月1日 17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }, {
                    status: '2',
                    teacher: '汪涛',
                    num: '2',
                    time: '2020年8月1日 17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }
            ]
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {
            show: true,
            active: 1
        })
        this.classStatusMap = {
            '0': '未开始',
            '1': '正在上课',
            '2': '已结束'
        }

    },
    
    methods: {
       changeTab(index) {
            this.activeTab = index
        },
    },
    components: {Tabs}
}
</script>

<style lang="less" scoped>
    .main{
        margin-top: 12px;
        
    }
    .my_list{
        margin-bottom: 24px;
        .list_tt{
            padding-left: 8px;
            margin-bottom: 10px;
            font-size:16px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(18,23,50,1);
            img{
                width: 15px;
                height: 15px;
                margin-right: 12px;
                vertical-align: middle;
            }
            .num{
                padding-left: 12px;
                font-size:14px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(191,195,208,1);
            }
        }
        .list_type{
            padding: 20px 16px 23px;
            .img_info{
                margin-bottom: 21px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(18,23,50,1);
                .header{
                    width:20px;
                    height:20px;
                    border-radius:4px;
                    margin-right: 8px;
                }
            }
            > .ft{
                text-align: center;
                font-size:12px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(148,155,165,1);
            }
            .action_icon{
                display: block;
                width: 36px;
                height: 36px;
                margin:0 auto 7px;
            }
        }
    }
    .list{
        position: relative;
        padding: 5px 8px 0;
        margin-bottom: 10px;
        .img_info{
            padding: 10px 8px;
            .header, .header_wrap{
                position: relative;
                width:69px;
                height:69px;
                overflow: hidden;
                border-radius:8px;
                display: block;
            }
            .label{
                position: absolute;
                width: 30px;
                top: 0;
                right: 0;
            }
            >.bd{
                padding-left: 12px;
            }
            .name{
                padding-bottom: 7px;
                font-size:15px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(18,23,50,1);
            }
        }
        .action_area{
            padding: 9px 8px 12px;
            border-top: solid 1px #F3F3F3;
        }
        .tag{
            position: absolute;
            padding: 3px 3px 3px 8px;
            top: 20px;
            font-size: 10px;
            right: 0;
            border-radius: 20px 0 0 20px;
            background: #E9E9EC;
        }
    }
</style>