import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/Page/Home.vue'
import NewHome from '@/Page/NewHome.vue'
Vue.use(Router)

const routerPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)

}

const routes = [
  {
    path: '/',
    name: 'home',
    component: NewHome
  },
  // {
  //   path: '/newHome',
  //   name: 'newHome',
  //   component: () => import('@/Page/NewHome.vue')
  // },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/Page/About.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/Page/Article.vue'),
    redirect: '/article/thumbnail',
    children: [
      {
        path: 'thumbnail',
        name: 'thumbnail',
        component: () => import('@/components/Thumbnail.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/components/Detail.vue')
      }
    ]
  },
  {
    path: '/comparison',
    name: 'comparison',
    component: () => import('@/Page/Comparison.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/Page/Contact.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/Page/Privacy.vue')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('@/Page/Review.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('@/Page/NotFound.vue')
  }
];



const router = new Router({
    // linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'history',
    routes
});

export default router; 