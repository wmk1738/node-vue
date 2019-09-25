import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import CateList from './views/CateList.vue';
import CateCreate from './views/CateCreate.vue';
import GoodList from './views/GoodList.vue'
import GoodCreate from './views/GoodCreate.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                { path: 'categories/list', component: CateList },
                { path: 'categories/create', component: CateCreate },
                { path: 'categories/edit/:id', component: CateCreate, props: true },

                { path: 'goods/list', component: GoodList },
                { path: 'goods/create', component: GoodCreate },
                { path: 'goods/edit/:id', component: GoodCreate, props: true },
            ]
        },
    ]
})
