<template>
  <div class="radio" @click="change">
     <img src="../assets/images/gou-moren@2x.png" alt="" class="radio_icon" v-if="!value">
     <img src="../assets/images/gou@2x.png" alt="" class="radio_icon" v-if="value">
  </div>
</template>

<script>
export default({
    data(){
        return {}
    },
    props:{
        value: {// 当前选中的日期
            type: Boolean,
            default: false
        }
    },
    created() {},
    computed:{},
    methods: {
        change() {
            this.$emit('input', !this.value)
        }
    }
})
</script>

<style lang="less" scoped>
.radio{
    .radio_icon{
        display: block;
        width: 13px;
        height: 13px;
    }
}
    


</style>