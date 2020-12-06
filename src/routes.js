import Home from './components/Home';
import Auth from './components/Auth';

export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/login',
    component: Auth
  },
  {
    path: '/register',
    component: Auth
  }
];
