import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addGasoleo',
    name: 'addGasoleo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TiposGasoleo/AddGasoleo')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login')
  },
 
  {
    path: '/Users',
    name: 'ListUsers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Users/ListUsers.vue')
  },

  {
    path: '/Users/add',
    name: 'Add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Users/Add.vue')
  },
  //detalle de usuarios enrutamiento de un id concreto 
  {
    path: '/Users/:id',
    name: 'Destalles del usuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Users/Details.vue')
  },

  {
    path: '/Promociones',
    name: 'Promociones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Promociones/Promociones.vue')
  },
  {
    path: '/AddPromociones',
    name: 'AddPromociones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Promociones/AddPromociones.vue')
  },
  
]


const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(`is authenticated ${store.state.isAuthenticated}`);
  console.log(`to: ${to.fullPath}`);
  console.log(`from: ${from.fullPath}`);
/*
  if(!store.state.isAuthenticated && to.fullPath !== '/login' ) {
   // router.push('/login')
   next('/login')*/
   if(!store.state.isAuthenticated && to.fullPath !== '/login' ) {
    // router.push('/login')
    next('/login')
   // next()
  }
  else{
    next()

  }
  }
)

export default router
