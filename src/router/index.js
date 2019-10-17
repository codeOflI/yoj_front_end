/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
import ProblemSet from '../pages/Problem/ProblemSet.vue'
import ProblemView from '../pages/Problem/ProblemView.vue'
import SubmitProblem from '../pages/Problem/SubmitProblem.vue'
import AlterProblem from '../pages/Problem/AlterProblem.vue'
import AddProblem from '../pages/Problem/AddProblem.vue'

import SolutionSet from '../pages/Solution/SolutionSet.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        }, {
            path: '/problem',
            component: ProblemSet,
        }, {
            path: '/problem/view/:id',
            component: ProblemView
        }, {
            path: '/problem/submit/:id',
            component: SubmitProblem
        },{
            path: '/problem/alter/:id',
            component: AlterProblem
        },{
            path: '/problem/add',
            component: AddProblem
        },
        {
            path: '/solution',
            component: SolutionSet
        }
    ]
})