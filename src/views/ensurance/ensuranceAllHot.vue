<template>
    <div class="ensurance_hot_all_page">
        <img src="../../assets/images/shishiresou@2x.png" alt="" class="bg">
        <div class="card hotCard">
            <p class="text_dis ft">更新时间 2020-04-08 12:23:22</p>
            <ul class="list">
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">1</span>中美或进入新冷战？王毅表态</li>
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">2</span>特朗普长子女友金伯利演讲</li>
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">3</span>王毅会见加拿大外长</li>
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">4</span>男子1200万买房送2个车位</li>
                <li class="ellipsis" @click="$router.push({name: 'ensurance_detail'})"><span class="num">5</span>男子12男子1200万买房送2个车位00万买房送2个车位</li>
            </ul>
        </div>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            
        }
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
.ensurance_hot_all_page{
    .bg{
        width: 100%;
    }
    .hotCard{
        position: relative;
        min-height: calc(100vh - 90px);
        margin: -52px 16px 0;
        padding: 12px 16px 16px;        
        z-index: 33;
        .list{
            padding-bottom: 16px;
            li{
                line-height: 41px;
                padding: 2px 4px;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #121732;
                .num{
                    display: inline-block;
                    margin-right: 12px;
                    width: 15px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    background: #fff;
                    color: #949BA5;
                    font-weight: bold;
                    border-radius: 1px;
                }
                &:nth-child(1) .num{
                    color: #fff;
                    background: #D32D26;
                }
                &:nth-child(2) .num,&:nth-child(3) .num{
                    color: #fff;
                    background: #1B226E;
                }
            }
        }
        
    }

}
</style>