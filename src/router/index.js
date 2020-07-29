import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import About from '../components/About';
import News from '../components/News';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    alias: '/home',
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    //  Contact component will be loaded only when
    //  route matches for the first time
    //  Make sure you don't accidentally import the components at the top
    component: () => import('../components/Contact.vue'),
  },
  {
    path: '/news',

    component: News,
    props: true, //  enable props at the parent
    children: [
      {
        path: ':city',
        name: 'news-with-city', //  named route
        component: News,
        props: true, //  enable props for child
      },
      {
        path: ':city/:year',
        name: 'news-with-city-year', //  named route
        component: News,
        props: true, //  enable props for child
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
