<template>
    <d2-container>
        <template slot="header">Routers 路由列表</template>
        <d2-crud
                ref="d2Crud"
                :columns="columns"
                :data="data"
                index-row
                size="mini"
                :inline="true"
                :options="options"
                :loading="loading"
                :loading-options="loadingOptions"
        />
    </d2-container>
</template>

<script>
import { ServicesList } from '@/api/admin.api.services'

export default {
  data () {
    return {
      columns: [
        {
          title: '服务编号',
          key: 'id',
          width: '300'
        },
        {
          title: '服务名称',
          key: 'name'
        },
        {
          title: '上游主机',
          key: 'host'
        },
        {
          title: '上游端口',
          key: 'port'
        },
        {
          title: '代理路径',
          key: 'path'
        },
        {
          title: '支持协议',
          key: 'protocol'
        }
      ],
      data: [],
      options: {
        border: true,
        stripe: true
      },
      loading: true,
      loadingOptions: {
        text: '拼命加载中',
        spinner: 'el-icon-loading'
      }
    }
  },
  methods: {
    fetchData () {
      ServicesList({}).then(res => {
        this.data = res['data']
        this.loading = false
      })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
