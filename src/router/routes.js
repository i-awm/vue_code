
export default  [
    { path:'/', redirect:'/login'},
    {
        path:'/login',
        component:() => import('@/views/login/Login.vue')
    },
    {
        path:'/home',
        component:() => import('@/views/home/Home.vue'),
        redirect:'/welcome',
        children:[
            {
                path:'/welcome',
                component:() => import('@/views/home/WelCome.vue')
            },
            {
                path:'/users',
                component:() => import('@/views/user/UserList.vue')
            },
            {
                path:'/rights',
                component:() => import('@/views/power/rights/index.vue')
            },
            {
                path:'/roles',
                component:() => import('@/views/power/roles/index.vue')
            },{
                path:'/categories',
                component:() => import('@/views/categories/Categories.vue')
            },
            {
                path:'/params',
                component:() => import('@/views/params/Params.vue')
            },
            {
                path:'/goods',
                component:() => import('@/views/goods/Goods.vue')
            },
            {
                path:'/goods/add',
                component:() => import('@/views/goods/AddGoods.vue')
            },
            {
                path:'/orders',
                component:() => import('@/views/order/Order.vue')
            },
            {
                path:'/reports',
                component:() => import('@/views/report/Report.vue')
            }
        ]
    }
]