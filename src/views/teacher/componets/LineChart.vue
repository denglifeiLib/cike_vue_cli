<template>
    <div class="line_chart_area">
      <div class="flex_box tt1 whitebg">
            <p class="hd f16 bold">播放趋势</p>
            <div class="bd">
                <span class="text_dis"><em></em>播放量</span>
                <span class="text_dis"><em class="blue"></em>观看人次</span>
            </div>
            <slot name="top"></slot>
        </div>

        <div class="line_area whitebg" id="echarts"></div>

        <div class="flex_box choose_box justify whitebg">
            <button class="btn" :class="[duration==='7D'?'blue':'plain_grey']" @click="duration='7D'">7天</button>
            <button class="btn" :class="[duration==='30D'?'blue':'plain_grey']" @click="duration='30D'">30天</button>
            <button class="btn" :class="[duration==='other'?'blue':'plain_grey']" @click="duration='other'">其他2020-08-01～2020-08-30</button>
        </div>
    </div>
</template>

<script>
  import echarts from 'echarts';
  export default({
    data(){
      return {
        duration: '7D',
      }
    },
    props:{
      value:{//分数
        type:[Number, String],
        default() {
          return 0
        }
      },
      size: {
        type: String,
        default: 'normal'
      }
    },
    created() {},
    mounted() {
        this.initEchart([
          [1, 100, 483, 650, 300, 800, 1000],
          [100, 200, 103, 800, 450, 260,60]
        ])
    },
    watch: {
      duration(val) {
        this.$emit('change', val)
      }
    },
    methods: {
        initEchart(data) {
          let option = {
              // color: ['#3398DB'],
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {   
                      type: 'shadow'
                  }
              },
              grid: {
                top:'16px',
                  left: '16px',
                  right:'16px',
                  bottom: '16px',
                  containLabel: true
              },
              xAxis: [
                  {
                      type: 'category',
                      data:['','','','','',''],
                      axisLine: {
                        show: true,
                        lineStyle: {
                          color: '#8C8C8C'
                        }
                      },
                      axisTick:{
                        show: true,
                      },
                      axisLabel:{
                        show: false
                      },
                      splitLine: {
                        show: false
                      }
                  }
              ],
              yAxis: [
                  {
                      type: 'value',
                      axisLine: {
                        show: false
                      },
                      axisTick:{
                        show: false
                      },
                      axisLabel:{
                        color: '#949BA5'
                      },
                      splitLine: {
                        lineStyle: {
                          color: '#F0F0F0'
                        }
                      }
                  }
              ],
              series: [
                  {
                      name: '播放量',
                      type: 'line',
                      smooth: true,
                      lineStyle: {
                        color: '#EC746F'
                      },
                      data: data[0]
                  }, {
                      name: '观看人次',
                      type: 'line',
                      smooth: true,
                      lineStyle: {
                        color: '#5B66D4'
                      },
                      data:data[1]
                  }
              ]
          }

          this.echarts = echarts.init(document.getElementById('echarts'));
          this.echarts.setOption(option)
        }
    }
  })
</script>

<style lang="less">
.line_chart_area{
    .tt1{
        padding: 18px 16px;
        >.hd{padding-right: 16px;}
        >.bd span{padding-right: 10px;}
        em{
            display: inline-block;
            width: 6px;
            height: 6px;
            margin-right: 5px;
            border-radius: 6px;
            background: #EC746F;
            &.blue{
                background: #5B66D4;
            }
        }
        .filter_com .white{
            border-color: #E9E9E9;
        }
    }

    .line_area{
        height: 160px;
    }

    .choose_box{
        padding: 24px 16px;
    }
}
</style>