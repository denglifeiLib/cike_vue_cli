<template>
    <div class="teacher_my_page">
       <div class="card top flex_box">
           <div class="bd">
               <p class="name">Hi~,木以</p>
               <p class="dis">已登录12天</p>
           </div>
           <div class="ft">
               <img src="../../assets/images/header.jpg" alt="" class="header">
               <img src="../../assets/images/my/mybianji@2x.png" alt="" class="label">
           </div>
       </div>
         <ul class="my_types flex_box">
                <li @click="$router.push({name: 'teacher_de_class', query:{activeTab: 0}})">
                    <img src="../../assets/images/my/icon_wdsk@2x.png" class="type_icon" alt="">
                    <p class="text_dis">我的私课</p>
                </li>
                <li @click="$router.push({name: 'teacher_view_data'})">
                    <img src="../../assets/images/my/icon_sjck@2x.png" class="type_icon" alt="">
                    <p class="text_dis">收入中心</p>
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
    .teacher_my_page{
        padding-top: 15px;
        .top{
            padding: 0 22px 0 16px ;
            height: 112px;
            background: fff;
            .name{
                padding-top: 8px;
                font-size: 24px;
                font-weight: bold;
            }
            .dis{
                padding-top: 8px;
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
            margin: 0 16px 15px;
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
                &:last-child:nth-child(3n + 2) {
                    margin-right: calc((100% - $width) / 2);
                }
            }
        }
    }
</style>