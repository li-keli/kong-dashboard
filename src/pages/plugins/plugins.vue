<template>
    <d2-container>
        <template slot="header">Plugs 插件列表</template>
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
import { ServicesList } from '@/api/admin.api.plugins'

export default {
  data () {
    return {
      columns: [
        {
          title: '插件编号',
          key: 'id'
        },
        {
          title: '所属服务',
          key: 'service_id'
        },
        {
          title: '上游主机',
          key: 'route_id'
        },
        {
          title: '上游端口',
          key: 'consumer_id'
        },
        {
          title: '是否启动',
          key: 'enabled'
        },
        {
          title: '插件配置',
          key: 'config'
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
