// 服务列表菜单 侧边栏
export default {
  path: '/services',
  title: '服务列表',
  icon: 'home',
  children: [
    { path: '/services/routes', title: '服务下的路由' },
    { path: '/services/plugs', title: '服务下的插件' },
    { path: '/services/consumers', title: '服务下的用户' }
  ]
}

// { path: '/routes', title: '路由列表', icon: 'truck' },
// { path: '/plugs', title: '插件列表', icon: 'plug' },
// { path: '/consumers', title: '消费者', icon: 'tasks' }
