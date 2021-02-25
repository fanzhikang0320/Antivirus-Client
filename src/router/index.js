import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Default = (resolve) => {
  require(['@/layouts/default.vue'],component => {
    resolve(component);
  })

}



const routerPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)

}

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/Index.vue')
      },
      {
        path: 'new_index',
        name: 'newHome',
        component: () => import('@/pages/NewIndex.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/pages/About.vue')
      },
      {
        path: 'article',
        name: 'article',

        component: () => import('@/pages/Article.vue'),
        redirect: '/article/index',
        children: [
          {
            path: 'index',
            name: 'thumbnail',
            component: () => import('@/pages/Thumbnail.vue')
          },
          {
            path: 'detail',
            name: 'detail',
            component: () => import('@/pages/Detail.vue')
          }
        ]
      },
      {
        path: 'comparison',
        name: 'comparison',
        component: () => import('@/pages/Comparison.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/pages/Contact.vue')
      },
      {
        path: 'privacy',
        name: 'privacy',
        component: () => import('@/pages/Privacy.vue')
      },
      {
        path: 'review',
        name: 'review',
        component: () => import('@/pages/Review.vue')
      }
    ]
  },
  
  {
    path: '*',
    name: 'error',
    component: () => import('@/layouts/error.vue')
  }
];



const router = new Router({
    linkActiveClass: 'active',
    mode: 'history',
    scrollBehavior: () => {
      return { x: 0, y: 0 }
    },
    routes
});

export default router; 