import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Call from '@/pages/call/Index'

import Records from '@/pages/call/records/Index'
import UnFlow from '@/pages/call/records/UnFlow'
import Flow from '@/pages/call/records/Flow'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/call',
            name: 'call',
            component: Call,
            children: [{
                path: 'records',
                name: 'records',
                component: Records,
                children: [{
                    path: 'unflow',
                    name: 'unflow',
                    component: UnFlow
                }, {
                    path: 'flow',
                    name: 'flow',
                    component: Flow
                }]
            }]
        }
    ]
})