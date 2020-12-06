import Home from './components/Home';
import Auth from './components/Auth';
import ArticleList from './components/ArticleList';

export const routes = [
  {
    path: '/home',
    children: [
      {
        path: 'my-feed',
        name: 'my-feed',
        component: ArticleList
      },
      {
        path: 'global-feed',
        name: 'global-feed',
        component: ArticleList
      },
      {
        path: '/',
        redirect: 'global-feed'
      }
    ],
    component: Home
  },
  {
    path: '/login',
    component: Auth
  },
  {
    path: '/register',
    component: Auth
  },
  {
    path: '',
    redirect: '/home'
  }
];
