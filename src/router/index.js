import Vue from 'vue'
import Router from 'vue-router'
import Home from '../component/Home'
import Login from '../component/Login'
import UserPage from '../component/UserPage'
import UpdateAdds from '../component/UpdateAdds'
import DetailAdds from '../component/DetailAdds'
import CreateAdd from '../component/CreateAdd'
import nav from './auth'

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes :[
        {
        path : '/',
        name : 'HomeRoute',
        component : Home,
      
         },
        {
        path : '/login',
        name : 'LoginRoute',
        component : Login,
        beforeEnter:nav.globalNav
        },
        {
        path :'/Userpage',
        name : 'UserPage',
        component : UserPage,
        beforeEnter: nav.authNav
        },
        {
        path : '/Update/:id',
        name : 'UpdateAdds',
        component : UpdateAdds,
        beforeEnter: nav.authNav
        },
        {
        path:'/Read/:id',
        name :'DetailAdds',
        component :DetailAdds
        },
        {
        path:'/createadd',
        name : 'CreateAdd',
        component : CreateAdd,
        beforeEnter: nav.authNav
        }
    ]
})