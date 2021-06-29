import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Splash from '@/components/common/Splash'
import Home from '@/components/common/Home'

//user
import Login from '@/components/user/Login'
import SignUp from '@/components/user/SignUp'


//tour
import Lodgemnt from '@/components/tour/category/Lodgment'
import CategoryCommon from '@/components/tour/category/CategoryCommon' 

export default new Router({
    mode:'history',
    scrollBehavior(){
        return {x:0,y:0}
    },
    routes:[
        {
            path:'/',
            name:'Splash',
            component:Splash
        },
        {
            path:'/home',
            name:'Home',
            component:Home
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/signUp',
            name:'SignUp',
            component:SignUp
        },
        {
            path:'/lodgment',
            name:'Lodgment',
            component:Lodgemnt
        },
        {
            path:'/categoryCommon',
            name:'CategoryCommon',
            component:CategoryCommon
        }
    ]
})