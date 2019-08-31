<template>
  <div>
    <HomeBook
      :data="category"
      :row="category.length/2"
      :col="2"
      mode="category"
      :show-btn="false"
      :show-title="false"
    />
  </div>
</template>

<script>
  import HomeBook from '../../components/Home/HomeBook'
  import {categoryList} from '../../API'
  export default {
    name: 'categoryList',
    components: {
      HomeBook
    },
    data () {
      return {
        category: []
      }
    },
    mounted () {
      categoryList().then(response => {
        this.category = response.data.data
      })
    }
  }
</script>

<style scoped>

</style>
