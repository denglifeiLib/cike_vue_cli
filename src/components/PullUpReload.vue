<template lang="html">
  <div class="loadMoudle" @touchstart="touchStart($event)" @touchmove="touchMove($event)" :style="{transform: 'translateY(' + top + 'px)'}">
    <slot></slot>
    <footer class="load-more">
      <div class="moreData-tip" v-if="pullUpState==1">
        <span class="moreData-tip-text">上拉加载更多</span>
      </div>
      <div class="loadingMoreData-tip" v-if="pullUpState==2">加载动画。。。</div>
    </footer>
    <div class="noMoreData-tip" v-if="pullUpState==3">
      <span class="connectingLine"></span>
      <span class="noMoreData-tip-text">没有更多</span>
      <span class="connectingLine"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    parentPullUpState: {
      default: 0
    },
    onInfiniteLoad: {
      type: Function,
      require: false
    }
  },
  data () {
    return {
      distance: 100,
      top: 0,
      startY: 0,
      pullUpState: 0, // 1:上拉加载更多, 2:加载中……, 3:没有更多
      isLoading: false, // 是否正在加载
    }
  },
  methods: {
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY
    },
    touchMove (e) {
      if (e.targetTouches[0].pageY < this.startY) { // 上拉
        this.judgeScrollBarToTheEnd()
      }
    },
    // 判断滚动条是否到底
    judgeScrollBarToTheEnd () {
      let innerHeight = document.querySelector('.loadMoudle').clientHeight
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      // 变量scrollHeight是滚动条的总高度
      let scrollHeight = document.documentElement.clientHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + scrollHeight >= innerHeight) {
        if (this.pullUpState !== 3 && !this.isLoading) {
          this.pullUpState = 1
          this.infiniteLoad()
        }
      }
    },
    infiniteLoad () {
      this.pullUpState = 2
      this.isLoading = true
      setTimeout(() => {
        this.onInfiniteLoad(this.infiniteLoadDone)
      }, 800)
    },
    infiniteLoadDone () {
      this.pullUpState = 0
      this.isLoading = false
    }
  },
  watch: {
    parentPullUpState (curVal, oldVal) {
      this.pullUpState = curVal
    }
  }
}
</script>

<style scoped>
.load-more {
  width: 100%;
  color: #c0c0c0;
}
.moreData-tip,
.loadingMoreData-tip,
.noMoreData-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.connectingLine {
  display: inline-flex;
  width: 50px;
  height: 2px;
  background: #ddd;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
