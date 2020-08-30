<template>
    <div class="center_search_page">
       <div class="flex_box search_box">
           <div class="search flex_box bd">
                <img src="../../assets/images/ssicon@2x.png" alt="" class="icon hd">
                <input placeholder="搜索" type="text" class="bd" ref="input" @blur="blur()" @input="changeInput" @change="query()">
            </div>
            <span class="ft cancel" @click="$router.go(-1)">取消</span>
            <div class="card relateList" v-if="!queried && relateList.length">
                <p class="list ellipsis" v-html="item"  v-for="(item,i) in relateList" :key="i" @click="choose(i)"></p>
            </div>
       </div>

        <div v-if="!queried">
            <div class="card history">
                <div class="category_tt flex_box">
                    <div class="bd f13">搜索历史</div>
                    <img src="../../assets/images/qingkong@2x.png" alt="" class="ft icon_clear" @click="clear()">
                </div>
                <div class="btns">
                    <button class="btn plain_grey" v-for="(item,i) in historyList" :key="i">{{item}}</button>
                </div>
            </div>

            <div class="card history">
                <div class="category_tt flex_box">
                    <div class="bd f13">大家都在搜</div>
                    <img src="../../assets/images/sq@2x.png" alt="" class="ft icon_clear" :class="{trans: showAllHot}" @click="showAllHot=!showAllHot">
                </div>
                <div class="btns" v-if="showAllHot">
                    <button class="btn plain_grey" v-for="(item,i) in hotHistoryList" :key="i">{{item}}</button>
                </div>
            </div>
        </div>

        <div class="card" v-if="queried">
            <div class="guessList" v-if="resultList.length">
                <div class="item flex_box" v-for="(item,i) in resultList" :key="i">
                    <div class="image_hover">
                        <img :src="item.poster || require('../../assets/images/default1.jpg')" alt="" class="bg poster">
                        <img src="../../assets/images/cike/jiiaobiaozhibozhong@2x.png" alt="" class="hover topLeft" v-if="item.isLiving">
                        <img src="../../assets/images/jiiaobiaohuifang@2x.png" alt="" class="hover topLeft" v-if="item.isHuifang">
                        <img src="../../assets/images/jiiaobiaoheji@2x.png" alt="" class="hover topLeft" v-if="item.isCombine">
                        <img src="../../assets/images/jiiaobiaoweikaishi@2x.png" alt="" class="hover topLeft" v-if="item.isNotStart">
                        <div class="score_label hover rightBottom">
                            <img src="../../assets/images/xin_s@2x.png" alt="" class="icon">
                            <span class="">{{item.score}}</span>
                        </div>
                    </div>
                    <div>
                        <p class="f14 title ellipsis2">{{item.title}}</p>
                        <div class="text_dis flex_box" v-if="item.isLiving">
                            <img src="../../assets/images/cike/gkrs@2x.png" alt="" class="group_icon ft">
                            <p class="text_dis ft">1258万人观看</p>
                        </div>
                        <p class="text_dis" v-if="!item.isLiving && item.isFree">
                            <img src="../../assets/images/playcishu@2x.png" alt="" class="group_icon ft">
                            <span class="f11">{{item.view}}万人已学</span>
                        </p>
                        <p class="text_dis" v-if="!item.isLiving && !item.isFree">
                            <span class="f10 red">¥</span>
                            <span class="f14 red">{{item.price}}</span>
                            <span class="f10 originPrice">{{item.originPrice}}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="emty flex_box" v-else>
                <img src="../../assets/images/kong_sousuo@2x.png" alt="">
                <p class="text_dis">无相关内容</p>
            </div>
        </div>
        

    </div>
</template>

<script>
import filterCom from './components/filterCom';
import * as Axios from '@/utils/Action';
import 'vant/lib/Dialog/style';
export default {
    name: 'test',
    data() {
        return {
            historyList: ['数位板', '数位板数位板数位板数位板', '数位'],
            hotHistoryList: ['数位板', '数位板数位板数位板数位板', '进阶只需一节课', '数位板', '数位板数位板数位板数位板', '进阶只需一节课', '数位板', '数位板数位板数位板数位板', '进阶只需一节课'],
            relateList: [],
            originRelateList: [],
            resultList: [],
            showAllHot: false,
            queried: false,
            value: ''
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('tabbar', {
            show: false,
            active: 0
        })

    },
    methods: {
       blur() {

       },
       clear() {
            this.$emit('showDialog', {
                show: true,
                text: '确定清空所有历史记录吗？',
                confirm: ()=> {
                    this.historyList = []
                }
            })
       },
       changeInput(e) {
           this.queried = false;
           this.value = e.target.value;
            this.resultList = [];
           if(this.value) {
               this.originRelateList = ['数位板11', '数位板11数位板数数位板数位板数位板数位板位板数位板', '数位11', '数位板11数位'];
                this.relateList = ['数位板11', '数位板11数位板数数位板数位板数位板数位板位板数位板', '数位11', '数位板11数位'].map(item=> {
                    return item.replace(this.value, `<span class=red>${this.value}</span>`)
                })
           } else {
               this.relateList = [];
               this.originRelateList = [];
           }
           
       },
       choose(i) {
           this.$refs.input.value = this.originRelateList[i];
           this.relateList = [];
           this.originRelateList = [];
       },
       query() {
           this.queried = true
           if(this.value) {
               this.resultList = [
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
                    }, {
                        poster: require('../../assets/images/header.jpg'),
                        title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                        score: 4.8,
                        isFree: true,
                        isCombine: true,
                        view: 1258
                    }
                ]
           }
           
       }
    },
    components: {filterCom}
}
</script>

<style lang="less">
.center_search_page{
    padding:8px 16px;
    .search{
        padding: 0 16px;
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
    .search_box{
        position: relative;
    }
    .cancel{
        padding-left: 12px;
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #1B226E;
    }

    .card{
        padding: 0 16px 16px;
        margin-top: 12px;
        .category_tt{
            height: 44px;
        }
        .icon_clear{
            width: 18px;
            &.trans{
                transform: rotate(180deg);
            }
        }
        .f13{
            font-size: 13px;
        }
        .btns{
            .btn{
                display: inline-flex;
                margin-right: 12px;
                margin-bottom: 13px;
                color: #949BA5;
                border-color: #E0E0E0;
            }
        }
    }
    .relateList{
        position: absolute;
        left: 0;
        right: 0;
        top: 32px;
        padding-top: 12px;
        min-height: 280px;
        p{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #121732;
            line-height: 45px;
            border-bottom: solid 1px #F3F3F3;
        }
    } 

    .guessList{
        padding-top: 18px;
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
    .emty{
        height: calc(100vh - 80px);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            margin-bottom: 12px;
            width: 95px;
        }
    }
}
</style>