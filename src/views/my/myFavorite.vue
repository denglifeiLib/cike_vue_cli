<template>
    <div class="my_favorite_page_wrap">
        <button class="btn white hd f13 addBTn" @click="showPop=true">
            <img src="../../assets/images/xinjianred@2x.png" alt="" class="arr_icon">
           新建收藏夹
        </button>

        <ul class="my_types flex_box">
            <li class="card" v-for="(item,i) in infos" :key="i"  @click="$router.push({name: 'my_favorite_detail'})">
                <img src="../../assets/images/scj@2x.png" class="type_icon" alt="">
                <p class="tt ellipsis">{{item.name}}</p>
                <p class="text_dis ellipsis">{{item.num ? item.num+' 个内容' : '还没有收藏内容'}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import PopMonth from '@/components/PopMonth';
export default {
    name: 'test',
    data() {
        return {
            time: '2020年 - 05月',
            infos: [
                {
                    num: 1,
                    name: '默认收藏夹'
                },{
                    num: 0,
                    name: '魔动闪霸'
                },{
                    num: 1,
                    name: '等到100等到100岁再看等到100岁再看岁再看'
                }
            ]
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {show: false})
    },
    methods: {
       changeTime(time) {
           console.log(333, time)
        },
    },
    components: {PopMonth}
}
</script>

<style lang="less" scoped>
.my_favorite_page_wrap{
    padding: 8px 16px;

    .arr_icon{
        margin-right: 8px;
        width: 10px;
    }
    .addBTn{height: 34px;}


    .my_types{
        justify-content: space-between;
            flex-wrap: wrap;
        .card{
            margin-top: 14px;
            padding: 25px 16px 0;
            width: 163px;
            height: 163px;
            text-align: center;
            background: #FFFFFF;
            border-radius: 12px;
            border: 0px solid #F0F0F0;
            .type_icon{
                width: 48px;
                margin-bottom: 21px;
            }
            .tt{
                font-size: 15px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                 margin-bottom: 5px;
                color: #121732;
            }
        }
    }

}


    
</style>