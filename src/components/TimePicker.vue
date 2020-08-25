<template>
<div>
    <div class="picker_label_info">
        <div class="lable" v-for="(item,i) in labels[allDefault]" :key="i">
            <span class="sque" :class="item.status"></span>
            <span class="text">{{item.label}}</span>
        </div>
    </div>
    <div class="timePicker">
        <span 
            v-for="(item,index) in list" 
            class="item" 
            :key="index" 
            :class="{
                disable: item.disable,
                open: item.status === 'open',
                full: item.status === 'full',
                ordered: item.status === 'ordered',
                checked: checkedList.indexOf(item.value)>-1}"
            @click="handler(item, index)">{{item.value}}</span>
    </div>
</div>
</template>

<script>

  export default({
    data(){
      return {
          hourList: [],
          secondList: ['00', '15', '30', '45'],
          list: [],
        //   checkedList: [],
          checkedIndex: [],
          checkedStatus: '',
          allTimes:[]
      }
    },
    props:{
      value:{//选中times['06:00']
        type: Array,
        default() {
            return []
        }
      },
      allDefault: {//0默认都不可点击，1默认都可以点击
        type: String,
        default: '0' 
      },
      avalibleTimes: {
        type: Array,
        default() {
            return []
        }
      },
      fullTimes: {
        type: Array,
        default() {
            return []
        }
      },
      orderedTimes: {
        type: Array,
        default() {
            return []
        }
      },
      hasOpenTimes: {
        type: Array,
        default() {
            return []
        }
      },
      mustContinue: {
          type: Boolean,
          default: true
      }
    },
    created() {
        this.getList();
        this.formateList();

        this.labels = {
            '0': [
                {
                    status: 'disable',
                    label: '未开放'
                }, {
                    status: 'normal',
                    label: '可选择'
                }, {
                    status: 'checked',
                    label: '已选择'
                }, {
                    status: 'full',
                    label: '已约满'
                }, {
                    status: 'ordered',
                    label: '已预约'
                }
            ],
            '1': [
                {
                    status: 'open',
                    label: '已开放'
                }, {
                    status: 'normal',
                    label: '可选择'
                }, {
                    status: 'checked',
                    label: '已选择'
                }, {
                    status: 'full',
                    label: '已约满'
                }
            ]
        }
    },
    computed:{
        checkedList() {
            let value = this.value
            let checkedIndex = [];
            value.forEach((item,index)=>{
                let checkedI = this.allTimes.indexOf(item)
                checkedI>-1 && checkedIndex.push(checkedI)
            } )
            this.checkedIndex = checkedIndex;
            
            console.log(999, value, checkedIndex)
            return [...value]
        }
    },

    methods: {
        getList() {
            let hourList = []
            let hour = 0
            while(hour < 24) {
                hourList.push(hour > 9 ? hour+'' : '0'+hour);
                hour++
            }
           let pre = hourList.splice(7)
           this.hourList = pre.concat(hourList);
           console.log(this.hourList)
        },
        formateList() {
            let result = [];
            let hourList = this.hourList
            let length = hourList.length

            let allTimes = []
            for(let i = 0; i < length; i++) {
                for(let j = 0; j < 4; j++) {
                    let value = `${hourList[i]}:${this.secondList[j]}`;
                    let disable = this.allDefault === '0';
                    let status = 'normal';
                    if(this.allDefault === '0' && this.avalibleTimes.indexOf(value)>-1) {
                        disable = false
                    }
                    if(this.hasOpenTimes.indexOf(value) > -1) {
                        status = 'open'
                    }
                    if(this.fullTimes.indexOf(value) > -1) {
                        status = 'full'
                    }
                    if(this.orderedTimes.indexOf(value) > -1) {
                        status = 'ordered'
                    }
                    result.push({
                        value,
                        disable,
                        status
                    })
                    this.allTimes.push(value)
                    allTimes.push(value)
                }
            }
            this.list = result;
        },
        handler(time, index) {
            let checkedList = [];
            let isAdd = true;
            // 未开放, 已约满, 已生成订单 的不能选择
            if(time.disable || time.status === 'full' || time.status === 'ordered') {
                return
            }
            if(this.mustContinue) {
                isAdd = this.isContinueTimes(index, this.checkedIndex)
            }

            // normal 和 open 不能同时选择
            if(this.checkedStatus && this.checkedStatus !== time.status) {
                isAdd = false;
                this.$emit('changeType', time.status)
            }
            if(!this.checkedStatus) {
                this.$emit('changeType', time.status)
            }
            
            if(isAdd) {
                // this.checkedIndex.push(index);
                checkedList = [...this.checkedList, time.value]
            }else {
                // this.checkedIndex = [index];
                checkedList = [time.value]
            }
            this.checkedStatus = time.status

            this.$emit('input', checkedList)
        },
        isContinueTimes(index, indexArray) {
            let array = [...indexArray, index]
            let arr = array.sort((a, b) => { return a - b;})
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            let min = arr[0];
            let max = arr[arr.length - 1];
            let c = 0;
            for (let a = min - 1; a < max; a++) {
                c += a + 1;
            }
            if (sum == c) {
                return true;
            } else {
                return false;
            }
        }
    }
})
</script>

<style lang="less" scoped>
.timePicker {
    padding: 16px 8px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
        display: inline-block;
        box-sizing:  border-box;
        margin: 4px 0;
        width:52px;
        height:32px;
        line-height: 32px;
        text-align: center;
        background:rgba(246,246,246,1);
        
        &.disable{
            color: #DFDFE0;
            border-radius:2px;      
            border:1px dashed #DFDFE0;
            background: #fff;
        }
        &.open{
            color: #2670E9;
            background:rgba(233,242,255,1);
        }
        &.full{
            color: #F8CDCB;
            background:#D56560;
        }
        &.ordered{
            color: #fff;
            background:#54BE69;
        }
        &.checked{
            color: #fff;
            background:#1B226E;
        }
    }

    
}
.picker_label_info{
    padding: 16px 8px 0;
    display: flex;
    align-items: center;
    font-size: 10px;
    color: #949BA5;
    .sque{
        display: inline-block;
        width: 10px;
        height:10px;
        &.disable{   
            border:1px dashed #DFDFE0;
            background: #fff;
        }
        &.open{
            background:rgba(233,242,255,1);
        }
        &.full{
            background:#D56560;
        }
        &.ordered{
            background:#54BE69;
        }
        &.checked{
            background:#1B226E;
        }
        &.normal{
            background:rgba(246,246,246,1);
        }
    }
    .text{
        margin-right: 16px;
    }
}

    


</style>