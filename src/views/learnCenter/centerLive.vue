<template>
    <div class="center_live_page">
        <div class="main">
            <!-- <filterCom :popLeimuList="popLeimuList" v-model="filter"></filterCom> -->
            <div class="flex_box justify filter_top">
                <pop-filter v-model="rangeTypeFilter" :items="rangeTypeItems" name="选择排序" title="选择排序"></pop-filter>
                <pop-filter v-model="multiFilter" :items="multiFilterItems" name="筛选" title="选择排序"></pop-filter>
            </div>


            <!-- 思维导图 -->
            <div class="card guess_card">
                <div class="topList flex_box">
                    <div class="item" v-for="(item,i) in renzhiList" :key="i">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/cike/jiiaobiaozhibozhong@2x.png" alt="" class="hover topLeft" v-if="item.isLiving">
                            <img src="../../assets/images/jiiaobiaohuifang@2x.png" alt="" class="hover topLeft" v-if="item.isHuifang">
                            <img src="../../assets/images/jiiaobiaoweikaishi@2x.png" alt="" class="hover topLeft" v-if="item.isNotStart">
                            <div class="score_label hover rightBottom">
                                <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                                <span class="">{{item.score}}</span>
                            </div>
                            <img src="../../assets/images/cike/play@2x.png" alt="" class="hover center">
                        </div>
                        <div v-if="item.isFree">
                            <div class="flex_box justify price_wrap">
                                <p class="f14 title ellipsis" style="marginTop: 0px">{{item.title}}</p>
                                <img src="../../assets/images/cike/gkrs@2x.png" alt="" class="group_icon ft" style="marginLeft: 8px"> 
                                <span class="f11 text_dis ft">{{item.view}}万人观看</span>
                            </div>
                        </div>
                        <div v-else>
                            <p class="f14 title ellipsis">{{item.title}}</p>
                            <div class="flex_box justify price_wrap">
                                <p class="text_dis">
                                    <span class="f10 red">¥</span>
                                    <span class="f14 red">{{item.price}}</span>
                                    <span class="f10 originPrice" v-if="item.originPrice">{{item.originPrice}}</span>
                                </p>
                                <p class="text_dis">
                                    <img src="../../assets/images/cike/gkrs@2x.png" alt="" class="group_icon ft">
                                    <span class="f11">{{item.view}}万人观看</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="reviewList flex_box">
                    <div class="item" v-for="(item,i) in guihuaList" :key="i">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/jiiaobiaohuifang@2x.png" alt="" class="hover topLeft" v-if="item.isHuifang">
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

                <div class="guessList">
                    <div class="item flex_box" v-for="(item,i) in siweiList" :key="i">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/cike/jiiaobiaozhibozhong@2x.png" alt="" class="hover topLeft" v-if="item.isLiving">
                            <img src="../../assets/images/jiiaobiaohuifang@2x.png" alt="" class="hover topLeft" v-if="item.isHuifang">
                            <img src="../../assets/images/jiiaobiaoweikaishi@2x.png" alt="" class="hover topLeft" v-if="item.isNotStart">
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
// import filterCom from './components/filterCom';
import PopFilter from '@/components/PopFilter';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            rangeTypeFilter: {
                rangeType: ''
            },
            multiFilter: {
                classType: '',
                price: ''
            },
            rangeTypeItems: [
                {
                    title: '',
                    name: 'rangeType',
                    list: [
                        {
                            label: '综合排序',
                            value: '21'
                        }, {
                            label: '最新排序',
                            value: '22'
                        }, {
                            label: '最热排序',
                            value: '23'
                        }
                    ]
                }
            ],
            multiFilterItems: [
                {
                    title: '状态',
                    list: [
                        {
                            label: '全部',
                            value: '',
                            checked: true
                        }, {
                            label: '正在直播',
                            value: '11'
                        }, {
                            label: '未开播',
                            value: '12'
                        }, {
                            label: '已结束',
                            value: '13'
                        }
                    ]
                }, {
                    title: '类目',
                    list: [
                        {
                            label: '全部',
                            value: '',
                            checked: true
                        }, {
                            label: '类目1',
                            value: '21'
                        }, {
                            label: '类目2',
                            value: '22'
                        }, {
                            label: '类目3',
                            value: '23'
                        }, {
                            label: '类目4',
                            value: '24'
                        }, {
                            label: '类目5',
                            value: '25'
                        }
                    ]
                }, {
                    title: '价格',
                    list: [
                        {
                            label: '全部',
                            value: '',
                            checked: true
                        }, {
                            label: '免费',
                            value: '31'
                        }, {
                            label: '50元以下',
                            value: '32'
                        }, {
                            label: '50-100元',
                            value: '33'
                        }, {
                            label: '100-200元',
                            value: '34'
                        }, {
                            label: '200元以上',
                            value: '35'
                        }
                    ]
                }
            ],
            renzhiList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    view: 1258,
                    isHuifang: true,
                    price: 23.0,
                    originPrice: 430.23
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: false,
                    view: 1258,
                    isLiving: true,
                    price: 23.0,
                    originPrice: 430.23
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: false,
                    view: 1258,
                    isNotStart: true,
                    price: 23.0,
                    originPrice: 430.23
                }
            ],
            guihuaList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    isHuifang: true,
                    view: 1258
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投资你',
                    score: 4.8,
                    price: 24.32,
                    isHuifang: true,
                    originPrice: 430.23
                }
            ],
            siweiList: [
                {
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
                    view: 1258
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
    components: {PopFilter}
}
</script>

<style lang="less" >
.center_live_page{
    .filter_top{
        .filter_com .btn{width: 165px;}
    }
    .main{
        // padding: 4px 16px;
        .card{
            padding: 26px 12px 12px;
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
            margin-bottom: 16px;
            border-bottom: solid 1px #F0F0F0;
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
            margin-bottom: 18px;
            width: 319px;
            border-bottom: solid 1px #F0F0F0;
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
            .center{
                height: 59px;
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
}
</style>