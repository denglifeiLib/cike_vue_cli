<template>
    <div class="view_all_page">
        <div class="main">
            <!-- <filterCom :popLeimuList="popLeimuList" v-model="filter"></filterCom> -->

            <div class="flex_box justify filter_top">
                <pop-filter v-model="rangeTypeFilter" :items="rangeTypeItems" name="选择排序" title="选择排序"></pop-filter>
                <pop-filter v-model="multiFilter" :items="multiFilterItems" name="筛选" title="选择排序"></pop-filter>
            </div>

            <div class="card guess_card">
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
import * as Axios from '@/utils/Action';
// import filterCom from './components/filterCom';
import PopFilter from '@/components/PopFilter';
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
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('tabbar', {
            show: false
        })

    },
    methods: {
       
    },
    components: {PopFilter}
}
</script>

<style lang="less">
.view_all_page{
    .main{
        padding: 4px 16px;

        .filter_top{
            .filter_com .btn{width: 165px;}
        }
        
        .card{
            padding: 12px 16px;
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
}
    
</style>