<template>
    <d2-container>
        <template slot="header">Consumers 消费者列表</template>
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
import { ConsumersList } from '@/api/admin.api.consumers'

export default {
  data () {
    return {
      columns: [
        {
          title: '消费者编号',
          key: 'id',
          width: '300'
        },
        {
          title: '消费者',
          key: 'custom_id'
        },
        {
          title: '消费者的唯一用户名',
          key: 'username'
        },
        {
          title: '创建时间',
          key: 'created_at'
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
      ConsumersList({}).then(res => {
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
