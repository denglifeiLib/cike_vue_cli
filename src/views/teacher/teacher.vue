<template>
    <div class="page_wrap teacher_page">
        <div class="top_card flex_box">
            <img :src="classInfo.header" alt="" class="header hd">
            <div class="bd">
                <p class="name">{{classInfo.teacher}} 老师</p>
                <p class="text_dis">已授课{{classInfo.timeLong}} | {{classInfo.studentNum}}人次</p>
            </div>
        </div>
        
        <div class="main">
            <div class="flex_box list_tt">
                <img src="../../assets/images/icon_lsjs@2x.png" alt=""/>
                <span>老师介绍</span>
            </div>
            <p class="text">政制般低难风则单至米长手在速质式消头并治飞速一适六革任流进没但质它水高色才育看回太府律新难省。周长维么强转们北题构形路酸许农和基机满热会金识开深可按分西事思利。</p>
            <img src="../../assets/images/candelete.jpg" alt="" class="img">
            <p class="text">政制般低难风则单至米长手在速质式消头并治飞速一适六革任流进没但质它水高色才育看回太府律新难省。周长维么强转们北题构形路酸许农和基机满热会金识开深可按分西事思利。</p>
            <img src="../../assets/images/candelete.jpg" alt="" class="img">
            <p class="text">政制般低难风则单至米长手在速质式消头并治飞速一适六革任流进没但质它水高色才育看回太府律新难省。周长维么强转们北题构形路酸许农和基机满热会金识开深可按分西事思利。</p>
            <img src="../../assets/images/candelete.jpg" alt="" class="img">
        </div>

         <div class="fixed bottom_fixed flex_box">
            <button class="btn red" @click="showBindPhonePop=true">立即预约</button>
        </div>
        
        <PopBindPhone 
            :popupVisible="showBindPhonePop" 
            :form='form'
            @cancel="showBindPhonePop=false"
            @skip="showBindPhonePop=false"> </PopBindPhone>  
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import Weeks from '@/components/Weeks';
import Calender from '@/components/Calender';
import PopCalender from '@/components/PopCalender';
import TimePicker from '@/components/TimePicker';
import Radio from '@/components/Radio';
import PopBindPhone from '@/components/PopBindPhone';
export default {
    name: 'test',
    data() {
        return {
            showBindPhonePop: false,
            form: {
                phone: '',
                code: ''
            },
            ActiveDay: '2020-08-25',
            time: [],
            resetTipe: '',
            //可选择time
            avalibleTimes: ["09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30","13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00"],
            //已约满time
            fullTimes: ["09:45", "10:00", "10:15", "10:30", "10:45"],
            //已预约time
            orderedTimes: ["09:30", "09:45"], 
            classInfo: {
                teacher: '汪涛',
                header: require('../../assets/images/header.jpg'),
                introduce: '有功无过是短暂的，无功有过是行不通的，有功有过是最好的',
                timeLong: '20小时',
                studentNum: '2340',
                isFull: true,
                isNew: true,
                price: 100.00
            },
            isAgree: false
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {
            show: false
        })
    },
    methods: {
        changeType(type) {
            this.resetTipe = type === 'open' ? 'normal' : 'open';
            console.log('changeType----', type)
        }
    },
    components: {Weeks, Calender, PopCalender, TimePicker, myRadio: Radio, PopBindPhone}
}
</script>

<style lang="less" scoped>
    .teacher_page{
        padding: 0 0 66px;
        background: #fff;

        .top_card{
            padding: 24px 24px 42px;
            height: 113px;
            background: #1B226E url('static/images/ls_bg@2x.png') center no-repeat;
            background-size: 100%;
            color: #fff;
            .header{
                width:48px;
                height:48px;
                border-radius:8px;
                display: block;
                margin-right: 12px;
                margin-left: 16px;
            }
            .name{
                padding-bottom: 4px;
                font-size:15px;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
            }
            .text_dis{
                color: #B6BAE9;
                padding-bottom: 6px;
            }
        }

        .main{
            position: relative;
            margin-top: -22px;
            padding: 22px 24px 0;
            border-radius:12px 12px 0px 0px;
            z-index: 55;
            overflow: hidden;
            background: #fff;
            .list_tt{
                margin-bottom: 15px;
                font-size:16px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(18,23,50,1);
                img{
                    width: 18px;
                    height: 18px;
                    margin-right: 12px;
                    vertical-align: middle;
                }
            }
            .text{
                margin-bottom: 24px;
                font-size:15px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                line-height:26px;
                color:rgba(88,91,96,1);
            }
            .img{
                margin-bottom: 24px;
                max-width: 100%;
                border-radius: 8px;
            }
        }

        .bottom_fixed{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            height: 60px;
            justify-content: center;
            z-index: 88;
            background: #fff;
            box-shadow:0px -1px 0px 0px rgba(228,228,228,1);
            button{
                width:177px;
                height:42px;
            }
        }
    }
   
</style>