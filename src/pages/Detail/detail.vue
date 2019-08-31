<template>
  <div>
    <detail-book
      :book="book"
    />
  </div>
</template>

<script>
  import DetailBook from '../../components/Detail/DetailBook'
  import {getStorageSync} from '../../API/wechat'
  import {detailBook} from '../../API'

  export default {
    name: 'detail.vue',
    components: {DetailBook},
    data () {
      return {
        book: {}
      }
    },
    mounted () {
      const openId = getStorageSync('openId')
      const {fileName} = this.$route.query
      console.log(openId, fileName)
      detailBook({openId, fileName}).then(response => {
        this.book = response.data.data
      })
    }
  }
</script>

<style scoped>

</style>
