// 消费者列表
export default {
  path: '/consumers',
  name: 'consumers',
  meta: { auth: true, title: '消费者列表' },
  component: () => import('@/pages/consumers')
}
