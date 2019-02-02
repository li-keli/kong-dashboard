import request from '@/plugin/axios'

/**
 * 消费者列表
 * @param data
 */
export function ConsumersList (data) {
  return request({
    url: '/consumers/',
    method: 'get',
    data
  })
}
