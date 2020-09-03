<template>
    <div>
        <div class="main">
            <!-- <filterCom :popLeimuList="popLeimuList" v-model="filter"></filterCom> -->
            <div class="flex_box justify">
                <pop-filter 
                    v-model="saleTypeFilter" 
                    :items="saleTypeItems" 
                    name="选择类型"
                    title="选择类型"
                ></pop-filter>
                <pop-filter v-model="rangeTypeFilter" :items="rangeTypeItems" name="选择排序" title="选择排序"></pop-filter>
                <pop-filter v-model="multiFilter" :items="multiFilterItems" name="综合排序" title="选择排序"></pop-filter>
            </div>
            <div class="card guess_card">
                <div class="guessList">
                    <div class="item flex_box" v-for="(item,i) in guessList" :key="i">
                        <div class="image_hover">
                            <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                            <img src="../../assets/images/jiiaobiaoheji@2x.png" alt="" class="hover topLeft" v-if="item.isCombine">
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
import * as Axios from '@/utils/Action';
import PopFilter from '@/components/PopFilter';
import filterCom from './components/filterCom';
export default {
    name: 'test',
    data() {
        return {
            filter: 'zonghe',
            saleTypeFilter: {
                saleType: ''
            },
            rangeTypeFilter: {
                rangeType: ''
            },
            multiFilter: {
                classType: '',
                price: ''
            },
            saleTypeItems: [
                {
                    title: '',
                    name: 'saleType',
                    list: [
                        {
                            label: '全部类型',
                            value: ''
                        }, {
                            label: '电话销售',
                            value: '1'
                        }, {
                            label: '互联网销售',
                            value: '2'
                        }, {
                            label: '门店销售',
                            value: '3'
                        }, {
                            label: '大客户销售',
                            value: '4'
                        }, {
                            label: '销售心态',
                            value: '5'
                        }, {
                            label: '团队管理',
                            value: '6'
                        }
                    ]
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
                    name: 'classType',
                    list: [
                        {
                            label: '全部',
                            value: '',
                        }, {
                            label: '课程',
                            value: '11'
                        }, {
                            label: '直播',
                            value: '12'
                        }
                    ]
                }, {
                    title: '价格',
                    name: 'price',
                    list: [
                        {
                            label: '全部',
                            value: '',
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
            guessList: [
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
                    view: 1258
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
            show: false
        })

    },
    methods: {
       
    },
    components: {filterCom, PopFilter}
}
</script>

<style lang="less" scoped>
    .main{
        padding: 4px 16px;

        
        .card{
            padding: 12px 16px;
            margin-top: 12px;
            .title{
                font-weight: bold;
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
</style>