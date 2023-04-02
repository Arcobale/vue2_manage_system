import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login',
            name: '首页',
            hidden: true,
            component: () => import('@/components/Login'),
        },
        {
            path: '/login',
            name: 'login',
            hidden: true,
            //路由懒加载
            component: () => import('@/components/Login'),
            //异步组件
            // component: resolve => require(['@/components/Home'], resolve),
        },
        {
            path: '*',
            name: 'NotFound',
            hidden: true,
            component: () => import('@/components/NotFound'),
        },
        {
            path: '/home',
            name: '学生管理',
            iconClass: 'fa fa-users',
            redirect: 'home/student',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () => import('@/components/students/StudentList')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoList')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoLists')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: () => import('@/components/students/WorkList')
                },
                {
                    path: '/home/works',
                    name: '作业管理',
                    iconClass: 'fa fa-th-list',
                    component: () => import('@/components/students/WorkMent')
                },
            ]
        },
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/home/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/DataView')
                },
                {
                    path: '/home/mapview',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/MapView')
                },
                {
                    path: '/home/travel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/TravelMap')
                },
                {
                    path: '/home/score',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/ScoreMap')
                },
            ]
        },
        {
            path: '/users',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: () => import('@/components/Home'),
            children: [
                {
                    path: '/users/user',
                    name: '权限管理',
                    iconClass: 'fa fa-user',
                    component: () => import('@/components/users/User'),
                }
            ]
        },
    ],
    mode: 'history',
});

//路由导航守卫
router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('username')) {
        if (to.path != '/login') {
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;