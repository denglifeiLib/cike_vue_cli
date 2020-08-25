<template>
    <div class="page_wrap private_teacher_page">
        <div class="top_tip flex_box">
            <p class="bd">单节私课时长15min，请合理安排授课时间！</p>
            <button class="btn white ft">我的私课</button>
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
            allDefault="1"
            :fullTimes="fullTimes"
            :hasOpenTimes="hasOpenTimes"
            :mustContinue="false"
            @changeType="changeType"
            class="time_picker_tem"></time-picker>

         <div class="bottom_tip flex_box" v-if="time.length">
            <p class="bd">您已选择了 <span class="red">{{time.length}}</span> 个时段</p>
            <button class="btn blue ft" v-if="resetTipe==='open'">设为开放</button>
            <button class="btn red ft" v-if="resetTipe==='normal'">设为不开放</button>
        </div>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import Weeks from '@/components/Weeks';
import PopCalender from '@/components/PopCalender';
import TimePicker from '@/components/TimePicker';
export default {
    name: 'test',
    data() {
        return {
            ActiveDay: '2020-08-25',
            time: [],
            resetTipe: '',
            //已约满time
            fullTimes: ["09:45", "10:00", "10:15", "10:30", "10:45"],
            //已开放time
            hasOpenTimes: ["09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30"],
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {
            show: true,
            active: 4
        })

    },
    methods: {
        changeType(type) {
            this.resetTipe = type === 'open' ? 'normal' : 'open';
            console.log('changeType----', type)
        }
    },
    components: {Weeks, PopCalender, TimePicker}
}
</script>

<style lang="less" scoped>
    .private_teacher_page{
        padding: 0 0 50px;
        background: #fff;
        .week_tem{
            border-bottom: solid 1px #F0F0F0;
        }
        .time_picker_tem{
            padding: 0 8px;
        }
    }
   .top_tip{
       padding:8px 16px;
       color: #B6BAE9;
       font-size: 12px;
       background: #1B226E;
       .bd{padding-left: 0;}
   }
   .bottom_tip{
       position: fixed;
       left: 0;
       right: 0;
       bottom: 56px;
       padding: 4px 11px 4px 16px;
       background:rgba(255,247,224,1);
        box-shadow:0px -1px 0px 0px rgba(240,222,171,1);
        span.red{
            color: #EE7F39;
        }
   }
</style>