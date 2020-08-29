<template>
    <div>
        <div class="main">
            <Swiper :swipeList="swipeList"/>

            <div class="radioViewEntry flex_box">
                <div class="image_hover ft">
                    <img src="../../assets/images/cike/nqbg@2x.png" alt="" class="bg left_bg">
                    <div class="hover topLeft">
                        <p class="f14 white">内勤培训视频</p>
                        <div class="grey_label flex_box">
                            <img src="../../assets/images/top.png" alt="" class="top_icon">
                            <span class="tex">TOP20</span>
                            <img src="../../assets/images/icon_right_y.png" alt="" class="icon_right">
                        </div>
                    </div>
                </div>
                <div class="right flex_box ft">
                    <div class="image_hover">
                        <img src="../../assets/images/cike/waiqbg@2x.png" alt="" class="bg right_bg">
                        <div class="hover topLeft">
                            <p class="f14 white">内勤培训视频</p>
                            <div class="grey_label flex_box">
                                <img src="../../assets/images/top.png" alt="" class="top_icon">
                                <span class="tex">TOP20</span>
                                <img src="../../assets/images/icon_right_y.png" alt="" class="icon_right">
                            </div>
                        </div>
                    </div>
                    <div class="image_hover">
                        <img src="../../assets/images/cike/jiechubg@2x.png" alt="" class="bg right_bg">
                        <div class="hover topLeft">
                            <p class="f14 white">内勤培训视频</p>
                            <div class="grey_label flex_box">
                                <img src="../../assets/images/top.png" alt="" class="top_icon">
                                <span class="tex">TOP20</span>
                                <img src="../../assets/images/icon_right_y.png" alt="" class="icon_right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 正在直播 -->
            <div class="card livingCard">
                <div class="top_tt flex_box">
                    <img src="../../assets/images/cike/zzzbicon@2x.png" alt="" class="icon hd">
                    <p class="bd">正在直播</p>
                    <img src="../../assets/images/cike/gkrs@2x.png" alt="" class="group_icon ft">
                    <p class="text_dis ft">1258万人观看</p>
                </div>
                <div class="image_hover">
                    <img src="" alt="" class="bg">
                    <img src="../../assets/images/cike/play@2x.png" alt="" class="hover center">
                    <img src="../../assets/images/cike/jiiaobiaozhibozhong@2x.png" alt="" class="hover topLeft">
                </div>
            </div>

            <!-- 最近直播 -->
            <div class="card">
                <div class="category_tt flex_box">
                    <div class="bd">最近直播</div>
                    <span class="ft">查看全部</span>
                    <img src="../../assets/images/icon_right_g@2x.png" alt="" class="ft icon_right">
                </div>
                <div class="recentList flex_box" v-for="(item,i) in recentList" :key="i">
                    <div class="dot hd"></div>
                    <div class="cont bd">
                        <p class="blue time">{{item.time}}</p>
                        <div class="flex_box">
                            <img :src="item.header || require('../../assets/images/default1.jpg')" alt="" class="header hd">
                            <div class="bd">
                                <p class="f14">{{item.title}}</p>
                                <p class="text_dis">{{item.dis.join(' ')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 名师直播回看 -->
            <div class="card">
                <div class="category_tt flex_box">
                    <div class="bd">名师直播回看</div>
                    <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                    <span class="ft">换一批</span>
                </div>
                <div class="reviewList flex_box">
                    <div class="item" v-for="(item,i) in reviewList" :key="i">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/jiiaobiaohuifang@2x.png" alt="" class="hover topLeft">
                            <div class="score_label hover rightBottom">
                                <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                                <span class="">{{item.score}}</span>
                            </div>
                        </div>
                        <p class="f14 title ellipsis2">{{item.title}}</p>
                        <p class="text_dis" v-if="item.isFree">
                            <img src="../../assets/images/cike/gkrs@2x.png" alt="" class="group_icon ft">
                            <span class="f11">{{item.view}}万人观看</span>
                        </p>
                        <p class="text_dis" v-else>
                            <span class="f10 red">¥</span>
                            <span class="f14 red">{{item.price}}</span>
                            <span class="f10 originPrice">{{item.originPrice}}</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- 内部培训推荐 -->
            <div class="card">
                <div class="category_tt flex_box">
                    <div class="bd">内部培训推荐</div>
                    <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                    <span class="ft">换一批</span>
                </div>
                <div class="peixunInList flex_box">
                    <div class="item" v-for="(item,i) in peixunInList" :key="i">
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

            <!-- 外部培训推荐 -->
            <div class="card">
                <div class="category_tt flex_box">
                    <div class="bd">外部培训推荐</div>
                    <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                    <span class="ft">换一批</span>
                </div>
                <div class="reviewList flex_box">
                    <div class="item" v-for="(item,i) in peixunOutList" :key="i">
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

            <!-- TOP系列课程 -->
            <div class="card topListCard">
                <div class="category_tt flex_box">
                    <div class="bd">TOP系列课程</div>
                    <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                    <span class="ft">换一批</span>
                </div>
                <div class="topList flex_box">
                    <div class="item" v-for="(item,i) in topList" :key="i">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/jiiaobiaoheji@2x.png" alt="" class="hover topLeft" v-if="item.isCombine">
                            <div class="score_label hover rightBottom">
                                <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                                <span class="">{{item.score}}</span>
                            </div>
                        </div>
                        <p class="f14 title ellipsis">{{item.title}}</p>
                        <div class="flex_box justify">
                            <p class="text_dis">
                                <span class="f10 red">¥</span>
                                <span class="f14 red">免费</span>
                                <span class="f10 originPrice">{{item.originPrice}}</span>
                            </p>
                            <p class="text_dis" v-if="item.isFree">
                                <img src="../../assets/images/playcishu@2x.png" alt="" class="group_icon ft">
                                <span class="f11">{{item.view}}万人已学</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 猜你喜欢 -->
            <div class="card guess_card">
                <div class="category_tt flex_box">
                    <div class="bd">猜你喜欢</div>
                    <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                    <span class="ft">换一批</span>
                </div>
                <img src="../../assets/images/cike/cnxh_banner@2x.png" alt="" class="banner">
                <div class="guessList">
                    <div class="item flex_box" v-for="(item,i) in guessList" :key="i">
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
            recentList: [
                {
                    header: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你自己了',
                    time: '2020年08月25日 15:00-14:00',
                    dis: ['北大教授', '10年企业HR', '钟茜']
                }, {
                    title: '你有多久没有投资你自己了',
                    time: '2020年08月25日 15:00-14:00',
                    dis: ['北大教授', '10年企业HR', '钟茜']
                }
            ],
            reviewList: [
                {
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
                    originPrice: 430.23
                }
            ],
            peixunInList: [
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
            peixunOutList: [
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
            topList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    view: 1258,
                    isCombine: true,
                    originPrice: 430.23
                }
            ],
            guessList: [
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
        }
        .radioViewEntry{
            margin-top: 18px;
            justify-content: space-between;
            .left_bg{
                width: 162px;
                height: 180px;
            }
            .right_bg{
                width: 173px;
                height: 84px;
            }
            .right{
                height: 180px;
                flex-direction: column;
                justify-content: space-between;
            }
            .topLeft{
                top: 19px;
                left: 12px;
            }
            .grey_label{
                margin-top: 5px;
                display: inline-flex;
                padding: 0 5px;
                height: 20px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 3px;
                font-size: 10px;
                color: #FFD25D;
                .top_icon{
                    margin-right: 3px;
                    height: 9px;
                }
                .icon_right{
                    margin-left: 3px;
                    height: 6px;
                }
            }
        }
        

        .livingCard{
            margin-top: 18px;
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
            .bg{
                height: 177px;
                background: #D8D8D8;
                border-radius: 4px;
            }
            .topLeft{
                height: 18px;
            }
            .center{
                height: 59px;
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
                margin-bottom: 16px;
            }
            .poster{
                width: 319px;
                height: 177px;
                border-radius: 3px;
            }
            .title{
                margin: 8px 0 10px;
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
        }

        .guess_card{
            .banner{
                margin-bottom: 24px;
                display: block;
                width: 100%;
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