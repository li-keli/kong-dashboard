import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/services',
  name: 'services',
  meta,
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      component: () => import('@/pages/services'),
      meta: {
        ...meta,
        title: '示例首页'
      }
    }])('services')
}
