<template>
    <div class="haibao_com">
       <PopWrap 
            :popupVisible="showPop" 
            title="生成海报"
            :showClose="false"
            @cancel="showPop=false">
            <div class="haibao_alert">
                <div class="card">
                    <img :src="infos.header || require('../assets/images/default1.jpg')" alt="" class="header">
                    <p class="text_dis my">我是<span class="yellow">{{infos.name || 'name'}}</span></p>
                    <p class="slogen 14">{{infos.slogen || '我在此课平台发现1节不错的课程'}}</p>
                    <img :src="infos.poster || require('../assets/images/default2.jpg')" alt="" class="poster">
                    <div class="flex_box ewm_area">
                        <p class="text_dis bd">扫描二维码加入学习</p>
                        <img :src="infos.ewm || require('../assets/images/default1.jpg')" alt="" class="ft ewm">
                    </div>
                </div>
            </div>
            <div class="flex_box btns">
                <button class="btn block white cancel bd" v-if="showPop" @click="cancel()">取消</button>
                <button class="btn block white cancel bd save" v-if="showPop" @click="save()">保存到相册</button>
            </div>
        </PopWrap>  
    </div>
</template>

<script>
import PopWrap from '@/components/PopWrap';
export default {
    name: 'test',
    data() {
        return {
            // showPop: false
        }
    },
    props: {
        infos: {
            type: Object,
            default() {
                return {}
            }
        },
        showPop: {
            type: Boolean,
            default: false
        }
    },
    created() {},
    methods: {
        save() {
            console.log(9999, 'save action')
            this.$emit('cancel')
        },
        cancel() {
           this.$emit('cancel')
       }
    },
    components: {PopWrap}
}
</script>

<style lang="less">
    .haibao_com{
        .haibao_alert{
            padding: 39px 15px 26px;
                text-align: center;
                 background-color: #1B226E;
                .header{
                    display:block;
                    margin: -19px auto 13px;
                    border-radius: 60px;
                    width: 52px;
                    height: 52px;
                    border: 2px solid #FFFFFF;
                }
                .my{
                    font-size: 13px;
                    padding-bottom: 12px;
                }
                .yellow{
                    padding-left: 5px;
                    font-size: 16px;
                }
                .card{
                    padding: 0 20px 16px;
                }
                .slogen{
                    position: relative;
                    display: inline-block;
                    margin-bottom: 19px;
                    &::before,&::after{
                        position: absolute;
                        content: ' ';
                        width: 12px;
                        height: 16px;
                        border: solid 2px #F0F0F0;
                        box-sizing: border-box;
                    }
                    &::before{
                        top: -8px;
                        left: -12px;
                        border-right: 0;
                        border-bottom: 0;
                    }
                     &::after{
                        bottom: -8px;
                        right: -12px;
                        border-left: 0;
                        border-top: 0;
                    }
                }
                .poster{
                    display: block;
                    width: 100%;
                }
                .ewm_area{
                    margin-top: 19px;
                    align-items: flex-end;
                    .ewm{
                        width: 82px;
                        height: 82px;
                        margin-left: 27px;
                    }
                }
        }
        button.block{
            
            height: 66px;
            color: #121732;
            font-size: 16px;
            
        }
        .btns{
margin-bottom: -42px;
border-top: solid 1px #F3F3F3;
.save{
    color: #D32D26;
}
        }
    }
        
    


</style>