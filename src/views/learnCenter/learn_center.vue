<template>
    <div class="learn_center_page">
        <div class="main">
            <div class="flex_box">
                <div class="bd" @click="$router.push({name: 'center_search'})">
                    <search v-model="search" class="bd"></Search>
                </div>
                <img src="../../assets/images/cike/btnshaixuan@2x.png" alt="" class="ft shaixuanBtn" @click="$router.push({name: 'center_filter'})">
            </div>
            <div class="flex_box justify tabs_box">
                <tabs :list="tabList" :active="activeTab" @change="changeTab" class="bd"></tabs> 
                <img src="../../assets/images/btn_gdtab@2x.png" alt="" class="saixuan" @click="showPindaoPop=true">
            </div>
            <router-view></router-view>
          
        </div>
        
        <PopWrap 
            :popupVisible="showPindaoPop" 
            title="选择频道"
            :showClose="false"
            @cancel="showPop=false">
            <div class="shaixuan_alert">
                <div class="item">
                    <div class="flex_box btns">
                        <button 
                            v-for="(btn,j) in popPindaouList" 
                            :key="j" 
                            :class="['btn', tabList[activeTab]===btn?'blue':'grey']" 
                            @click="showPindaoPop=false;changeTab(tabList.indexOf(btn))">{{btn}}</button>
                    </div>
                </div>
                <button class="btn block white" @click="showPindaoPop=false">取消</button>
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
            showLeimuPop: false,
            showPindaoPop: false,
            popType: '', // leimu pindao
            popPindaouList: ['推荐', '内勤培训', '外勤培训', '触客培训', '直播'],
            popLeimuList: [
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
                    this.$router.replace('class');
                    break;
                case 1:
                    this.$router.replace('menue');
                    break;
                case 2:
                    this.$router.replace('introduce');
                    break;
                case 3:
                    this.$router.replace('comment');
                    break;
            }
        },
        choosePindao(item, j) {

            // let popList = this.popType === 'leimu' ? this.popLeimuList : this.popPindaouList;
            // let newVal = {
            //     title: item.title,
            //     list: list.map((type,index)=> {
            //         if(index=== j) {
            //             type.checked = true;
            //             this.popType === 'leimu' && (this.activeTab = this.tabList.indexOf(list[j].label))
            //         } else {
            //             type.checked = false
            //         }
            //         return type
            //     })
            // }
            // popList.splice(i, 1, newVal)
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