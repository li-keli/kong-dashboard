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
import { PathsList } from '@/api/admin.api.paths'

export default {
  data () {
    return {
      columns: [
        {
          title: '路由编号',
          key: 'id'
        },
        {
          title: '所属服务',
          key: 'service.id'
        },
        {
          title: '上游主机',
          key: 'hosts'
        },
        {
          title: '代理路径',
          key: 'paths'
        },
        {
          title: '是否删除上游的前缀',
          key: 'strip_path'
        },
        {
          title: '支持协议',
          key: 'protocols'
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
      PathsList({}).then(res => {
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
