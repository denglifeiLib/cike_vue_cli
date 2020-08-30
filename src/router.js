import Vue from 'vue'
import Router from 'vue-router'


const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router);


export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: 'index',
        },{
            path: '/index',
            name: 'index',
            component: () => import('./views/test.vue')
        },{
            path: '/learn_center',
            // name: 'learn_center',
            component: () => import('./views/learnCenter/learn_center.vue'),
            children: [
                {
                    path: '',
                    redirect: 'center_all'
                },
                {
                    path: 'center_all',
                    name: 'center_all',
                    component: () => import('./views/learnCenter/centerAll.vue'),
                }, {
                    path: 'center_peixun',
                    name: 'center_peixun',
                    component: () => import('./views/learnCenter/centerPeixun.vue'),
                }, {
                    path: 'center_live',
                    name: 'center_live',
                    component: () => import('./views/learnCenter/centerLive.vue'),
                }
            ]
        }, {
            path: '/center_search',// 用户端-展开大家都在搜 
            name: 'center_search',
            component: () => import('./views/learnCenter/centerSearch.vue'),
        }, {
            path: '/center_filter',// 用户端-学习中心筛选
            name: 'center_filter',
            component: () => import('./views/learnCenter/centerFilter.vue'),
        }, {
            path: '/filter_result',// 用户端-学习中心筛选
            name: 'filter_result',
            component: () => import('./views/learnCenter/filterResult.vue'),
        }, {
            path: '/view_all',// 用户端-查看更多界面
            name: 'view_all',
            component: () => import('./views/learnCenter/viewAll.vue'),
        },{
            path: '/living/',
            name: 'living',
            component: () => import('./views/living/living.vue') 
        },{
            path: '/private', //私课(客户端)
            name: 'private',
            component: () => import('./views/private/private.vue')
        },{
            path: '/teacher_private', //私课(教师端)
            name: 'teacher_private',
            component: () => import('./views/private/privateTeacher.vue')
        },{
            path: '/yuyue', //用户端-立即预约详情
            name: 'yuyue',
            component: () => import('./views/private/yuyue.vue')
        },{
            path: '/yuyue_success', //用户端-预约成功
            name: 'yuyue_success',
            component: () => import('./views/private/yuyueSuccess.vue')
        }, {
            path: '/teacher', //用户端-立即预约详情
            name: 'teacher',
            component: () => import('./views/teacher/teacher.vue')
        }, {
            path: '/my', //用户端-我的
            name: 'my',
            component: () => import('./views/my/my.vue')
        }, {
            path: '/teacher_my', //教师端-我的
            name: 'teacher_my',
            component: () => import('./views/my/myTeacher.vue')
        }, {
            path: '/documents', //教师端-查看资料
            name: 'documents',
            component: () => import('./views/my/documents.vue')
        }, {
            path: '/teacher_comment', //教师端-查看评价
            name: 'teacher_comment',
            component: () => import('./views/my/commentTeacher.vue')
        }, {
            path: '/comment_make', //用户端-订单评价
            name: 'comment_make',
            component: () => import('./views/my/commentMake.vue')
        }, {
            path: '/comment_view', //用户端-查看评价
            name: 'comment_view',
            component: () => import('./views/my/commentView.vue')
        }, {
            path: '/comment_success', //用户端-查看评价
            name: 'comment_success',
            component: () => import('./views/my/commentSuccess.vue')
        }, {
            path: '/orders', //我的订单
            name: 'orders',
            component: () => import('./views/my/orders.vue')
        },{
            path: '/order_detail',//订单详情 待付款|已购买|交易完成|交易关闭
            name: 'orderDetail',
            component: () => import('./views/my/orderDetail.vue')
        },{
            path: '/teacher_view_data',// 教师端-数据查看
            name: 'teacher_view_data',
            component: () => import('./views/teacher/viewData.vue')
        },{
            path: '/living_detail',// 用户端-录播课程详情
            // name: 'living_detail',
            component: () => import('./views/detail/livingDetail.vue'),
            children: [
                {
                    path: '',
                    redirect: 'class'
                },
                {
                    path: 'class',
                    name: 'living_detail_class',
                    component: () => import('./views/detail/livingDetailClass.vue'),
                }, {
                    path: 'menue',
                    name: 'living_detail_menue',
                    component: () => import('./views/detail/livingDetailMenu.vue'),
                }, {
                    path: 'introduce',
                    name: 'living_detail_introduce',
                    component: () => import('./views/detail/livingDetailIntroduce.vue'),
                }, {
                    path: 'comment',
                    name: 'living_detail_comment',
                    component: () => import('./views/detail/livingDetailComment.vue'),
                }
            ]
        }

        
    ]
})
