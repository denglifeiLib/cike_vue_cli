<template>
  <div class="tabs flex_box" :style="{height: height+'px'}">
    <span 
        v-for="(item,index) in list" 
        class="tab-item flex_box" :key="index" 
        :style="{height: height+'px'}"
        :class="{on: active==index, large: size==='large', longBar: longBar}" 
        @click="handler(index)">
        <span class="preNum" v-if="item.preNum">{{item.preNum}}</span>
        {{item.label || item}}
        <span class="num" v-if="item.number">{{item.number}}</span>
    </span>
  </div>
</template>

<script>
  const lengths = 5;
  const starOn = 'on';
  const starHalf = 'half';
  const starOff = 'off';

  export default({
    data(){
      return {
          itemClasses: [],
      }
    },
    props:{
      list:{//分数
        type:Array,
        default() {
          return []
        }
      },
      active: {
        type:[String, Number],
        default() {
          return '0'
        }
      },
      size:{//分数
        type:String,
        default() {
          return 'small'
        }
      },
      height:{//分数
        type:String,
        default() {
          return '38'
        }
      },
      longBar:{
        type:Boolean,
        default: false
      }
    },
    created() {},
    computed:{},
    methods: {
      handler(index) {
        this.$emit('change', index)
      }
    }
  })
</script>

<style lang="less" scoped>
.tabs {
   justify-content: space-around;
    .tab-item {
        position: relative;
        padding: 11px 8px 8px;
        font-size:13px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(148,155,165,1);
        position: relative;
        &.on{
            color: #1B226E;
            &::before{
                position: absolute;
                left: 50%;
                bottom: 0;
                margin-left: -8px;
                width:16px;
                height:3px;
                background:rgba(27,34,110,1);
                border-radius:1px;
                content: ' ';
            }
            &.longBar::before{
               margin-left: -27px;
                
                width:54px;
            }
            .preNum{
              background: #D32D26;
            }
        }
        &.large{
            font-size: 15px;
        }
        .preNum{
          margin-right: 5px;
          padding: 3px 2px;
          min-width: 21px;
          display: inline-block;
          text-align: center;
          line-height: 1;
          font-size:12px;
          color:rgba(255,255,255,1);
          background:rgba(191,195,208,1);
          border-radius:2px;
        }
        .num{
            position: absolute;
            top: 0;
            right: -2px;
            width:13px;
            height:13px;
            color: #fff;
            font-size:10px;
            line-height: 13px;
            text-align: center;
            border-radius: 13px;
            background:rgba(211,45,38,1);
        }
    }

}
    


</style>