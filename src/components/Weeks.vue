<template>
  <div class="weeks_sroll">
      <div class="week_content">
          <div class="day_box" :class="{active: value===item.value}" v-for="(item,i) in dayInfos" :key="i" @click="choose(item)">
            <div class="week">{{item.week}}</div>
            <div class="day" :class="{hasVal: item.hasVal}">{{item.date}}</div>
        </div>
      </div>
  </div>
</template>

<script>
  
import moment from 'moment';
const dateMap = {
    '0': '周日',
    '1': '周一',
    '2': '周二',
    '3': '周三',
    '4': '周四',
    '5': '周五',
    '6': '周六',
}
export default({
    data(){
        return {
            dayLength: 1,
            dayInfos: []
        }
    },
    props:{
        endDay:{ // 日期显示到哪一天
            type: String,
            default: moment().format('YYYY-MM-DD')
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
        this.dayLength = moment(this.endDay).diff(moment(), 'days');
        this.formateDate(this.dayLength);
    },
    computed:{},
    methods: {
        formateDate(dayLength) {
            this.dayInfos = [];
            for( var i = 0; i < dayLength; i++) {
                let toCalDay = moment().add(i, 'days');
                let formatedDay = moment(toCalDay).format('YYYY-MM-DD');
                this.dayInfos.push({
                    week: dateMap[toCalDay.day()+''],
                    date: toCalDay.date(),
                    value: formatedDay,
                    hasVal: this.hasValDay.indexOf(formatedDay)>-1
                })
            }
            this.dayInfos[0].week = '今日';
        },
        choose(item) {
            console.log('week_com', item.value)
            this.$emit('input', item.value)
        },
        initSroll() {
            document.querySelector('.weeks_sroll').scrollTo(0,0)
        }
    }
})
</script>

<style lang="less" scoped>
.weeks_sroll{
    width: 100%;
    padding-bottom: 15px;
    overflow-x: scroll;
    .week_content{
        display: inline-flex;
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