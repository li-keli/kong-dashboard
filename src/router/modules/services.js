// 服务列表
export default {
  path: '/services',
  name: 'services',
  meta: { auth: true, title: '服务列表' },
  component: () => import('@/pages/services')
}
