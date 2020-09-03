<template>
    <div class="my_favorite_detail_page_wrap">
        <div class="flex_box justify class_filter_box">
            <pop-filter v-model="rangeTypeFilter" :items="rangeTypeItems" name="选择排序" title="选择排序"></pop-filter>
            <pop-filter v-model="multiFilter" :items="multiFilterItems" name="综合排序" title="选择排序"></pop-filter>
        </div>
        <div class="main card">
            <div class="guessList" v-if="guessList && guessList.length">
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

       <div class="empty" v-if="!guessList || guessList.length==0">
            <img src="../../assets/images/kong_shoucang@2x.png" alt="">
            <span class="text_dis">还没有收藏内容</span>
            <button class="btn plain_grey" @click="$router.go(-1)">返回</button>
        </div>
        
        <p class="text_dis delete_text">删除该收藏夹</p>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
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
        this.$emit('showClasstip')
        this.$emit('tabbar', {show: false})
    },
    methods: {
       changeTime(time) {
           console.log(333, time)
        },
    },
    components: {PopFilter}
}
</script>

<style lang="less">
.my_favorite_detail_page_wrap{
    padding: 0 16px 8px;
    .class_filter_box{
        margin-bottom: 14px;
        .filter_com{
            .btn{
                width: 165px;
                height: 34px;
            }
        }
    }
    .card{
        padding: 8px 16px;
        max-height: calc(100vh - 100px);
        overflow-y: scroll;
    }

    .guessList{
        flex-direction: column;
        min-height: calc(100vh - 90px);
        .image_hover{
            margin-right: 14px;
        }
        .item{
            width: 100%;
            padding: 12px 0;
            border-bottom: solid 1px #F0F0F0;
            &:last-child{
                border-bottom: 0;
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
    
    .empty{
        height: calc(100vh - 40px);
        padding-bottom: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 95px;
            margin-bottom: 12px;
        }
        .btn{
            margin-top: 32px;
            background: transparent;
        }
    }
        .delete_text{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: 35px;
            text-align: center;
        }
}


    
</style>