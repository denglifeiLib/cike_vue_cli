<template>
    <div class="living_detail_class_page">

        <!-- 回放 -->
        <div class="card playBack flex_box">
            <button class="btn orange hd">回放</button>
            <p class="bd f17">2020-08-24 20:00</p>
            <span class="text_dis ft">时长 24:31</span>
        </div>

        <!-- 倒计时 -->
        <div class="card countdown_box">
            <p class="f14 bold">距离<span class="red"> 08-24 20:00</span> 直播开始还有</p>
            <div class="times flex_box">
                <div class="box">02<span class="text">天</span></div>
                <div class="box">04<span class="text">时</span></div>
                <div class="box">50<span class="text">分</span></div>
                <div class="box">30<span class="text">秒</span></div>
            </div>
            <p class="text_dis">4523 人已预约 </p>
            <div class="btn_box">
                <button class="btn block plain_red" v-if="!alreadyYuyue" @click="yuyue()">预约直播</button>
                <button class="btn block plain_grey" v-if="alreadyYuyue">已预约</button>
            </div>
        </div>

        <div class="card">
            <div class="view flex_box">
                <div class="bd">
                    <p class="title f17 bold">给自己一次高收给自己一次高收给自己一次高收入的机会入的机会给自己一次高收入的机会入的机会</p>
                    <div class="text_dis ">
                        <img src="../../assets/images/playcishu@2x.png" class="dis_icon" alt=""/>
                        1258人观看
                    </div>
                    <div class="labels">
                        <button class="btn grey">标签1</button>
                        <button class="btn grey">标签2</button>
                        <button class="btn grey">标签3</button>
                    </div>
                </div>
                <div class="ft" @click="showSharePop=true">
                    <img src="../../assets/images/fenxiang@2x.png" class="action_icon" alt=""/>
                    分享
                </div>
                <div class="ft" @click="shoucanToggle()">
                    <img src="../../assets/images/shoucang@2x.png" v-if="hasShoucan" class="action_icon" alt=""/>
                    <img src="../../assets/images/shoucang_n@2x.png" v-if="!hasShoucan" class="action_icon" alt=""/>
                    {{hasShoucan ? '取消收藏' : '收藏'}}
                </div>
            </div>

            <div class="taolun_bar" @click="showTaolun=true"> 
                <div class="flex_box taolun">
                    <img src="" alt="" class="msg_icon hd">
                    <div class="bd">讨论区</div>
                    <div class="headers ft">
                        <img src="../../assets/images/default1.jpg" alt="" class="header hd">
                        <img src="../../assets/images/default1.jpg" alt="" class="header hd">
                        <img src="../../assets/images/default1.jpg" alt="" class="header hd">
                    </div>
                    <img src="../../assets/images/icon_right_g@2x.png" alt="" class="ft right_arr">
                </div>
            </div>

            <p class="f16 bold tea_tt">课程老师</p>
            <div class="teach_box flex_box">
                <img src="../../assets/images/default1.jpg" alt="" class="header hd">
                <div class="bd">
                    <p class="name f14">鹿园 <img src="../../assets/images/lsbq@2x.png" alt="" class="label"></p>
                    <p class="text_dis">清华大学副教授</p>
                </div>
                <button class="ft btn" :class="isFocus ? 'blue': 'plain_grey'" @click="toggleFocus">已关注</button>
            </div>

            <div class="tu_wen">
                <div class="f16 bold tt">图文介绍</div>
                <p class="text">政制般低难风则单至米长手在速质式消头并治飞速一适六革任流进没但质它水高色才育看回太府律新难省。周长维么强转们北题构形路酸许农和基机满热会金识开深可按分西事思利。</p>
                <img src="../../assets/images/default2.jpg" alt="" class="pic">
                <p class="text">政制般低难风则单至米长手在速质式消头并治飞速一适六革任流进没但质它水高色才育看回太府律新难省。</p>
            </div>


            <div class="btm_fixed flex_box">
                <p class="text_dis bd">
                    <span class="f14 red">¥</span>
                    <span class="f20 red"> {{isFree ? '免费' : 29.6}}</span>
                    <span class="f14 originPrice" v-if="!isFree">88</span>
                </p>
                <button class="btn red ft">
                    加入学习
                    <img src="../../assets/images/icon_right_w@2x.png" alt="" class="icon">
                </button>
            </div>
        </div>
        

        <!-- 分享 -->
        <share :showPop="showSharePop" @handle="shareHandle" @cancel="showSharePop=false"></share>
        <haibao :showPop="showHaibaoPop" @cancel="showHaibaoPop=false"></haibao>
        <!-- 收藏 -->
        <shou-can-flow :showPop="showShouCanPop" @cancel="showShouCanPop=false" @shoucanSucc="shoucanSucc()"></shou-can-flow>
        
         <!-- 讨论详情all --> 
        <mt-popup v-model="showTaolun" position="bottom" class="mint-popup taolun_pop">
            <img src="../../assets/images/close.png" alt="" class="close" @click="showTaolun=false">
            <div class="tt f16">
                讨论区 <span class="text_dis">共48条</span>
            </div>
            <p class="bar">全部评论</p>
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

            <div class="empty" v-if="false">
                <img src="../../assets/images/kong_pinjia@2x.png" alt="">
                <span class="text_dis">暂无评论</span>
            </div>

            <div class="comment_input flex_box">
                <mt-field placeholder="发表讨论…" v-model="comment" class="bd"></mt-field>
                <button class="btn white ft send" :disabled="!comment">发送</button>
            </div>
        </mt-popup>
        <!-- 讨论详情2 --> 
        <mt-popup v-model="showTaolun2" position="bottom" class="mint-popup taolun_pop">
            <img src="../../assets/images/close.png" alt="" class="close" @click="showTaolun2=false">
            <div class="tt f16">
                讨论区 <span class="text_dis">共48条</span>
            </div>
            <p class="bar">TA的评论</p>
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

        <!-- 预约成功 -->
        <mt-popup v-model="yuyueSuccessPop" position="center" class="mint-popup shoucan_confirm_pop">
            <div class="success_wrap" v-if="yuyueSuccessPop">
                <img src="../../assets/images/tostcg@2x.png" alt="" class="img">
                <p class="tt f16">预约成功</p>
                <p>开播前将通过公众号消息进行通知</p>
            </div>
        </mt-popup>

    </div>
</template>

<script>
import Share from '@/components/Share';
import Haibao from '@/components/Haibao';

import ShouCanFlow from '@/components/ShouCanFlow';

import PopWrap from '@/components/PopWrap';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            showSharePop: false,
            showHaibaoPop: false,
            showShouCanPop: false,
            yuyueSuccessPop: false,
            
            isFree: true,
            isFocus: false,
            hasShoucan: false,

            alreadyYuyue: false,

            showTaolun: false,
            showTaolun2: false,
            comment: '',
            
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
        shareHandle(type) {
            switch(type) {
                case 'haibao': 
                    this.showHaibaoPop = true;
                    break
            }
        },
        toggleFocus() {
            this.isFocus = !this.isFocus;
        },
        shoucanToggle() {
            if(this.hasShoucan) {
                this.hasShoucan = false;
            } else {
                this.showShouCanPop = true;
            }
            
        },
        shoucanSucc() {
            this.showShouCanPop = false;
            this.hasShoucan = true;
        },
        yuyue() {
            this.yuyueSuccessPop = true;
            setTimeout(()=> {
                this.yuyueSuccessPop = false;
                this.alreadyYuyue = true;
            }, 3000)
        }
    },
    components: {Share, Haibao, ShouCanFlow, PopWrap}
}
</script>

<style lang="less">
.living_detail_class_page{
    padding: 0 16px 60px;
    .card{
        padding: 24px 16px ;
        margin-top: 12px;
    }

    .countdown_box{
        padding: 24px 8px 0;
        text-align: center;
        .times{
            padding: 13px 0 10px;
            font-size: 32px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #121732;
            line-height: 45px;
            justify-content: space-around;
            .text{
                font-size: 12px;
            }
        }
        .btn_box{
            padding: 12px 16px;
            margin-top: 12px;
             border-top: solid 1px #F0F0F0;
            .btn{
                height: 32px;
            }
            .plain_grey{
                color: #949BA5;
                border-color: #BFC3D0;
            }
        }
    }

    .playBack{
        height: 37px;
        padding: 0 16px;
        .orange{
            min-width: auto;
            width: 40px;
            height: 21px;
            padding: 0;
            text-align: center;
            background: #FF902E;
            border-radius: 4px;
            color: #fff;
        }
        .bd{
            padding-left: 12px;
        }
    }


   .view{
       align-items: flex-start;
        > .ft{
            text-align: center;
            font-size:12px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(148,155,165,1);
            // margin-left: 16px;
            width: 50px;
        }
        .bd{padding-left: 0;}
        .action_icon{
            display: block;
            width: 22px;
            height: 22px;
            margin:0 auto 7px;
        }
        .dis_icon{
            width: 10px;
        }
        .text_dis{
            padding-top: 4px;
            padding-bottom: 8px;
            font-size: 11px;
        }
        .labels{
            margin-bottom: 19px;
        }
        button{
            display: inline-block;
            min-width: auto;
            padding: 0 8px;
            height: 23px;
            color: #949BA5;
            background: #F5F6F9;
            font-weight: 400;
        }
       
   }

   .taolun_bar{
       padding: 0 8px 16px;
       border-bottom: solid 1px #F0F0F0;
        .taolun{
            padding: 0 16px;
            height: 40px;
            background: #F9F9F9;
            border-radius: 8px;
        }
       .header{
           width: 19px;
            height: 19px;
            margin-right: -12px;
            border-radius: 10px;
            border: 1px solid #F0F0F0;
       }
       .right_arr{
           margin-left: 18px;
           width: 4px;
       }
        .msg_icon{
            margin-right: 6px;
            width: 14px;
            height: 14px;
            background: orange;
        }
   }

   .tu_wen{
       padding-top: 18px;
       margin-top: 19px;
       border-top: solid 1px #F0F0F0;
       .tt{
           padding-bottom: 13px;
       }
       .text{
           margin-bottom: 12px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #585B60;
            line-height: 26px;
       }
       .pic{
           margin-bottom: 12px;
           display: block;
           max-width: 100%;
       }
   }

   .tea_tt{
       margin-top: 18px;
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

    

   .btm_fixed{
       position: fixed;
       left: -0;
       right: 0;
       bottom: 0;
       height: 48px;
       padding: 0 16px 0 24px;
        z-index: 888;
        background: #FFFFFF;
        box-shadow: 0px -1px 0px 0px #E4E4E4;
       .originPrice{
           margin-left: 16px;
            border-bottom: solid 1px #949BA5;
            line-height: 0.1;
            display: inline-block;
        }
        .btn{
            height: 36px;
            width: 103px;
            .icon{
                margin-left: 8px;
                width: 5px;
            }
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
            padding: 14px;
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

    .success_wrap{
        // width: 185px;
        height: 175px;
        padding: 32px 22px;
        background: rgba(255, 255, 255, 0.84);
        border-radius: 12px;
        border: 1px solid #F0F0F0;
        text-align: center;
        .img{
            width: 44px;
        }
        .tt{
            padding: 18px 0 10px;
            font-weight: bold;
        }
    }

    .empty{
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 95px;
            margin-bottom: 12px;
        }
    }
}
   
</style>