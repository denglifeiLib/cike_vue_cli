<template>
    <div class="page_wrap teacher_page">
        <div class="top_card flex_box">
            <img :src="info.header" alt="" class="header hd">
            <div class="bd">
                <p class="name">
                    {{info.teacher}} 老师
                    <img src="../../assets/images/my/label_deep.png" alt="" class="label" v-if="info.label ==='zisheng'">
                    <img src="../../assets/images/my/label_hot.png" alt="" class="label" v-if="info.label ==='hot'">
                    <img src="../../assets/images/my/label_special.png" alt="" class="label" v-if="info.label ==='teyao'">
                    <img src="../../assets/images/my/label_wight.png" alt="" class="label" v-if="info.label ==='daka'">
                </p>
                <p class="text_dis">已授课{{info.timeLong}} | {{info.studentNum}}人次</p>
            </div>
            <button class="ft btn white" :class="info.isFocus ? 'opacity': ''" @click="toggleFocus">已关注</button>
        </div>
        
        <div class="main">
            <tabs :list="tabList" :active="activeTab" @change="changeTab"></tabs>  

            <div class="introduce" v-if="activeTab===0">
                <p class="text">政制般低难风则单至米长手在速质式消头并治飞速一适六革任流进没但质它水高色才育看回太府律新难省。周长维么强转们北题构形路酸许农和基机满热会金识开深可按分西事思利。</p>
                <img src="../../assets/images/candelete.jpg" alt="" class="img">
            </div>

            <div class="articalList" v-if="activeTab===1">
                <div class="item flex_box" v-for="(item,i) in articalList" :key="i">
                    <div class="bd">
                        <p class="title ellipsis2">{{item.title}}</p>
                        <p class="text_dis">
                            <span>{{item.time}}</span>
                            <span>{{item.zan}}点赞</span>
                            <span>{{item.origin}}</span>
                        </p>
                    </div>
                    <img :src="item.poster" alt="" class="poster ft" >
                </div>
            </div>


            <div class="guessList" v-if="activeTab===2">
                <div class="item flex_box" v-for="(item,i) in classList" :key="i">
                    <div class="image_hover">
                        <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                        <img src="../../assets/images/jiiaobiaoheji@2x.png" alt="" class="hover topLeft" v-if="item.isCombine">
                        <div class="score_label hover rightBottom">
                            <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                            <span class="">{{item.score}}</span>
                        </div>
                    </div>
                    <div>
                        <p class="f14 title ellipsis2">{{item.title}}</p>
                        <p class="text_dis" v-if="item.isFree">
                            <img src="../../assets/images/playcishu@2x.png" alt="" class="group_icon ft">
                            <span class="f11">{{item.view}}万人已学</span>
                        </p>
                        <p class="text_dis" v-else>
                            <span class="f10 red">¥</span>
                            <span class="f14 red">{{item.price}}</span>
                            <span class="f10 originPrice">{{item.originPrice}}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="guessList" v-if="activeTab===3">
                <div class="item flex_box" v-for="(item,i) in liveList" :key="i">
                    <div class="image_hover">
                        <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                        <img src="../../assets/images/jiiaobiaoheji@2x.png" alt="" class="hover topLeft" v-if="item.isCombine">
                        <img src="../../assets/images/cike/jiiaobiaozhibozhong@2x.png" alt="" class="hover topLeft" v-if="item.isLiving">
                        <img src="../../assets/images/jiiaobiaohuifang@2x.png" alt="" class="hover topLeft" v-if="item.isHuifang">
                        <img src="../../assets/images/jiiaobiaoweikaishi@2x.png" alt="" class="hover topLeft" v-if="item.isNotStart">
                        <div class="score_label hover rightBottom">
                            <span class="">{{item.startTime}}</span>
                        </div>
                    </div>
                    <div>
                        <p class="f14 title ellipsis2">{{item.title}}</p>
                        <p class="text_dis" v-if="item.isFree">
                            <img src="../../assets/images/playcishu@2x.png" alt="" class="group_icon ft">
                            <span class="f11">{{item.view}}万人已学</span>
                        </p>
                        <p class="text_dis" v-else>
                            <span class="f10 red">¥</span>
                            <span class="f14 red">{{item.price}}</span>
                            <span class="f10 originPrice">{{item.originPrice}}</span>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>

         <div class="fixed bottom_fixed flex_box">
            <button class="btn red" @click="showBindPhonePop=true">
                预约私课
                <img src="../../assets/images/icon_right_w@2x.png" alt="">
            </button>
        </div>
        
        <PopBindPhone 
            :popupVisible="showBindPhonePop" 
            :form='form'
            @cancel="showBindPhonePop=false"
            @skip="showBindPhonePop=false"> </PopBindPhone>  
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import Tabs from '@/components/Tabs';
import PopBindPhone from '@/components/PopBindPhone';
export default {
    name: 'test',
    data() {
        return {
            showBindPhonePop: false,
            form: {
                phone: '',
                code: ''
            },
            tabList: ['介绍', '文章', '课程', '直播'],
            activeTab: 0,
            info: {
                teacher: '汪涛',
                header: require('../../assets/images/header.jpg'),
                introduce: '有功无过是短暂的，无功有过是行不通的，有功有过是最好的',
                timeLong: '20小时',
                studentNum: '2340',
                isFocus: true,
                isNew: true,
                label: 'hot',
                price: 100.00
            },
            articalList: [
                {
                    poster:require('../../assets/images/header.jpg'),
                    title: '2020年第二2020年第二批闵行区先进制造业专项资金项目批闵行区先进制造业专项资金项目',
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网'
                }, {
                    poster:require('../../assets/images/header.jpg'),
                    title: '2020年第二批闵行区先进制造业专项资金项目',
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网'
                }
            ],
            classList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    isCombine: true,
                    view: 1258
                },{
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    isLiving: true,
                    view: 1258
                }
            ],
           liveList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    isCombine: true,
                    view: 1258
                },{
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    isLiving: true,
                    view: 1258
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你',
                    score: 4.8,
                    price: 24.32,
                    isHuifang: true,
                    originPrice: 430.23
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    isNotStart: true,
                    view: 1258,
                    startTime: '8-22 08:30'
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    isCombine: true,
                    view: 1258
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你',
                    score: 4.8,
                    price: 24.32,
                    originPrice: 430.23,
                }
            ],
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {
            show: false
        })
    },
    methods: {
        changeTab(index) {
            this.activeTab = index
        },
        toggleFocus() {}
    },
    components: {Tabs, PopBindPhone}
}
</script>

<style lang="less">
    .teacher_page{
        padding: 0 0 66px;
        background: #fff;

        .top_card{
            padding: 24px 24px 42px;
            height: 113px;
            background: #1B226E url('static/images/lsxqbg@2x.png') center no-repeat;
            background-size: 100%;
            color: #fff;
            .header{
                width:48px;
                height:48px;
                border-radius:8px;
                display: block;
            }
            .bd{
                padding-left: 12px;
            }
            .name{
                padding-bottom: 4px;
                font-size:15px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                .label{
                    height: 14px;
                    margin-left: 8px;
                    vertical-align: middle;
                }
            }
            .ft.btn{
                width: 56px;
                min-width: auto;
                padding: 0;
                height: 27px;
                &.opacity{ 
                    color: #fff;
                    background: rgba(255, 255, 255, 0.3);

                    border: 0px solid rgba(255, 255, 255, 0.6);
                }
            }
            .text_dis{
                color: #B6BAE9;
            }
        }

        .tabs{
            margin-bottom: 10px;
        }

        .main{
            position: relative;
            margin-top: -22px;
            padding: 5px 24px 0;
            border-radius:12px 12px 0px 0px;
            z-index: 55;
            overflow: hidden;
            background: #fff;

            .introduce{
                .text{
                    margin-bottom: 24px;
                    font-size:15px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    line-height:26px;
                    color:rgba(88,91,96,1);
                }
                .img{
                    margin-bottom: 24px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            }

            .articalList{
                .item {
                    margin-bottom: 23px;
                    > .bd{
                        padding-left: 0;
                        padding-right: 30px;
                    }
                }
                .title{
                    margin-bottom: 8px;
                    font-size: 16px;
                    line-height: 26px;
                }
                .text_dis{
                    span{
                        margin-right: 10px;
                    }
                }
                .poster{
                    width: 101px;
                    height: 73px;
                    border-radius: 3px;
                }
            }

            .guessList{
                flex-direction: column;
                padding-top: 8px;
                .image_hover{
                    margin-right: 14px;
                }
                .item{
                    width: 100%;
                    margin-bottom: 12px;
                    padding-bottom: 12px;
                    border-bottom: solid 1px #F0F0F0;
                    &:last-child{
                        border-bottom: 0;
                        padding-bottom: 0;
                    }
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
                .group_icon{
                    height: 10px;
                    margin-right: 3px;
                    vertical-align: middle;
                }
                .originPrice{
                    border-bottom: solid 1px #949BA5;
                    line-height: 0.1;
                    display: inline-block;
                }
            }

        }

        .bottom_fixed{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            height: 60px;
            justify-content: flex-end;
            z-index: 88;
            background: #fff;
            padding-right: 16px;
            box-shadow:0px -1px 0px 0px rgba(228,228,228,1);
            button{
                width: 103px;
                height: 36px;
                img{
                    margin-left: 8px;
                }
            }
        }
    }
   
</style>