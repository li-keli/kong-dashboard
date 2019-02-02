// 插件列表
export default {
  path: '/plugs',
  name: 'plugs',
  meta: { auth: true, title: '插件列表' },
  component: () => import('@/pages/plugs')
}
