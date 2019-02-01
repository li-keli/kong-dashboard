import util from '@/libs/util.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state vuex state
     */
    versionShow () {
      util.log.capsule('Kong Admin API Dashboard', `v0.0.1`)
      // console.log('Github https://github.com/d2-projects/d2-admin')
      // console.log('Doc    https://doc.d2admin.fairyever.com/zh/')
    }
  }
}
