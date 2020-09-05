<template>
    <div class="teacher_learn_center_page">

        <div class="top flex_box justify">
            <div class="item">
                <p class="text_dis">今日播放量</p>
                <p class="f14 bold">567</p>
            </div>
            <div class="item">
                <p class="text_dis">今日观看人次</p>
                <p class="f14 bold">567</p>
            </div>
        </div>

        <line-chart @change="change">
            <pop-filter 
                class="ft"
                v-model="saleTypeFilter" 
                :items="saleTypeItems" 
                name="选择类型"
                title="选择类型"
                slot="top"
            ></pop-filter>
        </line-chart>


       
        <div class="table_box whitebg">
            <table>
                <tr>
                    <th width="100">名称</th>
                    <th width="100">类型</th>
                    <th width="100">播放量</th>
                    <th width="100">观看人次</th>
                </tr>
                <tr v-for="(item,i) in list" :key="i" @click="$router.push({name: 'teacher_learn_center_detail'})">
                    <td>
                        <img :src="item.poster" alt="" class="poster">
                        <p class="ellipsis">{{item.name}}</p>  
                    </td>
                    <td>{{item.type}}</td>
                    <td>{{item.playNum}}</td>
                    <td>
                        {{item.viewNum}}
                        <img class="right_arr" src="../../assets/images/icon_right_g@2x.png" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import PopFilter from '@/components/PopFilter';
import LineChart from './componets/LineChart'
export default {
    name: 'test',
    data() {
        return {
            
            saleTypeFilter: {
                saleType: ''
            },
            saleTypeItems: [
                {
                    title: '',
                    name: 'saleType',
                    list: [
                        {
                            label: '全部类型',
                            value: ''
                        }, {
                            label: '电话销售',
                            value: '1'
                        }, {
                            label: '互联网销售',
                            value: '2'
                        }, {
                            label: '门店销售',
                            value: '3'
                        }, {
                            label: '大客户销售',
                            value: '4'
                        }, {
                            label: '销售心态',
                            value: '5'
                        }, {
                            label: '团队管理',
                            value: '6'
                        }
                    ]
                }
            ],
            list: [
                {
                    name: '签单-大客签单-大客户',
                    poster: require('../../assets/images/header.jpg'),
                    type: '私课',
                    playNum: 423,
                    viewNum: 3434
                }, {
                    name: '签单-大客签单-大客户',
                    poster: require('../../assets/images/header.jpg'),
                    type: '私课',
                    playNum: 423,
                    viewNum: 3434
                }, {
                    name: '签单-大客签单-大客户',
                    poster: require('../../assets/images/header.jpg'),
                    type: '私课',
                    playNum: 423,
                    viewNum: 3434
                }, {
                    name: '签单-大客签单-大客户',
                    poster: require('../../assets/images/header.jpg'),
                    type: '私课',
                    playNum: 423,
                    viewNum: 3434
                }, 
            ]
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {
            show: true
        })
    },
    methods: {
        change(type) {
            console.log('changeType----', type)
        }
    },
    components: {PopFilter, LineChart}
}
</script>

<style lang="less" >
.teacher_learn_center_page{
    padding-bottom: 80px;
    .top{
        padding: 8px 16px 12px;
        .item{
            padding-top: 13px;
            width: 164px;
            height: 67px;
            background: #FFFFFF;
            border-radius: 8px;
            text-align: center;
        }
    }

    
    


    .table_box{
        margin-bottom: 16px;
        padding: 0 16px;
    }
    table{
        width: 100%;
        font-size: 14px;
        th{
            height: 51px;
            color: #949BA5;
        }
        td{
            padding: 14px 0;
            min-height: 49px;
                border-top: solid 1px #F3F3F3;
                .right_arr{
                    width: 4px;
                    margin-left: 12px;
                    vertical-align: middle;
                    margin-top: -3px;
                }
        }
        th,td{
            text-align: center;
            &:first-child{
                text-align: left;
            }
            &:last-child{
                text-align: right;
                // font-weight: bold;
            }
        }
        .poster{
            height: 26px;
            display: block;
            margin: 0 auto;
            border-radius: 3px;
        }
        .ellipsis{
            width: 80px;
            margin: 0 auto;
            font-size: 12px;
        }
    }
}
   
</style>