<template>
    <div>
        <div class="main">
            <Swiper :swipeList="swipeList"/>

            <!-- 职场礼仪 3列 -->
            <div class="card">
                <div class="category_tt flex_box">
                    <div class="bd">职场礼仪</div>
                    <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                    <span class="ft">换一批</span>
                </div>
                <div class="peixunInList flex_box">
                    <div class="item" v-for="(item,i) in liyiList" :key="i" @click="$router.push({name: 'living_detail_class'})">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <div class="score_label hover rightBottom">
                                <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                                <span class="">{{item.score}}</span>
                            </div>
                        </div>
                        <p class="f13 title ellipsis2">{{item.title}}</p>
                    </div>
                </div>
            </div>
            <!-- 职业规划 -->
            <div class="card">
                <div class="category_tt flex_box">
                    <div class="bd">职业规划</div>
                    <span class="ft">查看全部</span>
                    <img src="../../assets/images/icon_right_g@2x.png" alt="" class="ft icon_right">
                </div>
                <img src="../../assets/images/cike/banner_zhiye@2x.png" alt="" class="banner">
                <div class="reviewList flex_box">
                    <div class="item" v-for="(item,i) in guihuaList" :key="i" @click="$router.push({name: 'living_detail_class'})">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/jiiaobiaoheji@2x.png" alt="" class="hover topLeft" v-if="item.isCombine">
                            <div class="score_label hover rightBottom">
                                <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                                <span class="">{{item.score}}</span>
                            </div>
                        </div>
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
            <!-- 求职招聘 -->
            <div class="card">
                <div class="category_tt flex_box">
                    <div class="bd">求职招聘</div>
                    <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                    <span class="ft">换一批</span>
                </div>
                <div class="reviewList flex_box">
                    <div class="item" v-for="(item,i) in qiuzhiList" :key="i" @click="$router.push({name: 'living_detail_class'})">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/jiiaobiaoheji@2x.png" alt="" class="hover topLeft" v-if="item.isCombine">
                            <div class="score_label hover rightBottom">
                                <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                                <span class="">{{item.score}}</span>
                            </div>
                        </div>
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
                 <img src="../../assets/images/cike/banner_zhaopin.png" alt="" class="banner">
            </div>
            <!-- 自我认知 -->
            <div class="card topListCard">
                <div class="category_tt flex_box">
                    <div class="bd">自我认知</div>
                    <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                    <span class="ft">换一批</span>
                </div>
                <div class="topList flex_box">
                    <div class="item" v-for="(item,i) in renzhiList" :key="i" @click="$router.push({name: 'living_detail_class'})">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/jiiaobiaoheji@2x.png" alt="" class="hover topLeft" v-if="item.isCombine">
                            <div class="score_label hover rightBottom">
                                <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                                <span class="">{{item.score}}</span>
                            </div>
                        </div>
                        <p class="f14 title ellipsis">{{item.title}}</p>
                        <div class="flex_box justify price_wrap" v-if="!item.isFree">
                            <p class="text_dis">
                                <span class="f10 red">¥</span>
                                <span class="f14 red">{{item.price}}</span>
                                <span class="f10 originPrice">{{item.originPrice}}</span>
                            </p>
                            <p class="text_dis">
                                <img src="../../assets/images/playcishu@2x.png" alt="" class="group_icon ft">
                                <span class="f11">{{item.view}}万人已学</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 思维导图 -->
            <div class="card guess_card">
                <div class="category_tt flex_box">
                    <div class="bd">思维导图</div>
                    <span class="ft">查看全部</span>
                    <img src="../../assets/images/icon_right_g@2x.png" alt="" class="ft icon_right">
                </div>
                <div class="guessList">
                    <div class="item flex_box" v-for="(item,i) in siweiList" :key="i" @click="$router.push({name: 'living_detail_class'})">
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
            </div>
            
        </div>
    </div>
</template>

<script>
import Swiper from './components/Swiper';
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
            liyiList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你',
                    score: 4.8
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你',
                    score: 4.8
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你',
                    score: 4.8
                }
            ],
            guihuaList: [
                {
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
                    originPrice: 430.23
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    view: 1258
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你',
                    score: 4.8,
                    price: 24.32,
                    isCombine: true,
                    originPrice: 430.23
                }
            ],
            qiuzhiList: [
                {
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
                    originPrice: 430.23
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    view: 1258
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你',
                    score: 4.8,
                    price: 24.32,
                    isCombine: true,
                    originPrice: 430.23
                }
            ],
            renzhiList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    view: 1258,
                    isCombine: true,
                    price: 23.0,
                    originPrice: 430.23
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: false,
                    view: 1258,
                    isCombine: true,
                    price: 23.0,
                    originPrice: 430.23
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    view: 1258,
                    isCombine: true,
                    originPrice: 430.23
                }
            ],
            siweiList: [
                {
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
                    originPrice: 430.23
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
                    originPrice: 430.23
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
                    originPrice: 430.23
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
            active: 0
        })

    },
    methods: {
       
    },
    components: {Swiper}
}
</script>

<style lang="less" scoped>
    .main{
        // padding: 4px 16px;
        .card{
            padding: 0 16px;
            margin-top: 12px;
            .title{
                font-weight: bold;
            }
            .banner{
                margin-bottom: 24px;
                display: block;
                width: 100%;
            }
        }

        .recentList{
            align-items: flex-start;
            overflow: hidden;
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: solid 1px #F0F0F0;
            &:last-child{
                border-bottom: 0;
            }
            .dot{
                margin-top: 6px;
                width: 7px;
                height: 7px;
                background: #D9DDE2;
                border-radius: 7PX;
            }
            .time{
                padding-bottom: 11px;
            }
            .cont{
                padding-left: 8px;
            }
            .header{
                width: 44px;
                height: 44px;
                border-radius: 4px;
                &+.bd{
                    padding-left: 8px;
                }
            }
            .text_dis{
                padding-top: 4px;
            }
        }


        .reviewList{
            justify-content: space-between;
            flex-wrap: wrap;
            .item{
                width: 148px;
                margin-bottom: 16px;
            }
            .poster{
                width: 148px;
                height: 81px;
                border-radius: 3px;
            }
            .topLeft{
                width: 58px;
            }
            .title{
                margin: 6px 0 5px;
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

        .peixunInList{
            justify-content: space-between;
            flex-wrap: wrap;
            .item{
                width: 96px;
                margin-bottom: 16px;
            }
            .poster{
                width: 96px;
                height: 53px;
                border-radius: 3px;
            }
            .title{
                margin: 6px 0 5px;
                height: 38px;
            }
        }

        .topListCard{
            padding: 0 12px;
            .category_tt{
                padding: 0 4px;
            }
        }
        .topList{
            justify-content: space-between;
            flex-wrap: wrap;
            .item{
                width: 319px;
                padding-bottom: 16px;
                margin-bottom: 16px;
                border-bottom: solid 1px #F0F0F0;
                &:last-child{
                    margin-bottom: 0;
                    border-bottom: 0;
                }
            }
            .poster{
                width: 319px;
                height: 177px;
                border-radius: 3px;
            }
            .title{
                margin: 8px 0px 0;
                height: 20px;
            }
            .topLeft{
                width: 58px;
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
            .price_wrap{
                padding-top: 10px;
            }
        }
        .guessList{
            flex-direction: column;
            .image_hover{
                margin-right: 14px;
            }
            .item{
                width: 100%;
                margin-bottom: 16px;
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
</style>