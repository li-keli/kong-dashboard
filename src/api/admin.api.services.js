import request from '@/plugin/axios'

/**
 * 获取已存在的服务列表
 * @param data
 * @constructor
 */
export function ServicesList (data) {
  return request({
    url: '/services',
    method: 'get',
    data
  })
}

/**
 * 新增服务
 * @param data
 * @constructor
 */
export function ServicesCreate (data) {
  return request({
    url: '/services',
    method: 'post',
    data
  })
}
