import Vue from 'vue'
import Router from 'vue-router'
import Home from '../component/Home'
import Login from '../component/Login'
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
   
         }
    ]
})