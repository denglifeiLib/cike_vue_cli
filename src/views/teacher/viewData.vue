<template>
    <div class="page_wrap teacher_view_data_page">
            <div class="top">
                <div class="flex_box">
                    <button class="btn white hd" @click="showPop=true">{{popList.filter(item=>item.value===choosedVal)[0]['label']}}类型<img src="../../assets/images/sanjiao@2x.png" alt="" class="icon"></button>
                    <button class="btn white hd" @click="showCalender=true">
                        <img class="ftm rili_icon" src="static/images/rili_big@2x.png" alt="">
                        {{date}}
                        <img src="../../assets/images/sanjiao@2x.png" alt="" class="icon ft">
                    </button>
                </div>
                <div class="blue_card flex_box">
                    <div class="item hd">
                        <p class="dis">收入(元)</p>
                        <p class="value">1520.26</p>
                    </div>
                    <div class="item bd">
                        <p class="dis">付款笔数</p>
                        <p class="value">120</p>
                    </div>
                </div>
            </div>
            <div class="main">
                <table>
                    <tr>
                        <th>日期</th>
                        <th>类型</th>
                        <th>付款笔数</th>
                        <th>收入（元）</th>
                    </tr>
                    <tr v-for="(item,i) in list" :key="i">
                        <td>{{item.date}}</td>
                        <td>{{item.type}}</td>
                        <td>{{item.orderNum}}</td>
                        <td class="red">{{item.income}}</td>
                    </tr>
                </table>
            </div>
            <PopWrap 
                :popupVisible="showPop" 
                title="选择类型"
                @cancel="showPop=false">
                <div class="shaixuan_alert">
                    <div class="flex_box btns">
                        <button v-for="(btn,j) in popList" :key="j" :class="['btn', btn.value === choosedVal?'blue':'grey']" @click="choose(btn, j)">{{btn.label}}</button>
                    </div>
                    <button class="btn block white" @click="showPop=false">取消</button>
                </div>
            </PopWrap>  

            <van-calendar v-model="showCalender" type="range" @confirm="onConfirm" :min-date="minDate" :max-date="maxDate" />

    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import PopWrap from '@/components/PopWrap';
import VanCalender from 'vant/lib/calendar';
import 'vant/lib/calendar/style';

export default {
    name: 'test',
    data() {
        return {
            showPop: false,
            showCalender:false,
            choosedVal: '',
            date: '2020-08-01～2020-08-30',
            minDate: new Date(2000, 0, 1),
            maxDate: new Date(2050, 0, 31),
            list: [
                {
                    date: '2020-08-01',
                    type: '私课',
                    orderNum: 4,
                    income: 10.3
                }, {
                    date: '2020-08-01',
                    type: '私课',
                    orderNum: 4,
                    income: 10.3
                }, {
                    date: '2020-08-01',
                    type: '私课',
                    orderNum: 4,
                    income: 10.3
                }
            ],
            popList: [
                {
                    label: '全部',
                    value: '',
                }, {
                    label: '私课',
                    value: '2'
                }, {
                    label: '直播',
                    value: '3'
                }, {
                    label: '课程',
                    value: '4'
                }
            ]
        }
    },
    created() {
        // this.$emit('showClasstip')
        this.$emit('tabbar', {
            show: false
        })
    },
    methods: {
        choose(item, i) {
            this.showPop = false;
            this.choosedVal = item.value;

        },
        onConfirm(date) {
            const [start, end] = date;
            this.showCalender = false;
            this.date = `${this.formatDate(start)} ~ ${this.formatDate(end)}`;
        },
        formatDate(date) {
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        },
    },
    components: {PopWrap,VanCalender}
}
</script>

<style lang="less" scoped>
    .teacher_view_data_page{
        padding: 0 0 66px;
        min-height: 100vh;
        background: #fff;
        .top{
            padding-top: 8px;
            height: 164px;
            background-image: linear-gradient(to top, #DFDFDF, #EDEDED);
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
            }
            > .flex_box{
                justify-content: space-around;
            }
            .blue_card{
                height: 105px;
                margin: 16px 16px 0;
                background: linear-gradient(135deg, #192E9C 0%, #122587 100%);
                border-radius: 12px 12px 0px 0px;
                color: #fff;
                .item{
                    &:first-child{
                        padding-left: 24px;
                        width: 200px;
                    }
                    .dis{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #B6BAE9;
                    }
                    .value{
                        margin-top: 7px;
                        font-size: 30px;
                        font-family: Helvetica-Bold, Helvetica;
                        font-weight: bold;
                        color: #FFFFFF;
                        line-height: 36px;
                    }
                }
            }
        }
        .main{
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
                height: 49px;
                 border-top: solid 1px #F3F3F3;
            }
            th,td{
                text-align: center;
                &:first-child{
                    text-align: left;
                }
                &:last-child{
                    text-align: right;
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
    }
   
</style>