<template lang="html">
    <div class="refreshMoudle" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" :style="{transform: 'translateY(' + top + 'px)'}">
      <div class="pull-refresh">
        <div class="down-tip" v-show="dropDownState==1">
          <span class="down-tip-text">下拉刷新</span>
        </div>
        <div class="up-tip" v-show="dropDownState==2">
          <span class="up-tip-text">松开刷新</span>
        </div>
        <div class="refresh-tip" v-show="dropDownState==3">加载动画</div>
      </div>
      <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    onRefresh: {
      type: Function,
      required: false
    }
  },
  data () {
    return {
      defaultOffset: 50, // 默认高度, 相应的修改.releshMoudle的margin-top和.down-tip, .up-tip, .refresh-tip的height
      top: 0,
      scrollIsToTop: 0,
      startY: 0,
      isDropDown: false, // 是否下拉
      isRefreshing: false, // 是否正在刷新
      dropDownState: 0, // 显示1:下拉刷新, 2:松开刷新, 3:刷新中……
    }
  },
  created () {
    if (document.querySelector('.down-tip')) {
      // 获取不同手机的物理像素（dpr）,以便适配rem
      this.defaultOffset = document.querySelector('.down-tip').clientHeight || this.defaultOffset
    }
  },
  methods: {
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY
    },
    touchMove (e) {
      this.scrollIsToTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop // safari 获取scrollTop用window.pageYOffset
      if (e.targetTouches[0].pageY > this.startY) { // 下拉
        this.isDropDown = true
        if (this.scrollIsToTop === 0 && !this.isRefreshing) {
          // 拉动的距离
          let diff = e.targetTouches[0].pageY - this.startY - this.scrollIsToTop
          this.top = Math.pow(diff, 0.8) + (this.dropDownState === 3 ? this.defaultOffset : 0)
          if (this.top >= this.defaultOffset) {
            this.dropDownState = 2
            e.preventDefault()
          } else {
            this.dropDownState = 1
            e.preventDefault()
          }
        }
      } else {
        this.isDropDown = false
        this.dropDownState = 0
      }
    },
    touchEnd (e) {
      if (this.isDropDown && !this.isRefreshing) {
        if (this.top >= this.defaultOffset) { // do refresh
          this.refresh()
          this.isRefreshing = true;
        } else { // cancel refresh
          this.isRefreshing = false
          this.isDropDown = false
          this.dropDownState = 0
          this.top = 0
        }
      }
    },
    refresh () {
      this.dropDownState = 3
      this.top = this.defaultOffset
      setTimeout(() => {
        this.onRefresh(this.refreshDone)
      }, 1200)
    },
    refreshDone () {
      this.isRefreshing = false;
      this.isDropDown = false;
      this.dropDownState = 0;
      this.top = 0
    }
  }
}
</script>

<style scoped>
.refreshMoudle {
  width: 100%;
  /* margin-top: -100px; */
  -webkit-overflow-scrolling: touch; /* ios5+ */
}
.pull-refresh {
  width: 100%;
  color: #999;
  transition-duration: 500ms;
}
.refreshMoudle .down-tip,
.up-tip,
.refresh-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  transform: translateY(-20px);
  /* height: 100px; */
}
.refreshMoudle .down-tip-img,
.up-tip-img,
.refresh-tip-img {
  width: 35px;
  height: 35px;
  margin-right: 5px;
}
</style>