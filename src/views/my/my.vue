<template>
    <div class="my_page">
       <div class="top flex_box">
           <div class="bd">
               <p class="name">Hi~,木以</p>
               <p class="dis">已登录12天</p>
           </div>
           <div class="ft">
               <img src="../../assets/images/header.jpg" alt="" class="header">
               <img src="../../assets/images/my/mybianji@2x.png" alt="" class="label">
           </div>
       </div>
        <div class="card my_order">
            <div class="category_tt flex_box" @click="$router.push({name: 'orders', query:{activeTab: 0}})">
                <div class="bd">我的订单</div>
                <span class="ft">全部订单</span>
                <img src="../../assets/images/icon_right_g@2x.png" alt="" class="ft icon_right">
            </div>
            <ul class="orderTypes flex_box">
                <li @click="$router.push({name: 'orders', query:{activeTab: 1}})">
                    <img src="../../assets/images/my/icon_daifukuan@2x.png" class="type_icon" alt="">
                    <p class="text_dis">待付款</p>
                </li>
                <li @click="$router.push({name: 'orders', query:{activeTab: 2}})">
                    <img src="../../assets/images/my/icon_dingdan@2x.png" class="type_icon" alt="">
                    <p class="text_dis">已购买</p>
                </li>
                <li @click="$router.push({name: 'orders', query:{activeTab: 3}})">
                    <img src="../../assets/images/my/icon_yiwancheng@2x.png" class="type_icon" alt="">
                    <p class="text_dis">已完成</p>
                </li>
                <li @click="$router.push({name: 'orders', query:{activeTab: 4}})">
                    <img src="../../assets/images/my/icon_zan@2x.png" class="type_icon" alt="">
                    <p class="text_dis">待评价</p>
                </li>
            </ul>
        </div>
         <ul class="my_types flex_box">
                <li @click="$router.push({name: 'my_class', query:{activeTab: 0}})">
                    <img src="../../assets/images/my/icon_wdkc@2x.png" class="type_icon" alt="">
                    <p class="text_dis">我的课程</p>
                </li>
                <li @click="$router.push({name: 'my_favorite'})">
                    <img src="../../assets/images/my/icon_wdsc@2x.png" class="type_icon" alt="">
                    <p class="text_dis">我的收藏</p>
                </li>
                <li @click="$router.push({name: 'my_focus'})">
                    <img src="../../assets/images/my/icon_wdgz@2x.png" class="type_icon" alt="">
                    <p class="text_dis">我的关注</p>
                </li>
                <li @click="$router.push({name: 'my_path'})">
                    <img src="../../assets/images/my/icon_xxzj@2x.png" class="type_icon" alt="">
                    <p class="text_dis">学习足迹</p>
                </li>
            </ul>
    </div>
</template>

<script>
import Icon from 'vue-svg-icon/Icon.vue';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            list: [],

            infiniteLoadData: {
                pullUpState: 0, // 1:上拉加载更多, 2:加载中……, 3:我是有底线的
            }
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
            active: 3
        })

    },
    methods: {
       
    },
    components: {}
}
</script>

<style lang="less" scoped>
    .my_page{
        .top{
            padding: 22px 28px 0 32px;
            height: 135px;
            color: #fff;
            background: blue;
            align-items: flex-start;
            .name{
                padding-top: 8px;
                font-size: 24px;
                font-weight: bold;
            }
            .dis{
                padding-top: 6px;
                opacity: 0.5;
            }
            .ft{position: relative;}
            .header{
                width: 64px;
                height: 64px;
                border: 0px solid rgba(255, 255, 255, 0.4);
                border-radius: 60px;
            }
            .label{
                position: absolute;
                height: 19px;
                right: -3px;
                bottom: 0;
            }
        }

        .type_icon{
            display: block;
            width: 28px;
        }

        .card{
            margin: 15px 16px;
        }
        .my_order{
            padding: 0 16px 18px;
            margin-top: -30px;
            .orderTypes{
                padding: 0 9px;
                justify-content: space-between;
                .text_dis{
                    padding-top: 8px;
                }
            }
        }

        .my_types{
            padding: 0 16px;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                display: flex;
                width: 109px;
                height: 109px;
                margin-bottom: 8px;
                background: #FFFFFF;
                border-radius: 8px;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                border: 0px solid #F0F0F0;
                p{
                    padding-top: 20px;
                    color: #121732;
                }
            }
        }
    }
</style>