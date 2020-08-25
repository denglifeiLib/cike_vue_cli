<template>
    <div class="calender_box">
        <div class="week_box">
            <span v-for="key in dateMap" :key="key">{{key}}</span>
        </div>
        <div class="monthes_sroll">
            <div class="month_box" v-for="(item, i) in calanderInfos" :key="i">
                <div class="month">{{item.month}}</div>
                <div class="days">
                    <span 
                    class="day" 
                    @click="choose(day)"
                    :class="{
                        hasVal: day.hasVal, 
                        active: value===day.value,
                        disabledDay: day.disabledDay
                    }" 
                    v-for="(day,key) in item.infos" 
                    :key="key">{{day.date}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  
import moment from 'moment';
// const dateMap = {
//     '0': '周日',
//     '1': '周一',
//     '2': '周二',
//     '3': '周三',
//     '4': '周四',
//     '5': '周五',
//     '6': '周六',
// }
export default({
    data(){
        return {
            dateMap: {
                '30': '周日',
                '1': '周一',
                '2': '周二',
                '3': '周三',
                '4': '周四',
                '5': '周五',
                '6': '周六',
            },
            calanderInfos: [{
                month: '',
                infos: []
            }]
        }
    },
    props:{
        lastMonth:{ // 持续未来多少个月
            type: Number,
            default: 12
        },
        value: {// 当前选中的日期
            type: String,
            default: moment().format('YYYY-MM-DD')
        },
        hasValDay: {// 当前哪些天有安排
            type: Array,
            default() {
                return []
            }
        }
    },
    created() {
        this.calanderInfos = this.getCalanderInfos();
    },
    computed:{},
    methods: {
        getCalanderInfos() {
            let lastMonth = this.lastMonth;
            let monthes = this.getFutrueMonth(lastMonth);
            let calanderInfos = [];
            for(let i = 0; i < lastMonth; i++) {
                let month = monthes[i];
                let monthT = month.split('-');
                calanderInfos.push({
                    month: monthT[0]+'年'+monthT[1]+'月',
                    infos: this.formatePerMonthDate(monthT[0], monthT[1], i===0, new Date().getDate())
                });
            }
            return calanderInfos;
        },
        getFutrueMonth(lastMonth) { //未来12个月月份 ['YYYY-MM']
            let monthArr = [];
            let data=new Date();
            let year=data.getFullYear();
            data.setMonth(data.getMonth()-1)
            for (let i = 0; i < lastMonth; i++) {
                data.setMonth(data.getMonth()+1);
                monthArr.push(data.getFullYear()+"-"+(data.getMonth()+1))
            }
            return monthArr;
        },
        formatePerMonthDate(year, month, isCurMonth, curDate) { // 每个日期信息 [{date, week, value:'YYYY-MM-DD', hasVal}]
            let dayInfos = [];
            let date = new Date(year, month - 1, 1);
            while (date.getMonth() == month - 1) {
                let dateVal = date.getDate();
                let value = `${year}-${month<10 ? '0'+month : month}-${dateVal<10 ? '0'+dateVal : dateVal}`;
                dayInfos.push({
                    date: dateVal,
                    week: date.getDay(),
                    value: value,
                    hasVal: this.hasValDay.indexOf(value)>-1,
                    disabledDay: isCurMonth && (curDate && (curDate >dateVal))
                });
                date.setDate(dateVal + 1);
            }
            return this.prefixFormateDate(dayInfos);
        },
        prefixFormateDate(dayInfos) {// 每个月1号不是周日的话，日期信息数组，信息补全
            let el = {
                date: '',
                week: '',
                value: '',
                disabledDay: true,
                hasVal: false,
                noClick: true
            };
            let prefixArrayLength = dayInfos[0].week;
            let prefixArray = new Array(prefixArrayLength);
            prefixArray.fill(el);
            return prefixArray.concat(dayInfos);
        },

        choose(item) {
            if(item.noClick || item.disabledDay) {
                return;
            }
            console.log(99, item.value)
            this.$emit('input', item.value)
        }
    }
})
</script>

<style lang="less" scoped>
.calender_box{
    width: 100%;
    .week_box{
        display:flex;
        padding: 10px 0;
        span{
            display: block;
            width: calc(100% / 7);
            text-align: center;
            justify-content: space-between;
            font-size:12px;
            color:rgba(18,23,50,1);
            &:last-child,&:first-child{
                color: #D32D26;
            }
        }
    }
    .monthes_sroll{
        height: 370px;
        overflow-y: scroll;
        .month_box{
            position: relative;
            padding-top: 35px;
            .month{
                position: absolute;
                padding-left: 21px;
                height:35px;
                line-height: 35px;
                font-size:18px;
                font-weight:500;
                left: 0;
                top: 0;
                right: 0;
                color:rgba(18,23,50,1);
                background:rgba(248,248,248,1);
            }
            .days{
                display:flex;
                flex-wrap: wrap;
                .day{
                    position: relative;
                    display: block;
                    width: calc(100% / 7);
                    height: 42px;
                    line-height:42px;
                    text-align: center;
                    justify-content: space-between;
                    font-size:12px;
                    color:rgba(18,23,50,1);
                    &.hasVal{
                        &::after{
                            position: absolute;
                            width:5px;
                            height:5px;
                            top: 50%;
                            right: 50%;
                            margin-top: -10px;
                            margin-right: -10px;
                            background:rgba(211,45,38,1);
                            border-radius:2px;
                            content: ' ';
                        }
                    }
                    &.active{
                        color: #fff;
                        background:rgba(27,34,110,1);
                    }
                    &.disabledDay{
                        color: #BFC3D0;
                    }
                }
            }
        }
    }
    
    .day_box{
        width: 53px;
        display: inline-block;
        text-align: center;
        .week{
            padding-bottom: 15px;
            font-size:12px;
            color:rgba(148,155,165,1);
        }
        .day{
            position: relative;
            display: inline-flex;
            font-size:16px;
            font-weight:500;
            color:rgba(18,23,50,1);
            width:32px;
            height:32px;
            align-items: center;
            justify-content: center;
            border-radius:6px;
            &.hasVal{
                &::after{
                    position: absolute;
                    width:5px;
                    height:5px;
                    top: 3px;
                    right: 3px;
                    background:rgba(211,45,38,1);
                    border-radius:2px;
                    content: ' ';
                }
            }
        }
        &.active .day{
            color: #fff;
            background:rgba(27,34,110,1);
        }
    }
}
    


</style>