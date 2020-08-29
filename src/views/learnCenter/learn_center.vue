<template>
    <div class="learn_center_page">
        <div class="main">
            <div class="flex_box">
                <search v-model="search" class="bd"></Search>
                <img src="../../assets/images/cike/btnshaixuan@2x.png" alt="" class="ft shaixuanBtn" @click="popType='leimu';showPop=true">
            </div>
            <div class="flex_box justify tabs_box">
                <tabs :list="tabList" :active="activeTab" @change="changeTab" class="bd"></tabs> 
                <img src="../../assets/images/btn_gdtab@2x.png" alt="" class="saixuan" @click="popType='pindao';showPop=true">
            </div>
            <router-view></router-view>
          
        </div>
        <PopWrap 
            :popupVisible="showPop" 
            :title="popType=='leimu'?'筛选':'选择频道'"
            @cancel="showPop=false">
            <div class="shaixuan_alert">
                <div class="item" v-for="(item,i) in popType=='leimu'?popLeimuList:popPindaouList" :key="i">
                    <p class="catogry_tt" v-if="item.title">{{item.title}}</p>
                    <div class="flex_box btns">
                        <button v-for="(btn,j) in item.list" :key="j" :class="['btn', btn.checked?'blue':'grey']" @click="choose(item, item.list, i, j)">{{btn.label}}</button>
                    </div>
                </div>
                <button class="btn block white" @click="chooseConfirm()">确定</button>
            </div>
        </PopWrap>  
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import Search from '@/components/Search';
import Swiper from './components/Swiper';
import PopWrap from '@/components/PopWrap';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            tabList: ['推荐', '内勤培训', '外勤培训', '触客培训', '直播'],
            activeTab: 0,
            search: '',
            showPop: false,
            popType: '', // leimu pindao
            popLeimuList: [
                {
                    title: '',
                    list: [
                        {
                            label: '推荐',
                            value: '',
                            checked: true
                        }, {
                            label: '内勤培训',
                            value: ''
                        }, {
                            label: '外勤培训',
                            value: ''
                        }, {
                            label: '触客培训',
                            value: ''
                        }, {
                            label: '直播',
                            value: ''
                        }
                    ]
                }
            ],
            popPindaouList: [
                {
                    title: '状态',
                    list: [
                        {
                            label: '全部',
                            value: '',
                            checked: true
                        }, {
                            label: '正在直播',
                            value: ''
                        }, {
                            label: '未开播',
                            value: ''
                        }, {
                            label: '已结束',
                            value: ''
                        }
                    ]
                }, {
                    title: '类目',
                    list: [
                        {
                            label: '全部',
                            value: '',
                            checked: true
                        }, {
                            label: '类目1',
                            value: ''
                        }, {
                            label: '类目2',
                            value: ''
                        }, {
                            label: '类目3',
                            value: ''
                        }, {
                            label: '类目4',
                            value: ''
                        }, {
                            label: '类目5',
                            value: ''
                        }
                    ]
                }, {
                    title: '价格',
                    list: [
                        {
                            label: '全部',
                            value: '',
                            checked: true
                        }, {
                            label: '免费',
                            value: ''
                        }, {
                            label: '50元以下',
                            value: ''
                        }, {
                            label: '50-100元',
                            value: ''
                        }, {
                            label: '100-200元',
                            value: ''
                        }, {
                            label: '200元以上',
                            value: ''
                        }
                    ]
                }
            ]
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('tabbar', {
            show: true,
            active: 0
        })

    },
    methods: {
       changeTab(index) {
           this.activeTab = index;
            switch (index) {
                case 0:
                    this.$router.replace('center_all');
                    break;
                case 1:
                    this.$router.replace('center_peixun');
                    break;
                case 2:
                    this.$router.replace('center_peixun');
                    break;
                case 3:
                    this.$router.replace('center_peixun');
                    break;
            }
        },
        choose(item, list, i, j) {
            let popList = this.popType === 'leimu' ? this.popLeimuList : this.popPindaouList;
            let newVal = {
                title: item.title,
                list: list.map((type,index)=> {
                    type.checked = index=== j ? true : false;
                    return type
                })
            }
            popList.splice(i, 1, newVal)
        },
        chooseConfirm() {
            this.showPop = false;
        }
    },
    components: {Tabs, Swiper, Search, PopWrap}
}
</script>

<style lang="less" scoped>
.learn_center_page{
    .main{
        padding: 4px 16px;
        .tabs_box{
            padding-bottom: 14px;
            .tabs{
                justify-content: space-between;
                padding-left: 0;
                padding-right: 25px;
            }
            .saixuan{
                width: 14px;
            }
        }
        .shaixuanBtn{
            display: block;
            width: 30px;
            height: 30px;
            margin-left: 8px;
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
}
    
</style>