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
    props: true, //  enable props at the parent
    children: [
      {
        path: ':city',
        name: 'news-with-city', //  named route
        component: News,
        props: true, //  enable props for child
      },
      {
        path: ':city/:year(20[0-2][0-9])',  //  regex here
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
