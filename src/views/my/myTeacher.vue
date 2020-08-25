<template>
    <div class="my_teacher_page">
       <pop-calender 
            v-model="ActiveDay" 
            value="2020-08-22" 
            endDay="2020-09-22" 
            class="pop_calender"
            :hasValDay="['2020-08-23', '2020-08-24', '2020-08-28']">
        </pop-calender>
        <weeks 
            v-model="ActiveDay" 
            value="2020-08-22" 
            endDay="2020-09-22" 
            :hasValDay="['2020-08-23', '2020-08-24', '2020-08-28']"
            class="week_tem">
        </weeks>

        <tabs :list="tabList" :active="activeTab" size="large" @change="changeTab" class="tabs_tem" height="52" :longBar="true"></tabs>
       
       <div class="main">
            <div v-if="activeTab==0">
                <div class="card nostart_list flex_box" v-for="(item,i) in noStart" :key="i">
                    <div class="bd">
                        <p class="text_dis">上课时间<span class="red">{{item.distanceInfo}}</span></p>
                        <p class="time">
                            {{item.time}}
                        </p>
                        <div class="flex_box img_info">
                            <img :src="item.header" alt="" class="header">
                            <p class="name">{{item.teacher}} 老师</p>
                            <span class="text_dis">|<span class="pl10">共 30分钟</span></span>
                        </div>
                    </div>
                    <div class="ft" :class="{hasNewDoc: item.hasNewDoc}" @click="$router.push('documents')">
                        <img src="../../assets/images/btn_ckzl@2x.png" class="action_icon" alt=""/>
                        查看资料
                    </div>
                    <div class="ft">
                        <img src="../../assets/images/btn_jrjs@2x.png" class="action_icon" alt=""/>
                        进入教室
                    </div>
                </div>
            </div>
            <div v-if="activeTab==1">
                <div class="card list" v-for="(item,i) in endList" :key="i">
                    <div class="top_info flex_box">
                        <p class="text_dis bd">上课时间<span class="time">{{item.time}}</span></p>
                        <button class="btn plain_grey ft">查看回放</button>
                    </div>
                    <div class="mid_info">
                        <div class="flex_box img_info">
                            <img :src="item.header" alt="" class="header">
                            <p class="name">{{item.teacher}} 老师</p>
                            <span class="text_dis">|<span class="pl10">共 30分钟</span></span>
                        </div>
                        <div class="" v-if="item.score || item.comment">
                            <div class="score_box">
                                <span class="text_dis">打分</span>
                                <star :value="item.score" size="small"></star>  
                            </div>
                            <div class="flex_box detail">
                                <p class="dis bd">{{item.comment}}</p>
                                <span class="ft"  @click="$router.push('teacher_comment')">详情</span>
                            </div>
                        </div>
                        <div class="no_cont" v-else>学员还没有评价</div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import Weeks from '@/components/Weeks';
import Tabs from '@/components/Tabs';
import Star from '@/components/Star';
import PopCalender from '@/components/PopCalender';
export default {
    name: 'test',
    data() {
        return {
            ActiveDay: '2020-08-25',
            tabList: [
                {
                    label: '未开始',
                    preNum: 2
                },
                {
                    label: '已结束',
                    preNum: 12
                }
            ],
            activeTab: 0,
            noStart: [
                {
                    status: '1',
                    teacher: '汪涛',
                    distanceInfo: '有新的资料',
                    time: '17:00-18:00',
                    hasNewDoc: true,
                    header: require('../../assets/images/header.jpg')
                }, {
                    status: '0',
                    teacher: '汪涛',
                    num: '1',
                    distanceInfo: '距离上课还有 5分钟',
                    time: '17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }, {
                    status: '2',
                    teacher: '汪涛',
                    num: '2',
                    time: '17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }
            ],
            endList: [
                {
                    teacher: '汪涛',
                    price: 110,
                    time: '17:00-18:00',
                    score: 3,
                    comment: '老师真是太专业了老师真是太专业专业老师真是太专业了老师真是太专业专业专',
                    header: require('../../assets/images/header.jpg')
                }, {
                    teacher: '汪涛',
                    price: 110,
                    time: '17:00-18:00',
                    header: require('../../assets/images/header.jpg')
                }
            ]
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('tabbar', {
            show: true,
            active: 5
        })

    },
    methods: {
       changeTab(index) {
            this.activeTab = index
        },
    },
    components: {Weeks, PopCalender,Tabs, Star}
}
</script>

<style lang="less" scoped>
    .my_teacher_page{
        padding: 0 0 50px;
        .pop_calender,.tabs_tem{
            background: #fff;
        }
        .week_tem{
            background: #fff;
            border-bottom: solid 1px #F0F0F0;
        }
        .time_picker_tem{
            padding: 0 8px;
        }
        .tabs_tem{
            position: relative;
            &::before{
                position: absolute;
                left: 50%;
                width:1px;
                height:14px;
                top: 50%;
                margin-top: -7px;
                content: ' ';
                background:rgba(240,240,240,1);
            }
        }
        .main{
            padding: 12px 16px 0;
            .nostart_list{
                margin-bottom: 12px;
                padding: 20px 16px 23px;
                align-items: flex-end;
                .img_info{
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
                    .name{
                        padding-right: 10px;
                    }
                    .pl10{
                        padding-left: 10px;
                    }
                }
                .red{
                    padding-left: 12px;
                    color: #D32D26;
                }
                .time{
                    padding: 9px 0 10px;
                    font-size:22px;
                    line-height: 30px;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                }
                > .ft{
                    text-align: center;
                    font-size:12px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(148,155,165,1);
                    margin-left: 16px;
                }
                .action_icon{
                    display: block;
                    width: 36px;
                    height: 36px;
                    margin:0 auto 7px;
                }
                .hasNewDoc{
                    position: relative;
                    &::before{
                        position: absolute;
                        left: 50%;
                        width:7px;
                        height:7px;
                        border-radius: 7px;
                        background:rgba(211,45,38,1);
                        top: 3px;
                        margin-left: 14px;
                        content: ' ';
                    }
                }
            }

            .list{
                position: relative;
                padding: 5px 8px 5px;
                margin-bottom: 10px;
                .top_info{
                    height: 47px;
                    padding-left: 8px;
                    padding-right: 8px;
                    border-bottom: solid 1px #F3F3F3;
                    .time{
                        padding-left: 8px;
                        color: #121732;
                    }
                }
                .mid_info{
                    padding: 10px 8px;
                    .img_info{
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
                        .name{
                            padding-right: 10px;
                        }
                        .pl10{
                            padding-left: 10px;
                        }
                        .text_dis{
                            padding-top: 0;
                        }
                    }
                    .header{
                        width:69px;
                        height:69px;
                        border-radius:8px;
                    }
                    .name{
                        padding-bottom: 2px;
                        font-size:14px;
                        font-family:PingFangSC-Semibold,PingFang SC;
                        font-weight:600;
                        color:rgba(18,23,50,1);
                    }
                    .text_dis{
                        padding-top: 7px;
                        line-height: 15px;
                    }
                    .score_box{
                        margin: 11px 0 10px;
                    }
                    .detail{
                        font-size:14px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(88,91,96,1);
                        .bd{
                            padding-left: 0;
                            margin-right: 5px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        .ft{
                            text-decoration: underline;
                        }
                    }
                    .no_cont{
                        padding: 20px 0 10px;
                        font-size:14px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(148,155,165,1);
                    }
                }
            }
        }
    }
</style>