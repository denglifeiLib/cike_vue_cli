<template>
    <div class="orders_page_wrap">
        <pop-filter v-model="rangeTypeFilter" :items="rangeTypeItems" name="选择排序" title="选择排序"></pop-filter>
       <div class="empty" v-if="!myClassList || myClassList.length==0">
            <img src="../../assets/images/kong_zuji@2x.png" alt="">
            <span class="text_dis">暂无足迹</span>
            <button class="btn plain_grey" @click="$router.go(-1)">返回</button>
        </div>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import PopFilter from '@/components/PopFilter';
export default {
    name: 'test',
    data() {
        return {
            tabList: [{
                label: '课程',
                number: 0,
                value: 0
            }, {
                label: '直播',
                number: 2,
                value: 1
            }],
            activeTab: 0,

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
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {show: false})
        this.classStatusMap = {
            '0': '待付款',
            '1': '已购买',
            '2': '已完成',
            '3': '待评价',
        }

        this.changeTab((this.$route.query||{}).activeTab || 0)
        this.myClassList = this.allClassList

        console.log(999, this.$route.query)
    },
    methods: {
       changeTab(index) {
           console.log(333, index)
            this.activeTab = index*1;
            if(index===0) {
                this.myClassList = this.allClassList
            } else {
                this.myClassList = this.allClassList.filter(item=> item.status == index-1)
            }
        },
    },
    components: {Tabs}
}
</script>

<style lang="less" scoped>
.orders_page_wrap{
    .empty{
        height: calc(100vh - 40px);
        padding-bottom: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 95px;
            margin-bottom: 12px;
        }
        .btn{
            margin-top: 32px;
            background: transparent;
        }
    }

    .guessList{
        flex-direction: column;
        min-height: calc(100vh - 90px);
        .image_hover{
            margin-right: 14px;
        }
        .item{
            width: 100%;
            padding: 12px 0;
            border-bottom: solid 1px #F0F0F0;
            &:last-child{
                border-bottom: 0;
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
}

    .main{
        margin: 12px 16px;
        padding: 6px 16px;
        overflow: hidden;

    }

    
</style>