<template>
    <div class="pop_month_box">
        <button class="btn white hd block f13" @click="showPop=true">
            {{this.result}}
            <img src="../assets/images/sanjiao@2x.png" alt="" class="arr_icon">
        </button>

        <mt-popup v-model="showPop" position="bottom" class="mint-popup pop_month">
            <div class="flex_box header">
                <span class="hd" @click="showPop=false">取消</span>
                <span class="bd">选择时间</span>
                <span class="ft red" @click="confirm()">确定</span>
            </div>
            <mt-picker :values="value.split('-')" :slots="slots" @change="onValuesChange"></mt-picker>
        </mt-popup>
    </div>
</template>

<script>
import PopWrap from '@/components/PopWrap';
export default {
    name: 'test',
    data() {
        return {
            showPop: false,
            hasActive: true,
            year: '',
            month: '',
            result: '',
            slots: [
                {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                    className: 'slot3',
                    textAlign: 'center'
                }
            ]
        }
    },
    props: {
        value: {
            type: String,
            default: new Date().getFullYear()+'年 - '+(new Date().getMonth()>9?new Date().getMonth():'0'+new Date().getMonth())+'月',
        },
        startYear: {
            type: Number,
            default:  new Date().getFullYear() - 10
        },
        endYear: {
            type: Number,
            default:  new Date().getFullYear() + 10
        },
    },
    created() {
        this.result = this.value;
        this.slots[0].values = this.getYears();
    },
    computed: {},
    methods: {
       getYears() {
           let startYear = this.startYear;
           let endYear = this.endYear;
           let years = [];
           if(this.startYear > this.endYear) {
               startYear = this.endYear;
               endYear = this.startYear;
           }
           do {
                years.push(startYear+'');
                startYear+=1;
           }while(endYear>startYear)

           return  years;
       },
        onValuesChange(picker, values) {
           this.year = values[0];
           this.month = values[1];
        },
        confirm() {
            this.showPop=false;
            this.result = this.year+'年 - '+this.month+'月'
            this.$emit('input',this.year+'-'+this.month)
        }
    },
    components: {PopWrap}
}
</script>

<style lang="less">
.pop_month_box{
    .arr_icon{
        margin-left: 8px;
        width: 9px;
    }
    .btn{height: 34px;}

    .pop_month{
        width: 100%;
        background-color: #F6F6F6;
        border-radius:12px 12px 0px 0px;
        .header{
            height: 42px;
            text-align: center;
            background: #fff;
            .hd,.ft{
                width: 66px;
                
                font-size: 14px;
            }
            .bd{
                font-size: 16px;
                font-weight: bold;
            }
        }

    }
}

</style>