<template>
    <div class="my_path_page_wrap">
        <pop-month v-model="time" @input="changeTime"></pop-month>
        <div class="card">
            <div class="model" v-for="(item,i) in infos" :key="i">
                <p class="time">{{item.time}}</p>
                <p class="ellipsis row" v-for="(list,j) in item.list" :key="j">{{list.content}}</p>
            </div>
        </div>
       <div class="empty" v-if="!infos || infos.length==0">
            <img src="../../assets/images/kong_zuji@2x.png" alt="">
            <span class="text_dis">暂无足迹</span>
            <button class="btn plain_grey" @click="$router.go(-1)">返回</button>
        </div>
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
                    time: '2020-08-20',
                    list: [
                        {
                            content: '观看直播回放「3小时观看直播回放「3小时带你通关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播真经',
                            id: 1
                        }, {
                            content: '观看直播险真经带你通关保险真经',
                            id: 1
                        },{
                            content: '通关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播回放经带你通关保险真经',
                            id: 1
                        }
                    ]
                }, {
                    time: '2020-08-20',
                    list: [
                        {
                            content: '观看直播回放「3小时观看直播回放「3小时带你通关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播真经',
                            id: 1
                        }, {
                            content: '观看直播险真经带你通关保险真经',
                            id: 1
                        },{
                            content: '通关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播回放经带你通关保险真经',
                            id: 1
                        }
                    ]
                }, {
                    time: '2020-08-20',
                    list: [
                        {
                            content: '观看直播回放「3小时观看直播回放「3小时带你通关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播真经',
                            id: 1
                        }, {
                            content: '观看直播险真经带你通关保险真经',
                            id: 1
                        },{
                            content: '通关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播回放经带你通关保险真经',
                            id: 1
                        }
                    ]
                }, {
                    time: '2020-08-20',
                    list: [
                        {
                            content: '观看直播回放「3小时观看直播回放「3小时带你通关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播真经',
                            id: 1
                        }, {
                            content: '观看直播险真经带你通关保险真经',
                            id: 1
                        },{
                            content: '通关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播关保险真经带你通关保险真经',
                            id: 1
                        }, {
                            content: '观看直播回放经带你通关保险真经',
                            id: 1
                        }
                    ]
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
.my_path_page_wrap{
    padding: 8px 16px;

    .card{
        margin-top: 14px;
        padding: 23px 16px;
        height: calc(100vh - 96px);
        overflow-y: scroll;
        .model{
            padding-bottom: 20px;
            border-left: solid 2px #F5F5F5;
            .time{
                position: relative;
                margin-top: -7px;
                 margin-bottom: 12px;
                padding-left: 19px;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #949BA5;
                &::before{
                    position: absolute;
                    left: -5px;top: 5px;
                    width: 3px;
                    height: 3px;
                    content: ' ';
                    border: solid 3px #D32D26;
                    border-radius: 10px;
                }
            }
            .row{
                padding-bottom: 12px;
                padding-left: 28px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #121732;
            }
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