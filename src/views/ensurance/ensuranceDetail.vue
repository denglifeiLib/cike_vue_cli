<template>
    <div class=" ensurence_detail_page">
        <div class="image_hover vedio">
            <img src="../../assets/images/default1.jpg" alt="" class="bg poster">
            <img src="../../assets/images/cike/play@2x.png" alt="" class="hover center">
            <p class="rightBottom hover">08:54</p>
        </div>

        <div class="main">
            <h1 class="title">当你的伙伴需要你伸出一只手时，不妨把肩膀也给他</h1>
            <p class="text_dis sub_title">
                <span class="blue_light">来自光明网</span>
                <span>2020-08-20 12:00发布</span>
                <span>2122阅读</span>
            </p>

            <div class="teach_box flex_box">
                <img src="../../assets/images/default1.jpg" alt="" class="header hd">
                <div class="bd">
                    <p class="name f14">鹿园 <img src="../../assets/images/lsbq@2x.png" alt="" class="label"></p>
                    <p class="text_dis">清华大学副教授</p>
                </div>
                <button class="ft btn" :class="isFocus ? 'blue': 'plain_grey'" @click="toggleFocus">已关注</button>
            </div>
            
            <div class="article">
                <p class="text">政制般低难风则单至米长手在速质式消头并治飞速一适六革任流进没但质它水高色才育看回太府律新难省。周长维么强转们北题构形路酸许农和基机满热会金识开深可按分西事思利。</p>
                <img src="../../assets/images/candelete.jpg" alt="" class="img">
                <img src="../../assets/images/candelete.jpg" alt="" class="img">
            </div>

            <div class="zan_area">
                <button class="ft btn" :class="isZan ? 'blue': 'grey'" @click="toggleZan">
                    <img :src="!isZan?'static/images/dianzan@2x.png':'static/images/dianzan_w@2x.png'" alt="" class="icon">
                    231
                </button>
                <p class="text_dis">好文章需要你的鼓励</p>
            </div>
        </div>

        <div class="main">
            <p class="f16 bold">评论区</p>
            <div class="comment_list_box">
                <div class="comment_item flex_box">
                    <img src="../../assets/images/header.jpg" alt="" class="header hd">
                    <div class="bd">
                        <p class="name f14"> 蒋洋</p>
                        <p class="comment_con">真心觉得老师的课程讲解的是最贴近实战的是最贴近实战的，而且对我这种小白很友好，爱了～</p>
                        <div class="dis flex_box">
                            <div class="bd">2020-08-10</div>
                            <div class="ft" @click="showTaolun2=true">2 <img src="../../assets/images/pl@2x.png" alt=""></div>
                            <div class="ft">210 <img src="../../assets/images/dianzan_s@2x.png" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="comment_item flex_box">
                    <img src="../../assets/images/header.jpg" alt="" class="header hd">
                    <div class="bd">
                        <p class="name f14"> 蒋洋</p>
                        <p class="comment_con">真心觉得老师的课程讲解的是最贴近实战的是最贴近实战且对我这种小白很友好，爱了～</p>
                        <div class="dis flex_box">
                            <div class="bd">2020-08-10</div>
                            <div class="ft" @click="showTaolun2=true">2 <img src="../../assets/images/pl@2x.png" alt=""></div>
                            <div class="ft">210 <img src="../../assets/images/dianzan@2x.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div class="fixed bottom_fixed flex_box">
            <div class="flex_box search_box bd">
                <div class="search flex_box bd">
                    <input placeholder="说点什么吧…" type="text" class="bd" ref="input" @blur="blur()" @change="query()">
                    <span class="ft cancel blue">发送</span>
                </div>
                <img src="../../assets/images/fenxiang@2x.png" alt="" class="ft fenx">
            </div>
        </div>
        

        <!-- 讨论详情2 --> 
        <mt-popup v-model="showTaolun2" position="bottom" class="mint-popup taolun_pop">
            <img src="../../assets/images/close.png" alt="" class="close" @click="showTaolun2=false">
            <div class=" tt text_dis f16">
                TA的评论
            </div>
            <div class="comment_list_box">
                <div class="comment_item flex_box">
                    <img src="../../assets/images/header.jpg" alt="" class="header hd">
                    <div class="bd">
                        <p class="name f14"> 蒋洋</p>
                        <p class="comment_con">真心觉得老师的课程讲解的是最贴近实战的是最贴近实战的，而且对我这种小白很友好，爱了～</p>
                        <div class="dis flex_box">
                            <div class="bd">2020-08-10</div>
                            <div class="ft">210 <img src="../../assets/images/dianzan_s@2x.png" alt=""></div>
                        </div>
                    </div>
                </div>
                <div class="comment_item detail_coment flex_box">
                    <img src="../../assets/images/header.jpg" alt="" class="header hd">
                    <div class="bd">
                        <p class="name f14">Devin Elliott</p>
                        <p class="comment_con">我觉得你说的很对</p>
                        <div class="dis flex_box">
                            <div class="bd">2020-08-10</div>
                            <div class="ft">210 <img src="../../assets/images/dianzan@2x.png" alt="" class="img"></div>
                        </div>
                    </div>
                </div>
                <div class="comment_item detail_coment flex_box">
                    <img src="../../assets/images/header.jpg" alt="" class="header hd">
                    <div class="bd">
                        <p class="name f14">Devin Elliott</p>
                        <p class="comment_con">我觉得你说的很对</p>
                        <div class="dis flex_box">
                            <div class="bd">2020-08-10</div>
                            <div class="ft">210 <img src="../../assets/images/dianzan@2x.png" alt="" class="img"></div>
                        </div>
                    </div>
                </div>
                <div class="comment_item detail_coment flex_box">
                    <img src="../../assets/images/header.jpg" alt="" class="header hd">
                    <div class="bd">
                        <p class="name f14">Devin Elliott</p>
                        <p class="comment_con">我觉得你说的很对</p>
                        <div class="dis flex_box">
                            <div class="bd">2020-08-10</div>
                            <div class="ft">210 <img src="../../assets/images/dianzan_s@2x.png" alt=""></div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="comment_input flex_box">
                <mt-field placeholder="发表讨论…" v-model="comment" class="bd"></mt-field>
                <button class="btn white ft send" :disabled="!comment">发送</button>
            </div>
        </mt-popup>


    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            isFocus: true,
            isZan: false,
            showTaolun2: false,
            comment: '',
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {
            show: false
        })
    },
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus
        },
        toggleZan() {
            this.isZan = !this.isZan
        },
        blur() {

       },
       query() {
           
       }
    },
    components: {}
}
</script>

<style lang="less">
    .ensurence_detail_page{
        padding-bottom: 80px;

        .vedio{
            .bg{
                width: 100%;
            }
            .center{
                height: 60px;
            }
            .rightBottom{
                padding: 8px;
                color: #FFFFFF;
            }
            
        }

        .title{
            margin-bottom: 8px;
            font-size: 22px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #121732;
            line-height: 29px;
        }
        .sub_title span{
            padding-right: 10px;
            &.blue_light{
                color: #1058CE;
            }
        }

        .teach_box{
            margin-top: 12px;
            padding: 0 16px;
            height: 69px;
            background: #F9F9F9;
            border-radius: 8px;
            .header{
                margin-right: 13px;
                width: 37px;
                height: 37px;
                border-radius: 8px;
            }
            .name{padding-bottom: 5px;}
            .label{
                height: 14px;
                margin-left: 8px;
                vertical-align: middle;
            }
            .btn.plain_grey{
                background: #fff;
                color: #949BA5;
                border-color: #e0e0e0;
            }
        }

        .main{
            position: relative;
            padding: 22px 24px 0;
            margin-bottom: 4px;
            z-index: 55;
            overflow: hidden;
            background: #fff;
            .text{
                margin-bottom: 12px;
                font-size:15px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                line-height:26px;
                color:rgba(88,91,96,1);
            }
            .img{
                margin-bottom: 12px;
                max-width: 100%;
                border-radius: 8px;
            }
            .article{
                margin-top: 24px;
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

        .comment_list_box{
            margin-top: 6px;
            padding-bottom: 45px;
            .header{
                margin-top: -4px;
            }
            .comment_con{
                padding-top: 3px;                
            }
            .comment_item > .bd{
                padding-left: 10px;
            }
            .detail_coment{
                padding-left: 36px;
            }
            .dis {
                .bd{
                    padding-left: 0;
                }
                .ft{
                    width: 58px;
                    text-align: right;
                    display: inline-flex;
                    align-items: center;
                    justify-content: flex-end;
                    
                    img{
                        width: 14px;
                        margin-left: 8px;
                        // vertical-align: middle;
                    }
                }
            }
            
        }

        .taolun_pop{
            width: 100%;
            border-radius:12px 12px 0px 0px;
            .close{
                position: absolute;
                width: 14px;
                height: 14px;
                right: 18px;
                top: 14px;
            }

            .tt{
                padding-left: 16px;
                line-height: 44px;
            }
            .bar{
                padding-left: 16px;
                line-height: 27px;
                height: 27px;
                color: #949BA5;
                background: #F0F0F0;
            }
            .comment_list_box{
                max-height: calc(100vh - 100px);
                min-height: 300px;
                margin-top: 0;
                padding: 0 14px 14px;
                overflow: scroll;
                .header{
                    margin-top: -4px;
                }
                .comment_con{
                    padding-top: 3px;                
                }
            .comment_item > .bd{
                    padding-left: 10px;
                }
                .detail_coment{
                    padding-left: 36px;
                }
                .dis {
                    .bd{
                        padding-left: 0;
                    }
                    .ft{
                        width: 58px;
                        text-align: right;
                        display: inline-flex;
                        align-items: center;
                        justify-content: flex-end;
                        
                        img{
                            width: 14px;
                            margin-left: 8px;
                            // vertical-align: middle;
                        }
                    }
                }
                
            }
            .comment_input{
                height: 54px;
                padding-left: 12px;
                background: #FFFFFF;
                box-shadow: 0px -1px 0px 0px #F5F5F5;
                .mint-cell{
                    min-height: auto;
                    height: 34px;
                    background: #F4F4F4;
                    margin:0;
                    input{background: #F4F4F4;}
                }
                .send{
                    width: 58px;
                    text-align: center;
                    font-size: 13px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #1B226E;
                }
            }
        }

        .zan_area{
            text-align: center;
            padding: 16px 20px 24px;
            .btn{
                margin: 0 auto 12px;
                width: 85px;
                height: 37px;    
                img{
                    height: 16px;
                    margin-right: 6px;
                }   
            }
        }
        .bottom_fixed{
            padding-left: 10px;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            height: 60px;
            justify-content: center;
            z-index: 88;
            background: #fff;
            box-shadow:0px -1px 0px 0px rgba(228,228,228,1);
            button{
                width:177px;
                height:42px;
            }
            .fenx{
                width: 22px;
                margin: 0 16px;
            }
        }

        .search{
            padding: 0 16px;
            height: 34px;
            background: #fff;
            border-radius: 16px;
            background: #EFEFEF;
            justify-content: center;
            .icon{
                height: 14px;
            }
            input.bd{
                width: 100%;
                border: 0;
                outline: 0;
                background: #EFEFEF;
            }
        }
    }
   
</style>