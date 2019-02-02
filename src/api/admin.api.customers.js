import request from '@/plugin/axios'

/**
 * 消费者列表
 * @param data
 */
export function CustomersList (data) {
  return request({
    url: '/customers/',
    method: 'get',
    data
  })
}
