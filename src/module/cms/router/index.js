import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';

export default [{
  path: '/',
  component: Home,
  name: '系统管理首页',
  hidden: true
  // ,
  // redirect: '/home',
  // children: [
  //   {path: 'home', component: Home}
  // ]
}/*,
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }*/
  ,{
    path: '/cms',
    component: Home,
    name: 'CMS内容管理',
    hidden: false,
    children: [{path: '/cms/page/list', name: '页面列表', component: page_list, hidden: false}]
  }
] 
