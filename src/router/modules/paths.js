// 路由列表
export default {
  path: '/paths',
  name: 'paths',
  meta: { auth: true, title: '路由列表' },
  component: () => import('@/pages/paths')
}
