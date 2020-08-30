<template>
    <div class="living_detail_comment_page">
       
        <div class="card my_comment">
            <div class="f16 bold tt">我的评价</div>
            <!-- 我评价过 -->
            <div class="comment_item flex_box">
                <img src="../../assets/images/header.jpg" alt="" class="header hd">
                <div class="bd">
                    <p class="name">
                        蒋洋
                        <star value="5" class="box"></star>  
                        <span class="fr zan">
                            210 
                            <img src="../../assets/images/dianzan@2x.png" alt="" class="img">
                        </span>
                    </p>
                    <p class="comment_con">真心觉得老师的课程讲解的是最贴近实战的是最贴近实战的，而且对我这种小白很友好，爱了～</p>
                    <p class="dis">2020-08-10</p>
                </div>
            </div>
            <!-- 我没评价 -->
            <div class="commont_arae">
                <star value="0" @input="show()"></star>  
                <p class="text_dis">您的宝贵评价，对我们非常重要哦～</p>
            </div>

            <!-- 全部评价 -->
            <div class="all_comments_box">
                <div class="f16 bold tt">全部评价</div>
                <div class="starts_view flex_box">
                    <div class="hd">
                        <p class="text_dis">145条评价</p>
                        <div class="val">
                            <span class="val_num">4.8</span>
                            星
                        </div>
                    </div>
                    <div class="bd">
                        <div class="flex_box row" v-for="(star,i) in starPercent" :key="i">
                            <div class="stars hd">
                                <img src="../../assets/images/xin_s@2x.png" alt="" v-for="j in (5-i)" :key="j">
                            </div>
                            <div class="bar bd"><div class="val" :style="{width: star}"></div></div>
                        </div>
                    </div>
                </div>

                <div class="comment_list_box">
                    <div class="comment_item flex_box">
                        <img src="../../assets/images/header.jpg" alt="" class="header hd">
                        <div class="bd">
                            <p class="name">
                                蒋洋
                                <star value="5" class="box"></star>  
                                <span class="fr zan">
                                    210 
                                    <img src="../../assets/images/dianzan@2x.png" alt="" class="img">
                                </span>
                            </p>
                            <p class="comment_con">真心觉得老师的课程讲解的是最贴近实战的是最贴近实战的，而且对我这种小白很友好，爱了～</p>
                            <p class="dis">2020-08-10</p>
                        </div>
                    </div>
                    <div class="comment_item flex_box">
                        <img src="../../assets/images/header.jpg" alt="" class="header hd">
                        <div class="bd">
                            <p class="name">
                                蒋洋
                                <star value="5" class="box"></star>  
                                <span class="fr zan">
                                    210 
                                    <img src="../../assets/images/dianzan_s@2x.png" alt="" class="img">
                                </span>
                            </p>
                            <p class="comment_con">真心觉得老师的课程讲解的是最贴近实战的是最贴近实战且对我这种小白很友好，爱了～</p>
                            <p class="dis">2020-08-10</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <mt-popup v-model="showCommentPop" position="center" class="mint-popup shoucan_confirm_pop">
            <div class="pop_wrap" v-if="showCommentPop">
                <div class="text_dis f13">点击星星评分</div>
                <star v-model="score" class="stars"></star>
                <textarea class="comment" v-model="comment" placeholder="说说你对课程的印象吧，例如学习成果、课程内容、讲师风格、教学服务等。"></textarea>
                <div class="btns flex_box justify">
                    <button class="btn grey" @click="showCommentPop=false">取消</button>
                    <button class="btn blue" :disabled="!comment" @click="makeComment()">确定</button>
                </div>
            </div>
        </mt-popup>

    </div>
</template>

<script>
import Star from '@/components/Star';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            score: 0,
            comment: '',
            showCommentPop: false,
            starPercent: ['90%','80%','60%','30%','0%',]
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
        show() {
            this.showCommentPop = true;
        },
        makeComment() {
            this.showCommentPop = false;
        }
    },
    components: {Star}
}
</script>

<style lang="less">
.living_detail_comment_page{
    padding: 0 16px 60px;
    .card{
        padding: 24px 16px ;
        margin-top: 12px;
    }

    .my_comment{
        padding: 18px 16px 21px;
        .commont_arae{
            padding: 18px 16px 21px;
            text-align: center;
            border-bottom: solid 1px #F0F0F0;
            .text_dis{
                padding-top: 14px;
            }
            .star .star-item{
                width: 22px;
                height: 22px;
            }
        }
        .all_comments_box{
            padding-top: 18px;
        }
    }

    .all_comments_box{
        .starts_view{
            padding: 12px 12px 12px 16px;
            margin: 12px 0 8px;
            background: #F9F9F9;
            border-radius: 8px;
        }
        .row{
            margin-bottom: 4px;
        }
        .stars{
            padding-right: 5px;
            width: 50px;
            overflow: hidden;
            img{
                float: right;
                height: 7px;
                width: 7px;
                margin-left: 2px;
            }
        }
        .bar{
            padding-left: 0;
            height: 4px;
            background: #EDE8E2;
            .val{
                height: 4px;
                background-color: #FCC07B;
            }
        }
        .val{
            .val_num{
                line-height: 43px;
                font-size: 36px;
                font-family: Helvetica-Bold, Helvetica;
                font-weight: bold;
                color: #121732;
            }
        }
    }

    .comment_item{
        padding: 18px 0;
        align-items: flex-start;
        border-bottom: solid 1px #F0F0F0;
        &:last-child{
            border-bottom: 0;
        }
        .header{
            width: 35px;
            height: 35px;
            border-radius: 30px;
        }
        .name{
            .box{
                margin-left: 10px;
            }
            .star .star-item{
                width: 12px;
                height: 12px;
                margin-right: 4px;
            }
            .zan{
                font-size: 11px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #949BA5;
                .img{
                    width: 14px;
                    margin-left: 4px;
                }
            }
        }
        .comment_con{
            padding-top: 14px;
            line-height: 20px;
        }
        .dis{
            font-size: 11px;
            color: #BFC3D0;
            padding-top: 4px;
        }
    }


    .shoucan_confirm_pop{
        padding: 0;
        border-radius: 12px;
        .pop_wrap{
            width: 327px;
            padding: 27px 14px;
            text-align: center;
        }
        .stars{
            margin: 16px 0 28px;
        }
        .btns{
            padding: 0 10px;
            .btn{
                width: 131px;
                height: 42px;
            }
        }
        .comment{
            width: 100%;
            padding: 14px 15px;
            margin-bottom: 48px;
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
    }

}
   
</style>