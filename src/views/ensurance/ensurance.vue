<template>
    <div class="ensurance_page">
       <div class="search flex_box bd">
            <img src="../../assets/images/ssicon@2x.png" alt="" class="icon hd">
            <input placeholder="今日推荐保险" type="text" class="bd" ref="input">
        </div>

        <Swiper :swipeList="swipeList"/>

        <!-- 实时热搜 -->
        <div class="card hotCard">
            <div class="top_tt flex_box">
                <img src="../../assets/images/ssrsicon@2x.png" alt="" class="icon hd">
                <p class="bd">实时热搜</p>
                <img src="../../assets/images/cike/gkrs@2x.png" alt="" class="group_icon ft">
                <p class="text_dis ft">更新时间 2020-04-08 12:23:22</p>
            </div>
            <ul class="list">
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">1</span>中美或进入新冷战？王毅表态</li>
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">2</span>特朗普长子女友金伯利演讲</li>
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">3</span>王毅会见加拿大外长</li>
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">4</span>男子1200万买房送2个车位</li>
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">5</span>男子12男子1200万买房送2个车位00万买房送2个车位</li>
            </ul>
            <div class="more flex_box" @click="$router.push({name: 'ensurance_all_hot'})">
                <span>查看更多</span><img src="../../assets/images/icon_right_g@2x.png" alt="" class="icon">
            </div>
        </div>

        <div class="card articalList">
            <div class="item flex_box" v-for="(item,i) in articalList" :key="i" @click="$router.push({name: 'ensurance_detail'})">
                <div class="bd">
                    <p class="title ellipsis2">{{item.title}}</p>
                    <div class="view_imgs" v-if="item.imgViews && item.imgViews.length">
                        <img :src="img" alt="" class="" v-for="(img,j) in item.imgViews" :key="j">
                    </div>
                    <div class="vedio_list flex_box" v-if="item.vedioList && item.vedioList.length">
                        <div class="bd image_hover" v-for="(vedio,j) in item.vedioList" :key="j">
                            <img :src="vedio.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster" :class="{gap:item.vedioList.length>1}">
                            <img src="../../assets/images/cike/play@2x.png" alt="" :class="['hover','center', {center_small: item.vedioList.length>1}]">
                            <p class="leftBottom hover" v-if="vedio.tt">{{vedio.tt}}</p>
                            <p class="rightBottom hover" v-if="vedio.timeLong">{{vedio.timeLong}}</p>
                        </div>
                    </div>
                    <p class="text_dis">
                        <span>{{item.time}}</span>
                        <span>{{item.zan}}点赞</span>
                        <span>{{item.origin}}</span>
                    </p>
                </div>
                <img :src="item.poster" alt="" class="poster1 ft" v-if="item.poster">
            </div>
        </div>
        
    </div>
</template>

<script>
import Swiper from '../learnCenter/components/Swiper';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            swipeList: [
                require('../../assets/images/default2.jpg'), 
                require('../../assets/images/default2.jpg'), 
                require('../../assets/images/default2.jpg'), 
                require('../../assets/images/default2.jpg')
            ],
            articalList: [
                {
                    poster:require('../../assets/images/header.jpg'),
                    title: '2020年第二2020年第二批闵行区先进制造业专项资金项目批闵行区先进制造业专项资金项目',
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网'
                }, {
                    title: '2020年第二批闵行区先进制先进制造业专项资金项目',
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网'
                }, {
                    title: '第二批闵行区先进制造业专项资金项目2先进制造业专项资金项目2020年第二批闵行区先进制造业专项资金项目',
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网',
                    imgViews: [require('../../assets/images/header.jpg'),require('../../assets/images/header.jpg'),require('../../assets/images/header.jpg')]
                }, {
                    title: '造业专项资金项目',
                    vedioList: [
                        {
                            poster: require('../../assets/images/header.jpg'),
                            timeLong: '00:53'
                        }
                    ],
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网'
                }, {
                    title: '造业专项资金项目',
                    vedioList: [
                        {
                            poster: require('../../assets/images/header.jpg'),
                            tt: '打不死的是信念，绕不开的是变化'
                        }, {
                            poster: require('../../assets/images/header.jpg'),
                            tt: '打不死的是信念，绕不开的是变化'
                        }
                    ],
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网'
                }, {
                    title: '2020年第二批闵行区先进制先进制造业专项资金项目',
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网'
                }, {
                    title: '第二批闵行区先进制造业专项资金项目2先进制造业专项资金项目2020年第二批闵行区先进制造业专项资金项目',
                    time: '18分钟前',
                    zan: '8231',
                    origin: '光明网',
                    imgViews: [require('../../assets/images/header.jpg'),require('../../assets/images/header.jpg'),require('../../assets/images/header.jpg')]
                }
            ],
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
            active: 2
        })
    },
    methods: {
       
    },
    components: {Swiper}
}
</script>

<style lang="less" scoped>
.ensurance_page{
    padding: 8px 16px 72px;
    .search{
        padding: 0 16px;
        margin-bottom: 11px;
        height: 32px;
        background: #fff;
        border-radius: 16px;
        border: 1px solid #E6E6E6;
        justify-content: center;
        .icon{
            height: 14px;
        }
        input.bd{
            width: 100%;
            border: 0;
            outline: 0;
        }
    }

     .hotCard{
        margin-top: 12px;
        padding: 0 12px 12px;
        .top_tt{
            margin-left: -12px;
            margin-right: -12px;
            height: 40px;
            padding: 0 16px 0 12px;
            background: url('static/images/zzzbbg@2x.png');
            background-size: 100%;
            .icon{
                width: 20px;
            }
            .bd{
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #121732;
            }
            .group_icon{
                height: 10px;
                margin-right: 5px;
            }
            .ft{
                font-size: 11px;
            }
        }
        .list{
            padding-bottom: 16px;
            li{
                line-height: 41px;
                padding: 2px 4px;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #121732;
                .num{
                    display: inline-block;
                    margin-right: 12px;
                    width: 15px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    background: #fff;
                    color: #949BA5;
                    font-weight: bold;
                    border-radius: 1px;
                }
                &:nth-child(1) .num{
                    color: #fff;
                    background: #D32D26;
                }
                &:nth-child(2) .num,&:nth-child(3) .num{
                    color: #fff;
                    background: #1B226E;
                }
            }
        }
        .more{
            margin: 0 8px -12px;
            line-height: 48px;
           justify-content: center;
             border-top: solid 1px #F0F0F0;
             color: #949BA5;
                 font-size: 14px;
             .icon{
                 height: 9px;
                 margin-left: 8px;
                 vertical-align: middle;
                 
             }
        }
        
    }

    .articalList{
        margin-top: 12px;
        padding: 0 16px;
        .item {
            padding: 12px 0;
            > .bd{
                padding-left: 0;
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
        .poster1{
            margin-left: 17px;
            width: 101px;
            height: 73px;
            border-radius: 3px;
        }
        .view_imgs{
            img{
                margin-bottom: 4px;
                width: 100px;
                height: 73px;
                 margin-right: 4px;
                border-radius: 4px;
                &:nth-child(3n){
                    margin-right: 0;
                }
            }
        }

        .vedio_list{
            margin-bottom: 4px;
            justify-content: space-between;
            .bd{
                padding-left: 0;
            }
            .bg{
                width: 100%;
                background: #D8D8D8;
                border-radius: 4px;
                &.gap{
                    width: 150px;
                }
            }
            .topLeft{
                height: 18px;
            }
            .center{
                height: 60px;
                &.center_small{
                    height: 40px;
                }
            }
            .leftBottom{
                padding: 8px;
                font-size: 13px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FFFFFF;
            }
            .rightBottom{
                padding: 8px;
                color: #FFFFFF;
            }
            
        }
    }
}
</style>