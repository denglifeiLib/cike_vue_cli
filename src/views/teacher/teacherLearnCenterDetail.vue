<template>
    <div class="teacher_learn_center_detail_page">
        <div class="guessList whitebg">
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

        <line-chart @change="change"></line-chart>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import LineChart from './componets/LineChart'
export default {
    name: 'test',
    data() {
        return {
            duration: '7D',
            guessList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    title: '你有多久没有投你有多久没有投资你自己了资你自己了',
                    score: 4.8,
                    isFree: true,
                    isCombine: true,
                    view: 1258
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
        change(type) {
            console.log('changeType----', type)
        },
        

    },
    components: {LineChart}
}
</script>

<style lang="less" >
.teacher_learn_center_detail_page{
    padding-bottom: 80px;
    .guessList{
        flex-direction: column;
        padding: 8px 16px;
        .image_hover{
            margin-right: 14px;
        }
        .item{
            width: 100%;
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