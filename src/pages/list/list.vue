<template>
  <div>
    <search-table
      :data="data"
    />
  </div>
</template>

<script>
  import SearchTable from '../../components/Search/SearchTable'
  import {searchList} from '../../API'
  import {setNavigationBarTitle, showToast} from '../../API/wechat'

  export default {
    name: 'list.vue',
    components: {SearchTable},
    data () {
      return {
        data: [],
        page: 1
      }
    },
    methods: {
      getSearchList () {
        const {value, key} = this.$route.query
        let params = {}
        if (value && key) {
          params[key] = value
        }
        params.page = this.page
        searchList(params).then(response => {
          const {data} = response.data
          if (data.length > 0) {
            this.data.push(...data)
          } else {
            showToast({
              title: '没有更多数据了'
            })
          }
        })
      }
    },
    mounted () {
      const { title } = this.$route.query
      this.getSearchList()
      setNavigationBarTitle(title)
    },
    onReachBottom () {
      this.page++
      this.getSearchList()
    }
  }
</script>

<style scoped>

</style>
