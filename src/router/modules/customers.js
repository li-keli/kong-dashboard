// 消费者列表
export default {
  path: '/customers',
  name: 'customers',
  meta: { auth: true, title: '消费者列表' },
  component: () => import('@/pages/customers')
}
