<template>
  <div class="star">
    <span 
      v-for="(item,index) in itemClasslass" 
      class="star-item" 
      :key="index" 
      :class="[item, {small: size==='small'}]" 
      @click="handler(index+1)"></span>
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
    computed:{
      itemClasslass(){//星星的数组
        let result = [];
        let score = Math.floor(this.value * 2) / 2; //例如：把分数处理成在4.5以上及4.5就变成向上取整5，在4.5以下就变成4.5
        //是否需要半星
        let starhalf = score%1 != 0 ? true : false ;
        //几颗全星
        let fullstar = Math.floor(score);
        for(var i=0 ; i<fullstar;i++){//放全星
            result.push(starOn);
        }
        if(starhalf){//放半星
            result.push(starHalf)
        }
        if(result.length < lengths){//如果没有满到五个星就用灰色的星星补齐9
            var offstar = lengths - result.length;
            for(var i=0;i<offstar;i++){
                result.push(starOff);
            }
        };
        return result;
      },
    },
    methods: {
      handler(score) {
        console.log(99, score)
        this.$emit('input', score)
      }
    }
  })
</script>

<style lang="less" scoped>
.star {
    display: inline-block;
    .star-item {
        display: inline-block;
        background-repeat: no-repeat;
        width: 31px;
        height: 30px;
        margin-right:10px;
        background-size: 100%;
        &:last-child{margin-right: 0;}
        &.on{
            background-image: url("static/images/xin_s@2x.png");
        }
        &.half{
            background-image: url("static/images/xin_s@2x.png");
        }
        &.off {
            background-image: url("static/images/xin_n@2x.png");
        }  

        &.small {
          width: 15px;
          height: 15px;
          margin-right:3px;
        }
    }

    

}
    


</style>