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
            name: 'learn_center',
            component: () => import('./views/learnCenter/learn_center.vue')
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
        }

        
    ]
})
