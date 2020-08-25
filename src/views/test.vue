<template>
    <div>
        <h1 @click="query">点击发送请求</h1>
        <hr>

        <button class="btn red" @click="bindPhonePop=!bindPhonePop">绑定手机号</button>
        <PopBindPhone 
            :popupVisible="bindPhonePop" 
            @cancel="bindPhonePop=false"
            @skip="bindPhonePop=false"> </PopBindPhone>  

        <star v-model="score"></star>  
        <hr>

        <tabs :list="tabList" :active="activeTab" size="large" @change="changeTab"></tabs>  
        <hr>
        <tabs :list="tabList2" :active="activeTab2" @change="changeTab2"></tabs>  
        <hr>


        <weeks 
            v-model="ActiveDay" 
            value="2020-08-22" 
            endDay="2020-09-22" 
            :hasValDay="['2020-08-23', '2020-08-24', '2020-08-28']">
        </weeks>
        <hr>

        <pop-calender 
            v-model="ActiveDay" 
            value="2020-08-22" 
            endDay="2020-09-22" 
            :hasValDay="['2020-08-23', '2020-08-24', '2020-08-28']">
        </pop-calender>
        <hr>
        <p>用户端-</p>
        <time-picker 
            v-model="time1"
            allDefault="0"
            :avalibleTimes="avalibleTimes"
            :fullTimes="fullTimes"
            :orderedTimes="orderedTimes"
            :mustContinue="true"
            ></time-picker>
        <hr>
        <p>教师端-</p>
        <time-picker 
            v-model="time2"
            allDefault="1" 
            :fullTimes="fullTimes"
            :hasOpenTimes="hasOpenTimes"
            :mustContinue="false"
            @changeType="changeType"
            ></time-picker>
        <hr>

        <button class="btn plain_grey">plain_grey</button>
        <button class="btn plain_red">plain_grey</button>
        <button class="btn plain_blue h36 block">plain_grey</button>
        <button class="btn red">plain_grey</button>
        <button class="btn blue">plain_grey</button>
        <hr>

        <calender 
            v-model="ActiveDay" 
            value="2020-08-22" 
            endDay="2020-09-22" 
            :hasValDay="['2020-08-23', '2020-08-24', '2020-08-28']">
        </calender>

    </div>
</template>

<script>
import Icon from 'vue-svg-icon/Icon.vue';
import * as Axios from '@/utils/Action';
import Star from '@/components/Star';
import Weeks from '@/components/Weeks';
import Calender from '@/components/Calender';
import PopCalender from '@/components/PopCalender';
import TimePicker from '@/components/TimePicker';
import Tabs from '@/components/Tabs';
import PopBindPhone from '@/components/PopBindPhone';

export default {
    name: 'test',
    data() {
        return {
            bindPhonePop:false,
            score: 5,
            ActiveDay: '2020-08-25',
            time1: ['12:15'],
            time2: [],
            list: [],
            //可选择time
            avalibleTimes: ["09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30","13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00"],
            //已约满time
            fullTimes: ["09:45", "10:00", "10:15", "10:30", "10:45"],
            //已预约time
            orderedTimes: ["09:30", "09:45"], 
            //已开放time
            hasOpenTimes: ["09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30"],

            tabList: [
                {
                    label: '大咖',
                    number: 0
                }, {
                    label: '我的课程',
                    number: 2
                }
            ],
            activeTab: 0,
            tabList2: ['全部', '待付款', '已购买', '已完成', '待评价'],
            activeTab2: 0,

            infiniteLoadData: {
                pullUpState: 0, // 1:上拉加载更多, 2:加载中……, 3:我是有底线的
            }
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('showClasstip')
    },
    methods: {
        query(isFresh) {
            Axios.testRequire({a:'aaaaaa'}).then(res=> {
                const queryData = res.data.list;
                if(isFresh) {
                    this.list = queryData
                } else {
                    this.list = this.list.concat(queryData);
                    if (res.data.page === 5) {
                        this.infiniteLoadData.pullUpState = 3;
                    }
                }
            }).catch(err=> {
                
            });
        },

        changeTab(index) {
            this.activeTab = index
        },
        changeTab2(index) {
            this.activeTab2 = index
        },
        

        changeType(type) {
            console.log('changeType----', type)
        }
    },
    components: {Star, Weeks, Calender, PopCalender, TimePicker, Tabs, PopBindPhone}
}
</script>

<style scoped>
    h1{
        text-align: center;
        font-size: 20px;
        line-height: 1;
    }
    p{
        line-height: 2;
        text-align: center;
        font-size: 30px;
    }
</style>