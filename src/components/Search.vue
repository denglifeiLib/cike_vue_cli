<template>
  <div class="search flex_box" :class="{focus: focus}"  @click="focusHandle">
      <img src="../assets/images/ssicon@2x.png" alt="" class="icon hd">
      <input placeholder="搜索" type="text" class="bd" ref="input" @blur="focus=false">
  </div>
</template>

<script>
export default({
    data(){
        return {
            focus: false
        }
    },
    props:{
        value: {// 当前选中的日期
            type: String,
            default: '',
            
        }
    },
    created() {},
    computed:{},
    methods: {
        change() {
            this.$emit('input', this.value)
        },
        focusHandle() {
            this.focus=true;
            this.$refs.input.focus()
        }
    }
})
</script>

<style lang="less">
.search{
    padding: 0 16px;
    height: 32px;
    background: #fff;
    border-radius: 16px;
    border: 1px solid #E6E6E6;
    justify-content: center;
    .icon{
        height: 14px;
    }
    input.bd{
        width: 50px;
        border: 0;
        outline: 0;
    }
    &.focus input.bd{
       width: 100%;
    }
}
    


</style>