<template>
    <div class="living_detail_class_page">
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
        <div class="card mulu">
            <div class="f16 bold tt">课程目录</div>
            <div class="flex_box text_dis sub_tt">
                <span class="bd">
                    进度14/15
                    <img src="../../assets/images/weiwanc@2x.png" alt="" class="label">
                </span>
                <img src="../../assets/images/yiwenicon@2x.png" alt="" class="ft yiwen">
                <span class="ft">完成规则</span>
            </div>
            <ul class="list">
                <li class="flex_box red">
                    <p class="bd">01、软件入门</p>
                    <img src="../../assets/images/icon_zcsk@2x.png" alt="" class="icon">
                </li>
                <li class="flex_box">
                    <p class="bd">02、界面介绍&新建和存储</p>
                    <img src="../../assets/images/kybf@2x.png" alt="" class="icon">
                </li>
                <li class="flex_box grey">
                    <p class="bd">03、如何创建一个逼真的场景</p>
                    <img src="../../assets/images/ywc@2x.png" alt="" class="icon">
                </li>
                <li class="flex_box">
                    <p class="bd">04、课后作业</p>
                </li>
            </ul>
        </div>

        <!-- 课程推荐 -->
        <div class="card guess_card">
            <div class="category_tt flex_box">
                <div class="bd">课程推荐</div>
                <img src="../../assets/images/hypicon@2x.png" alt="" class="ft icon_fresh">
                <span class="ft">换一批</span>
            </div>
            <img src="../../assets/images/cike/cnxh_banner@2x.png" alt="" class="banner">
            <div class="guessList">
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
        </div>

        <div class="card my_comment">
            <div class="f16 bold tt">我的评价</div>
            <div class="commont_arae">
                <star v-model="score"></star>  
                <p class="text_dis">您的宝贵评价，对我们非常重要哦～</p>
            </div>
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

    </div>
</template>

<script>
import Share from '@/components/Share';
import Haibao from '@/components/Haibao';
import Star from '@/components/Star';
import Tabs from '@/components/Tabs';
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
            showTaolun: false,
            showTaolun2: true,
            isFree: true,
            isFocus: false,
            hasShoucan: false,
            score: 0,
            comment: '',
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
        }
    },
    components: {Tabs, Share, Haibao, Star, ShouCanFlow, PopWrap}
}
</script>

<style lang="less">
.living_detail_class_page{
    padding: 0 16px 60px;
    .card{
        padding: 24px 16px ;
        margin-top: 12px;
    }
    .living_hook{
        height: 211px;  
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

   .mulu{
       padding-bottom: 8px;
       .yiwen{
           width: 12px;
           margin-right: 6px;
       }
       .label{
           height: 18px;
           margin-left: 8px;
           vertical-align: middle;
       }
       .sub_tt{
           font-size: 13px;
           padding-top: 4px;
           padding-bottom: 8px;
       }
       .bd{padding-left: 0;}
       .list{
           li{
               height: 52px;
               border-top: solid 1px #F0F0F0;
               font-size: 14px;
               font-weight: bold;
               &:first-child{
                   border-top: 0;
               }
               .icon{
                   width: 15px;
               }
           }
       }
   }

    .guess_card{
       padding-top: 0;
        .banner{
            margin-bottom: 24px;
            display: block;
            width: 100%;
        }
    }
    .guessList{
        flex-direction: column;
        .image_hover{
            margin-right: 14px;
        }
        .item{
            width: 100%;
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: solid 1px #F0F0F0;
            &:last-child{
                border-bottom: 0;
                margin-bottom: 0;
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
}
   
</style>