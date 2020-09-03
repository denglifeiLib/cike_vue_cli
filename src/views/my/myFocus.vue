<template>
    <div class="my_focus_page_wrap">
        <div class="teach_box flex_box"  v-for="(item,i) in focusList" :key="i" @click="$router.push({name: 'teacher_detail'})">
            <img src="../../assets/images/default1.jpg" alt="" class="header hd">
            <div class="bd">
                <p class="name f14">
                    {{item.name}} 
                    <img src="../../assets/images/my/label_deep.png" alt="" class="label" v-if="item.label ==='zisheng'">
                    <img src="../../assets/images/my/label_hot.png" alt="" class="label" v-if="item.label ==='hot'">
                    <img src="../../assets/images/my/label_special.png" alt="" class="label" v-if="item.label ==='teyao'">
                    <img src="../../assets/images/my/label_wight.png" alt="" class="label" v-if="item.label ==='daka'">
                </p>
                <p class="text_dis">{{item.title}}</p>
            </div>
            <button class="ft btn" :class="item.isFocus ? 'blue': 'plain_grey'" @click="unFocus">已关注</button>
        </div>

       <div class="empty" v-if="!focusList || focusList.length==0">
            <img src="../../assets/images/kong_guanzhu@2x.png" alt="">
            <span class="text_dis">暂无关注</span>
            <button class="btn plain_grey" @click="$router.go(-1)">返回</button>
        </div>
        
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import PopFilter from '@/components/PopFilter';
export default {
    name: 'test',
    data() {
        return {
            rangeTypeFilter: {
                rangeType: ''
            },
            focusList: [
                {
                    poster: require('../../assets/images/header.jpg'),
                    name: '鹿园',
                    title: '清华大学副教授',
                    isFocus: false,
                    label: 'zisheng'
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    name: '鹿园',
                    title: '清华大学副教授',
                    isFocus: false,
                    label: 'teyao'
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    name: '鹿园',
                    title: '清华大学副教授',
                    isFocus: false,
                    label: 'hot'
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    name: '鹿园',
                    title: '清华大学副教授',
                    isFocus: false,
                    label: 'daka'
                }, {
                    poster: require('../../assets/images/header.jpg'),
                    name: '鹿园',
                    title: '清华大学副教授',
                    isFocus: false
                }
            ],
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
        unFocus(){}
    },
    components: {PopFilter}
}
</script>

<style lang="less">
.my_focus_page_wrap{
    padding: 8px 16px;
    .teach_box{
        margin-bottom: 12px;
        padding: 16px;
        background: #fff;
        border-radius: 8px;
        .header{
            margin-right: 13px;
            width: 37px;
            height: 37px;
            border-radius: 8px;
        }
        .name{padding-bottom: 5px;}
        .label{
            height: 14px;
            margin-left: 8px;
            vertical-align: middle;
        }
        .btn.plain_grey{
            background: #fff;
            color: #949BA5;
            border-color: #e0e0e0;
        }
    }
    .empty{
        height: calc(100vh - 40px);
        padding-bottom: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 95px;
            margin-bottom: 12px;
        }
        .btn{
            margin-top: 32px;
            background: transparent;
        }
    }
}


    
</style>