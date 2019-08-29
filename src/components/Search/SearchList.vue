<template>
    <div class="search-list-wrapper">
      <search-item
        :icon="category.icon"
        :title="category.title"
        :sub-title="category.subTitle"
        @onClick="showList(category.title, 'category')"
      />
      <search-item
        :icon="author.icon"
        :title="author.title"
        :sub-title="author.subTitle"
        @onClick="showList(author.title, 'author')"
      />
      <search-item
        :icon="publisher.icon"
        :title="publisher.title"
        :sub-title="publisher.subTitle"
        @onClick="showList(publisher.title, 'publisher')"
      />
      <search-table
        :data="data.list"
        @onClick="onBookClick"
      />
</div>
</template>

<script>
  import SearchItem from './SearchItem'
  import SearchTable from './SearchTable'
  export default {
    name: 'SearchList',
    components: {SearchTable, SearchItem},
    props: {
      data: Object
    },
    computed: {
      category () {
        return this.data.item[0]
      },
      author () {
        return this.data.item[1]
      },
      publisher () {
        return this.data.item[2]
      }
    },
    methods: {
      showList (book, key) {
        console.log(book, key)
      },
      onBookClick (book) {
        console.log(book)
      }
    }
  }
</script>

<style scoped>

</style>
