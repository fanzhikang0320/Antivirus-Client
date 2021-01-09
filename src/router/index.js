import Vue from 'vue'
import Router from 'vue-router'
// import Default from '@/layouts/default.vue'
import Home from '@/pages/Index.vue'
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
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: (resolve) => {
         
          require(['@/pages/About.vue'],component => {
            resolve(component);
          })
        }
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('@/pages/Article.vue'),
        children: [
          {
            path: '',
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
    // linkExactActiveClass: 'active',
    mode: 'history',
    routes
});

export default router; 