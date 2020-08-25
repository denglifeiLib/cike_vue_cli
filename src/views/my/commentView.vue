<template>
    <div class="comment_page">
       <div class="top_card flex_box">
            <img :src="classInfo.header" alt="" class="header hd">
            <div class="bd">
                <p class="name">{{classInfo.teacher}} 老师</p>
                <p class="dis">2020年8月1日 17:00-18:00</p>
            </div>
        </div>
        <div class="main card flex_box">
            <div class="text_dis">老师已收到你的评价</div>
            <star value="score" ></star>
            <textarea class="comment" :value="comment"></textarea>
        </div>
    </div>
</template>

<script>
import Star from '@/components/Star';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            classInfo: {
                teacher: '汪涛',
                header: require('../../assets/images/header.jpg'),
                studentHeader: require('../../assets/images/header.jpg'),
                time: '2020年8月1日 17:00-18:00',
                name: '罗昭诚',
                comment: '讲课非常好，非常清楚'
                
            },
            score: 4,
            comment: 'sfdf'
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });

    },
    methods: {
       
    },
    components: {Star}
}
</script>

<style lang="less" scoped>
    .comment_page{
        padding: 0 24px 24px;
        min-height: 100vh;
        background:linear-gradient(180deg,rgba(27,34,110,1) 0%,rgba(38,47,148,1) 100%);
        .top_card{
            height: 84px;
            color: #fff;
            .header{
                width:38px;
                height:38px;
                border-radius:6px;
                display: block;
            }
            .name{
                padding-bottom: 2px;
                font-size:14px;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
            }
            .dis{
                color: #B6BAE9;
            }
            .bd{
                padding-left: 12px;
            }
        }
        .main{
            padding: 20px 20px 137px;
            flex-direction: column;
            justify-content: center;
            >img,>div{
                margin-bottom: 8px;
            }
            .studentHeader{
                width:48px;
                height:48px;
                border-radius:48px;
                display: block;
            }
            .name{
                font-size:16px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(18,23,50,1);
            }
            .comment{
                width: 100%;
                padding: 14px 15px;
                margin-top: 28px;
                height:126px;
                background:rgba(246,246,246,1);
                border-radius:8px;
                border:1px solid rgba(219,219,219,1);
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(18,23,50,1);
                outline: none;
                resize: none;
            }
            .btn{
                margin-top: 62px;
                width:177px;
                height:42px;
                font-size: 16px;
            }
        }
    }
</style>