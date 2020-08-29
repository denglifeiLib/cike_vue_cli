<template>
  <div class="app">

       <div class="global_tip flex_box" v-if="showTip">
           <img src="static/images/tz@2x.png" alt="" class="tip_icon">
           <p class="bd">  
               <span>您购买的 </span> 
               <span>王涛老师 </span> 
               <span>私课将于 </span> 
               <span class="red">5分钟 </span> 
               <span>内开始 </span> 
               <span class="red">去上课>> </span> 
           </p>
           <img src="static/images/close_blue.png" alt="" class="close_icon" @click="hideClasstip()">
       </div>

        <mt-tabbar v-model="tabVal" :fixed="true" class="nav_bar" v-if="tabbar_show">
            <mt-tab-item :id="`item${i}`" v-for="(item,i) in tabs" :key="i" @click.native="changeTab(item,i)">
                <img slot="icon" :src="tabbar_active === i ? item.icon : item.slectedIcon">
                {{item.name}}
            </mt-tab-item>
        </mt-tabbar>

       <router-view 
        @tabbar="tabbar" 
        @showClasstip="showClasstip"  
        :class="['child-view', header_show ? '':'no_header_page']"/>
        
        
        
  </div>
</template>

<script>
import Icon from 'vue-svg-icon/Icon.vue';
export default {
    name: "App",
    data() {
        return {
            tabbar_show: false,
            tabbar_active: 0,
            tabVal: 'item0',

            showTip: false,
            tabs: [
                {
                    name: '此课', //学习中心
                    icon: require('./assets/images/tab_icon1_s@2x.png'),
                    slectedIcon: require('./assets/images/tab_icon1_n@2x.png'),
                    path: '/learn_center'
                }, {
                    name: '私课',
                    icon: require('./assets/images/tab_icon2_s@2x.png'),
                    slectedIcon: require('./assets/images/tab_icon2_n@2x.png'),
                    path: '/private'
                }, {
                    name: '今日保险',
                    icon: require('./assets/images/tab_icon3_s@2x.png'),
                    slectedIcon: require('./assets/images/tab_icon3_n@2x.png'),
                    path: '/living'
                }, {
                    name: '我的',
                    icon: require('./assets/images/tab_icon4_s@2x.png'),
                    slectedIcon: require('./assets/images/tab_icon4_n@2x.png'),
                    path: '/my'
                }, {
                    name: '老师私课',
                    icon: require('./assets/images/tab_icon2_s@2x.png'),
                    slectedIcon: require('./assets/images/tab_icon2_n@2x.png'),
                    path: '/teacher_private'
                }, {
                    name: '老师我的',
                    icon: require('./assets/images/tab_icon4_s@2x.png'),
                    slectedIcon: require('./assets/images/tab_icon4_n@2x.png'),
                    path: '/teacher_my'
                }
            ],

            header_show: true,
            header_title: '',
            
            right: '',
            right_callback: ()=>{},
            back: true,
            headerColor: '#fff',
            headerType: 'white',
            headerClass: '',
            backAction: ()=>{this.$router.go(-1)},
            cusHeadOpt: {},
            transitionName: ''
        }
    },
    watch: {},
    methods:{
        //是否显示底部
        tabbar(opt) {
            this.tabbar_show = opt.show;
            this.tabbar_active = opt.active;
            this.tabVal = `item${opt.active}`;
        },
        showClasstip() {
            this.showTip = true
        },
        hideClasstip() {
            this.showTip = false
        },

        changeTab(item,i) {
            this.$router.push(item.path)
        }
    },
    components: {Icon}
};
</script>
<style lang="less">
// @import './assets/css/reset.less'
.nav_bar + .child-view{
    padding-bottom: 56px;/*no*/
}
.page_wrap{
    padding: 0 16px;
    overflow: hidden;
}
.app {
    // height: 100%;
    background-image: linear-gradient(#EDEDED, #F9F9F9);
    min-height: 100vh;
    .wv-header{
        position: fixed;
        left: 0;
        right: 0;
        padding: 0 20px;
        height: 50px;
        justify-content: center;
        .wv-header-title{
            color: #000;
            font-size: 18px;
            max-width: 70%;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
        }
        &.blue,&.black{
            .wv-header-title{
                color: #fff;
               
            }
        }
        .out_back{
            display: flex;
            align-items: center;
        }
    }
    .mint-tabbar{
        background-image: none;
        background: #fff;
        border-top:solid 1px rgba(0,0,0,0.1);
    }
    .mint-tabbar > .mint-tab-item.is-selected{
        color: #1B226E;
    }
    .mint-tabbar > .mint-tab-item.is-selected{
        background: #fff;
    }
    .mint-tabbar .mint-tab-item-label{
        font-size: 11px;
    }

    .global_tip{
        padding: 7px 8px;
        background:rgba(255,247,224,1);
        border-top: solid 1px #DDDBD3;
        border-bottom: solid 1px #DDDBD3;
        font-size: 12px;
        color: #1B226E;
        .red{
            color: #D32D26;
        }
        .tip_icon{
            width: 18px;
            height: 17px;
            margin-right: 2px;
        }
        .close_icon{
            width: 9px;
            height: 9px;
        }
    }
    
}



.btn{
    display: flex;
    padding: 5px 10px;
    min-width: 68px;
    border: 0;
    align-items: center;
    justify-content: center;
    outline: none;
    font-size: 12px;
    font-weight: bold;
    background-color: #fff;
    &.plain_grey{
        border-radius: 40px;
        color:#666B73;
        border: solid 1px #BFC3D0;
    }
    &.plain_red{
        border-radius: 40px;
        color:#D32D26;
        border: solid 1px #D32D26;
    }
    &.plain_white{
        border-radius: 40px;
        color:#fff;
        border: solid 1px #fff;
        background-color: transparent;
    }
    &.plain_blue{
        border-radius: 40px;
        color:#1B226E;
        border: solid 1px #1B226E;
        background-color: #fff;
    }

    &.white{
        border-radius: 40px;
        color: #1B226E;
        background-color:#fff;
        border: solid 1px #fff;
    }
    &.red{
        border-radius: 40px;
        color: #fff;
        background-color:#D32D26;
        border: solid 1px #D32D26;
    }
    &.grey{
        border-radius: 40px;
        color: #121732;
        background-color:#F2F2F2;
        border: solid 1px #F2F2F2;
    }
    &.blue{
        border-radius: 40px;
        color: #fff;
        background-color:#1B226E;
        border: solid 1px #1B226E;
    }

    &.auto{
        width: auto;
    }
    &.block{
        width: 100%;
    }

    &.f14{
        font-size: 14px;
    }
    &.f16{
        font-size: 16px;
    }
    &.h36{
        height: 36px;
    }
    &.h42{
        height: 42px;
    }
    &.w121{
        width: 121px;
    }
    &:disabled{
        opacity: 0.2;
    }
}

.text_dis{
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(148,155,165,1);
    &.f15{
        font-size: 15px;
    }
    .red{
        color: #D32D26;
    }
}

.flex_box{
    display: flex;
    align-items: center;
    .bd{
        width: 100%;
        padding-left: 6px;
    }
    .ft,.hd{
        flex-shrink: 0;
    }
    &.justify{
        justify-content: space-between;
    }
    
}

.color_shadow{
    display: inline-block;
    position: relative;
    color: #1B226E;
    font-size: 15px;
    padding: 0 3px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    background:linear-gradient(to top, #FFF5F4 0%, #FFF5F4 25%, #fff);
    &.f16{
        font-size: 16px;
    }
    &.calender_icon .icon{
        width: 14px;
        height: 14px;
        background: url('static/images/rili_big@2x.png') center no-repeat;
        background-size: 100% 100%;
    }
}

.card{
    background:rgba(255,255,255,1);
    border-radius:12px;
    border:1px solid rgba(240,240,240,1);
}

.image_hover{
    position: relative;
    .bg{
        display: block;
    }
    .hover{
        position: absolute;
        display: block;
        &.topLeft{
            top: 0;
            left: 0;
        }
        &.rightBottom{
            right: 0;
            bottom: 0;
        }
        &.leftBottom{
            left: 0;
            bottom: 0;
        }
        &.center{
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}


.category_tt{
    height: 58px;
    .bd{
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #121732;
    }
    .ft{
        margin-left: 6px;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #949BA5;
    }
    .icon_right{
        height: 7px;
    }
    .icon_fresh{
        height: 12px;
    }
}

.score_label{
    display: flex;
    flex-wrap: nowrap;
    padding: 1px 4px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 9px 0px 4px 0px;
    font-size: 12px;
    color: #fff;
    align-items: center;
    .icon{
        width: 9px;
        margin-right: 2px;
    }
}

</style>