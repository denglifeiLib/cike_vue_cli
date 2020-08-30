<template>
    <div class="share_com">
       <PopWrap 
            :popupVisible="showPop" 
            title="分享"
            :showClose="false"
            @cancel="showPop=false">
            <div class="share_alert">
                <ul class="flex_box list">
                    <li class="hd" @click="action('haibao')">
                        <img src="../assets/images/fx_schb@2x.png" alt="" class="icon">
                        <p class="text_dis">生成海报</p>
                    </li>
                     <li class="hd" @click="action('weix')">
                        <img src="../assets/images/fx_wx@2x.png" alt="" class="icon">
                        <p class="text_dis">微信</p>
                    </li>
                     <li class="hd" @click="action('pyq')">
                        <img src="../assets/images/fx_pyq@2x.png" alt="" class="icon">
                        <p class="text_dis">朋友圈</p>
                    </li>
                     <li class="hd" @click="action('lianjie')">
                        <img src="../assets/images/fx_fzlj@2x.png" alt="" class="icon">
                        <p class="text_dis">复制链接</p>
                    </li>
                </ul>
                <button class="btn block white cancel" v-if="showPop" @click="cancel()">取消</button>
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
        
        showPop: {
            type: Boolean,
            default: false
        },
    },
    created() {},
    computed: {
    },
    methods: {
       action(name) {
           this.$emit('handle', name)
       },
       cancel() {
           this.$emit('cancel')
       }
    },
    components: {PopWrap}
}
</script>

<style lang="less">
    .share_com{
        padding-top: 8px;
        justify-content: space-between;
        .list{
            padding-bottom:24px;
            flex-wrap: wrap;
            justify-content: space-between;
            text-align: center;
            .icon{
                display: block;
                width: 64px;
                margin-bottom: 8px;
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
        
    


</style>