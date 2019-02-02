import request from '@/plugin/axios'

/**
 * 映射路由列表
 * @param data
 */
export function PathsList (data) {
  return request({
    url: '/routes',
    method: 'get',
    data
  })
}
