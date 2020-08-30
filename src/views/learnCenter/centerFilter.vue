<template>
    <div class="filter_center_page">
        <div class="s_box">
            <search></search>
        </div> 
        <div class="flex_box main">
            <div class="hd">
                <ul class="categorys">
                    <li 
                        v-for="(item,i) in categorys" :key="i" 
                        @click="activeCatogery=i" 
                        :class="{on:activeCatogery===i}">{{item}}</li>
                </ul>
            </div>
            <div class="bd info_box">
                <img src="../../assets/images/filter_banner.png" alt="" class="banner">
                <div class="box">
                    <div class="category_tt flex_box">
                        <div class="hd f13">互联网产品</div>
                        <img src="../../assets/images/icon_right_g@2x.png" alt="" class="hd icon_arr">
                    </div>
                    <div class="btns">
                        <button class="btn plain_grey" v-for="(item,i) in list1" :key="i">{{item}}</button>
                    </div>
                </div>
                <div class="box">
                    <div class="category_tt flex_box">
                        <div class="hd f13">编程语言</div>
                        <img src="../../assets/images/icon_right_g@2x.png" alt="" class="hd icon_arr">
                    </div>
                    <div class="btns">
                        <button class="btn plain_grey" v-for="(item,i) in list2" :key="i">{{item}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import Search from '@/components/Search';
import Swiper from './components/Swiper';
import PopWrap from '@/components/PopWrap';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            categorys: ['内勤培训', '外勤培训', '触课培训'],
            activeCatogery: 0,
            list1: ['数位板', '电子竞技', '数位'],
            list2: ['数位板', '电子竞技', '进阶只需一节课', '数位板', '电子竞技', '进阶只需一节课', '数位板', '电子竞技', '进阶只需一节课'],
        }
    },
    created() {
        this.$emit('tabbar', {
            show: false
        })

    },
    methods: {
       changeTab(index) {
           
        },
        choosePindao(item, j) {}
    },
    components: {Tabs, Swiper, Search, PopWrap}
}
</script>

<style lang="less" scoped>
.filter_center_page{
    .s_box{
        padding: 11px 16px;
    }
    .main{
        align-content: stretch;
        > .bd{
            background: #fff;
            height: calc(100vh - 54px);
        }
        > .hd{
            height: calc(100vh - 54px);
        }
        .categorys li{
            position: relative;
            width: 93px;
            height: 48px;
            line-height: 48px;
            font-size: 14px;
            text-align: center;
            color: #949BA5;
            font-weight: 500;
            &.on{
                background: #FFFFFF;
                color: #1B226E;
                &::before{
                    position: absolute;
                    left: 0;
                    top: 15px;
                    width: 3px;
                    height: 18px;
                    background: #D32D26;
                    content: ' ';
                }
            }
        }

        .info_box{
            padding: 16px;
            .banner{
                display: block;
                width: 100%;
            }
            .box{
                margin-top: 24px;
                .category_tt{
                    height: 18px;
                    margin-bottom: 14px;
                }
                .icon_arr{
                    width: 4px;
                    margin-left: 8px;
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
        }
    }
}
    
</style>