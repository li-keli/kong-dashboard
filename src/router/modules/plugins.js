// 插件列表
export default {
  path: '/plugins',
  name: 'plugins',
  meta: { auth: true, title: '插件列表' },
  component: () => import('@/pages/plugins')
}
