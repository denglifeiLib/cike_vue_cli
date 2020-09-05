<template>
    <div>
        <div class="filter_com flex_box">
            <button class="btn white hd" :class="{on:hasActive}" @click="showPop=true">
                {{items.length === 1 ? (items[0].list.filter(c=>value[items[0].name]===c.value)[0]||{}).label||name : name}}
                <img src="../assets/images/sanjiao@2x.png" alt="" class="icon" v-if="!hasActive">
                <img src="../assets/images/sanjiao_r@2x.png" alt="" class="icon" v-if="hasActive">
            </button>
        </div>

        <PopWrap 
            :popupVisible="showPop" 
            :title="title"
            :showClose="false"
            @cancel="showPop=false">
            <div class="shaixuan_alert">
                <div class="item" v-for="(item,i) in items" :key="i">
                    <p class="catogry_tt" v-if="item.title">{{item.title}}</p>
                    <div class="flex_box btns">
                        <button 
                            v-for="(btn,j) in item.list" 
                            :key="j" 
                            :class="['btn', (btn.value === (value[item.name]||'')) ?'blue':'grey']" 
                            @click="saixuan(item.name, btn.value)">{{btn.label}}</button>
                    </div>
                </div>
                <button class="btn block white" v-if="showPop" @click="showPop=false">取消</button>
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
            showPop: false
        }
    },
    props: {
        value: {
            type: Object,
            default() {
                return {}
            }
        },
        title: {
            type: String,
            default: '筛选'
        },
        name: {
            type: String,
            default: '筛选'
        },
        items: {
            type: Array,
            default() {
                return []
            }
        }
    },
    created() {},
    computed: {
        hasActive() {
            return Object.keys(this.value).filter(item=>this.value[item]).length
        }
    },
    methods: {
       saixuan(name, value) {
           this.showPop = false;
           let obj = {}
           obj[name] = value
           this.$emit('input', {
               ...this.value,
               ...obj
           })
       }
    },
    components: {PopWrap}
}
</script>

<style lang="less">
    .filter_com{
        // padding-top: 8px;
        justify-content: space-between;
        .icon{
            width: 9px;
            margin-left: 6px;
        }
        .rili_icon{
            width: 12px;
            margin-right: 8px;
        }
        .btn{
            padding: 0 16px;
            height: 34px;
            width: auto;
            color: #121732;
            &.on{
                color: #D32D26;
            }
        }
    }

        .shaixuan_alert{
            .catogry_tt{
                padding-bottom: 14px;
                font-size: 16px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #121732;
            }
            .btns{
                padding-bottom: 16px;
                flex-wrap: wrap;
                justify-content: space-between;
                .btn{
                    width: 105px;
                    height: 36px;
                    margin-bottom: 16px;
                }
                &:after{
                    content: '';
                    width: 30%;
                }
            }
            .block{
                margin-bottom: -42px;
                height: 66px;
                color: #121732;
                font-size: 16px;
                border-top: solid 1px #F3F3F3;
            }
        }
        
    


</style>