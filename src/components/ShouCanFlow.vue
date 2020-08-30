<template>
    <div class="share_com">
       <PopWrap 
            :popupVisible="showPop" 
            title="收藏到"
            :showClose="false"
            @cancel="showPop=false">
            <div class="shoucan_alert">
                <ul class="list">
                    <li class="hd red" @click="action('new')">
                        <img src="../assets/images/xinjianred@2x.png" alt="" class="icon">
                        新建收藏夹
                    </li>
                     <li class="hd" @click="action('weix')">默认收藏夹</li>
                    <li class="hd" @click="action(item)" v-for="(item,i) in existList" :key="i">{{item}}</li>
                </ul>
                <button class="btn block white cancel" v-if="showPop" @click="cancel()">取消</button>
            </div>
        </PopWrap>  

        <mt-popup v-model="showConfirmPopw" position="center" class="mint-popup shoucan_confirm_pop">
            <div class="pop_wrap" v-if="showConfirmPopw && !showSuccess">
                <div class="cont">
                    <p class="title">新建收藏夹</p>
                    <mt-field placeholder="请输入收藏夹名称 " v-model="name" :attr="{maxlength: maxlength}"></mt-field>
                    <p class="numbers">{{name.length}}/{{maxlength}}</p>
                </div>
                <div class="btns flex_box justify">
                    <button class="btn grey" @click="showConfirmPopw=false">取消</button>
                    <button class="btn blue" :disabled="!name" @click="confirm()">确定</button>
                </div>
            </div>
            <div class="success_wrap" v-if="showConfirmPopw && showSuccess">
                <img src="../assets/images/tostcg@2x.png" alt="" class="img">
                <p class="tt f16">收藏成功</p>
                <p>可在我的-我的收藏菜单中找到</p>
            </div>
        </mt-popup>

    </div>
</template>

<script>
import PopWrap from '@/components/PopWrap';
export default {
    name: 'test',
    data() {
        return {
            // showPop: false
            maxlength: 12,
            showConfirmPopw: false,
            showSuccess: false,
            existList: [],
            name: ''
        }
    },
    props: {
        showPop: {
            type: Boolean,
            default: false
        },
    },
    created() {
        this.existList = ['aaaa', 'bbbbb'];
    },
    computed: {
    },
    methods: {
       action(name) {
           switch(name) {
               case 'new':
                   this.showConfirmPopw = true;
                   break;
                default :
                    this.shoucanAction(name);
                    break;
           }
       },
       cancel() {
           this.$emit('cancel')
       },
        shoucanAction(type) {
            this.showConfirmPopw = true;
            this.showSuccess = true;
           setTimeout(()=> {
               this.showSuccess = false;
               this.showConfirmPopw = false;
               this.$emit('shoucanSucc')
           }, 2000)
        },
       confirm() {
           this.showConfirmPopw = true;
           this.showSuccess = true;
           setTimeout(()=> {
               this.showSuccess = false;
                this.showConfirmPopw = false;
               this.$emit('shoucanSucc')
           }, 2000)
           
       }
    },
    components: {PopWrap}
}
</script>

<style lang="less">
    .shoucan_alert{
        padding-top: 8px;
        border-top: solid 1px #F0F0F0;
        .list li{
            height: 49px;
            line-height: 49px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            // color: #121732;
            text-align: left;
            border-bottom: solid 1px #F0F0F0;
            // &:last-child{
            //     border: 0;
            // }
            .icon{
                display: inline-block;
                vertical-align: middle;
                width: 10px;
                margin-right: 2px;
            }
        }
        .block.cancel{
            margin-bottom: -42px;
            height: 66px;
            color: #121732;
            font-size: 16px;
            border-top: solid 1px #F3F3F3;
        }
        
    }
    .shoucan_confirm_pop{
        padding: 0;
        border-radius: 12px;
        .pop_wrap{
             width: 309px;
            padding: 27px 22px;
        }
        .title{
            text-align: center;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            display: block;
            margin-bottom: 5px;
        }
        .text{
            margin-bottom: 20px;
            text-align: center;
            font-size: 16px;
            min-height: 60px;
            // font-weight: 500;
            justify-content: center;
        }
        .numbers{
            padding-bottom: 16px;
            font-size: 11px;
            padding-right: 6px;
            text-align: right;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #BBC1CA;
        }
        .cont{
            overflow: hidden;
        }
        .btns{
            .btn{
                width: 120px;
                height: 42px;
            }
        }

        .mint-cell-wrapper,.mint-cell:last-child{
            background-image: none;
        }
        .mint-cell{
            padding-left:14px;
            border-radius:28px;
            border:1px solid rgba(240,240,240,1);
            margin-bottom: 6px;
            margin-top: 24px;
            button{
                height: 31px;
            }
        }
    }

    .success_wrap{
        // width: 185px;
        height: 175px;
        padding: 32px 12px;
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

</style>