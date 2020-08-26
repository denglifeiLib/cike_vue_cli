<template>
    <div class="documents_page">
       <p>SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，由蚂蚁金服集团每年举办 1-2 次，包括专业分享、产品展台、Workshop 等内容。</p>
        <div class="imgs flex_box">
            <img class="ft" src="../../assets/images/header.jpg" alt="">
            <img class="ft" src="../../assets/images/header.jpg" alt="">
        </div>
        <ul class="files">
            <li v-for="(item,i) in files" :key="'file'+i" class="flex_box">
                <img src="../../assets/images/wx_pdf@2x.png" alt="" class="icon">
                <span class="text bd">{{item.name}}</span>
                <span class="ft text_dis">{{item.size}}</span>
            </li>
            <li v-for="(item,i) in voice" :key="'voice'+i" class="flex_box">
                <img src="../../assets/images/hyy@2x.png" alt="" class="icon">
                <span class="text">{{item.long}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from 'vue-svg-icon/Icon.vue';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            files: [
                {
                    name: '塑像本来就在石头.pdf',
                    size: '409K'
                }, {
                    name: '塑像本来就在石头.pdf',
                    size: '409K'
                }
            ],
            voice: [
                {
                    long: "4''"
                }
            ]
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
    .documents_page{
        padding: 16px 16px 30px;
        background-color: #fff;
        p{
            margin-bottom: 28px;
            font-size:14px;
            font-family:PingFangSC-Regular,PingFang SC;
            line-height:24px;
        }
        .imgs{
            margin-bottom: 20px;
            img{
                width:77px;
                height:77px;
                margin-right: 12px;
                border-radius:2px;
            }
        }
        .files{
            .icon{
                height: 17px;
                margin-right: 8px;
            }
            li{
                padding: 0 14px;
                margin-bottom: 11px;
                height:37px;
                background:rgba(255,255,255,1);
                border-radius:6px;
                border:1px solid rgba(226,226,226,1);
            }
            .bd{
                padding-left: 0;
            }
            .text{
                color: #141414;
                font-size: 14px;
                margin-right: 5px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>