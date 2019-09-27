import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import CateList from './views/CateList.vue';
import CateCreate from './views/CateCreate.vue';
import GoodList from './views/GoodList.vue';
import GoodCreate from './views/GoodCreate.vue';
import HeroList from './views/HeroList.vue';
import HeroCreate from './views/HeroCreate.vue';
import ArticleList from './views/ArticleList.vue';
import ArticleCreate from './views/ArticleCreate.vue';
import AdList from './views/AdList.vue';
import AdCreate from './views/AdCreate.vue';
import UserList from './views/UserList.vue';
import UserCreate from './views/UserCreate.vue';
import Login from './views/Login.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                { path: '/', redirect: 'categories/list' },
                { path: 'categories/list', component: CateList },
                { path: 'categories/create', component: CateCreate },
                { path: 'categories/edit/:id', component: CateCreate, props: true },

                { path: 'goods/list', component: GoodList },
                { path: 'goods/create', component: GoodCreate },
                { path: 'goods/edit/:id', component: GoodCreate, props: true },

                { path: 'heroes/list', component: HeroList },
                { path: 'heroes/create', component: HeroCreate },
                { path: 'heroes/edit/:id', component: HeroCreate, props: true },

                { path: 'articles/list', component: ArticleList },
                { path: 'articles/create', component: ArticleCreate },
                { path: 'articles/edit/:id', component: ArticleCreate, props: true },

                { path: 'ads/list', component: AdList },
                { path: 'ads/create', component: AdCreate },
                { path: 'ads/edit/:id', component: AdCreate, props: true },

                { path: 'users/list', component: UserList },
                { path: 'users/create', component: UserCreate },
                { path: 'users/edit/:id', component: UserCreate, props: true },

            ]
        },
        { path: '/login', name: 'login', component: Login }
    ]
})
