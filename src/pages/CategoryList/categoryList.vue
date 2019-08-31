<template>
  <div>
    <HomeBook
      :data="category"
      :row="category.length/2"
      :col="2"
      mode="category"
      :show-btn="false"
      :show-title="false"
      @onBookClick="onCategoryClick"
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
    methods: {
      onCategoryClick (book) {
        console.log(book)
        const title = book.categoryText
        const key = 'categoryId'
        const value = book.category
        this.$router.push({
          path: '/pages/list/main',
          query: {
            value,
            key,
            title
          }
        })
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
