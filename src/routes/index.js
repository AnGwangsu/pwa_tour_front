import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Splash from '@/components/common/Splash'
import Home from '@/components/common/Home'

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
        }
    ]
})