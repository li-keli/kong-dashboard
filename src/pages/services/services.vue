<template>
    <d2-container>
        <template slot="header">Services List</template>
        <d2-curd>

        </d2-curd>
    </d2-container>
</template>

<script>
import { ServicesList } from '@/api/admin.api.services'

export default {
  data () {
    return ServicesList({}).then(res => {
      // 返回数据
      console.log(res)
    })
  },
  mounted () {
    ServicesList({}).then(res => {
      // 返回数据
      console.log(res)
    })
  }
}
</script>
