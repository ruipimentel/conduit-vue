import Home from './components/Home';
import Auth from './components/Auth';

export const routes = [
  {
    path: '/home',
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
