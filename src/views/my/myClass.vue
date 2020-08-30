<template>
    <div class="orders_page_wrap">
       <tabs :list="tabList" :active="activeTab" @change="changeTab" class="bd"></tabs> 

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

            <div class="empty" v-if="!guessList || guessList.length==0">
                <img src="../../assets/images/my/kong_kecheng@2x.png" alt="">
                <span class="text_dis">暂无课程</span>
                <button class="btn plain_grey" @click="$router.go(-1)">返回</button>
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
            tabList: [{
                label: '课程',
                number: 0,
                value: 0
            }, {
                label: '直播',
                number: 2,
                value: 1
            }],
            activeTab: 0,

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
        this.classStatusMap = {
            '0': '待付款',
            '1': '已购买',
            '2': '已完成',
            '3': '待评价',
        }

        this.changeTab((this.$route.query||{}).activeTab || 0)
        this.myClassList = this.allClassList

        console.log(999, this.$route.query)
    },
    methods: {
       changeTab(index) {
           console.log(333, index)
            this.activeTab = index*1;
            if(index===0) {
                this.myClassList = this.allClassList
            } else {
                this.myClassList = this.allClassList.filter(item=> item.status == index-1)
            }
        },
    },
    components: {Tabs}
}
</script>

<style lang="less" scoped>
.orders_page_wrap{
    .empty{
        height: calc(100vh - 126px);
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
        }
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
}

    .main{
        margin: 12px 16px;
        padding: 6px 16px;
        overflow: hidden;

    }

    
</style>