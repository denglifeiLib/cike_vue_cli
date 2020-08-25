<template>
    <div class="page_wrap teacher_page">
        <div class="top_card flex_box" @click="$router.push('teacher')">
            <img :src="classInfo.header" alt="" class="header hd">
            <div class="bd">
                <p class="name">{{classInfo.teacher}} 老师</p>
                <p class="text_dis">已授课{{classInfo.timeLong}} | {{classInfo.studentNum}}人次</p>
                <p class="yellow">*单时段私课费用为：¥{{classInfo.price}}</p>
            </div>
            <img src="../../assets/images/icon_right_w@2x.png" alt="" class="right_arr ft">
        </div>
        <pop-calender 
            v-model="ActiveDay" 
            value="2020-08-22" 
            endDay="2020-09-22" 
            :hasValDay="['2020-08-23', '2020-08-24', '2020-08-28']">
        </pop-calender>
        <weeks 
            v-model="ActiveDay" 
            value="2020-08-22" 
            endDay="2020-09-22" 
            :hasValDay="['2020-08-23', '2020-08-24', '2020-08-28']"
            class="week_tem">
        </weeks>
        <time-picker 
            v-model="time"
            allDefault="0"
            :avalibleTimes="avalibleTimes"
            :fullTimes="fullTimes"
            :orderedTimes="orderedTimes"
            :mustContinue="true"
            class="time_picker_tem"></time-picker>

         <div class="fixed">
            <div class="bottom_tip flex_box" v-if="time.length">
                <p class="bd">您已选择了 <span class="red">{{time.length}}</span> 个时段</p>
                <p class="bd">共计：<span class="red">¥{{classInfo.price * time.length}}</span></p>
            </div>
            <div class="agreement flex_box">
                <myRadio class="hd" v-model="isAgree"></myRadio>
                <p class="bd agree">同意服务规则及协议</p>
                <button class="btn red">
                    <span>提交订单</span>
                    <img src="../../assets/images/icon_right_w@2x.png" alt="" class="right_arr ft">
                </button>
            </div>
         </div>

    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import Weeks from '@/components/Weeks';
import Calender from '@/components/Calender';
import PopCalender from '@/components/PopCalender';
import TimePicker from '@/components/TimePicker';
import Radio from '@/components/Radio';
export default {
    name: 'test',
    data() {
        return {
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

    },
    methods: {
        changeType(type) {
            this.resetTipe = type === 'open' ? 'normal' : 'open';
            console.log('changeType----', type)
        }
    },
    components: {Weeks, Calender, PopCalender, TimePicker, myRadio: Radio}
}
</script>

<style lang="less" scoped>
    .teacher_page{
        padding: 0 0 66px;
        background: #fff;
        .week_tem{
            border-bottom: solid 1px #F0F0F0;
        }
        .time_picker_tem{
            padding: 0 8px;
        }

        .top_card{
            padding: 0 35px 7px;
            height: 118px;
            background: url('static/images/ls_bg@2x.png') center no-repeat;
            background-size: 100%;
            color: #fff;
            .header{
                width:69px;
                    height:69px;
                    border-radius:8px;
                    display: block;
                    margin-right: 12px;
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
            .yellow{
                color: #FFDB66;
                font-size: 12px;
            }
        }
        .fixed{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .bottom_tip{
            height: 34px;
            padding: 4px 11px 4px 16px;
            background:rgba(255,247,224,1);
                box-shadow:0px -1px 0px 0px rgba(240,222,171,1);
                span.red{
                    color: #EE7F39;
                }
        }
        .agreement{
            padding: 0 16px;
            height: 48px;
            background: #fff;
            .btn{
                flex-shrink: 0;
            }
            .right_arr{
                margin-left: 5px;
            }
            .agree{
                color: #949BA5;
                font-size: 13px;
                text-decoration: underline;
            }
        }
        .right_arr{
                width: 6px;
            }
    }
   
</style>