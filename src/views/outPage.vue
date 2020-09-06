<template>
    <div class="out_page">
        <iframe src="https://www.baidu.com/" frameborder="0"></iframe>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {}
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('tabbar', {
            show: false
        })

    },
    methods: {
       
    },
    components: {}
}
</script>

<style lang="less" scoped>
    .out_page{
        iframe{
            width: 100vw;
            height: 100vh;
        }
    }
</style>