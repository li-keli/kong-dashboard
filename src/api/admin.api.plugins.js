import request from '@/plugin/axios'

/**
 * 插件列表
 * @param data
 */
export function PluginsList (data) {
  return request({
    url: '/plugins/',
    method: 'get',
    data
  })
}
