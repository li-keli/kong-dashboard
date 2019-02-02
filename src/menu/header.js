// 服务插件
import serviceAside from './modules/services-aside'
import routerAside from './modules/routes-aside'

export const menuAside = [
  serviceAside,
  routerAside
]

export const menuHeader = [
  {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
  { path: '/services', title: '服务', icon: 'tasks' },
  { path: '/routes', title: '路由', icon: 'truck' },
  { path: '/plugs', title: '插件', icon: 'plug' },
  { path: '/customers', title: '消费者', icon: 'puzzle-piece' }
]
