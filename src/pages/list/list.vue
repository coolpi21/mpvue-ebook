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

  export default {
    name: 'list.vue',
    components: {SearchTable},
    data () {
      return {
        data: []
      }
    },
    methods: {
      getSearchList () {
        const {value, key} = this.$route.query
        let params = {}
        if (value && key) {
          params[key] = value
        }
        searchList(params).then(response => {
          this.data = response.data.data
        })
      }
    },
    mounted () {
      this.getSearchList()
    }
  }
</script>

<style scoped>

</style>
