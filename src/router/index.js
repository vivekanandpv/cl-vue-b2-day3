import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
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
    component: Contact,
  },
  {
    path: '/news',
    component: News,
    children: [
      //  Child routes are relative to their parent (/news is assumed)
      {
        path: ':city',
        component: News,
      },
      {
        path: ':city/:year',
        component: News,
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
