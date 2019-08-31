<template>
  <div>
    <detail-book
      :book="book"
    />
    <detail-stat
      :readers="book.readers"
      :readerNum="book.readerNum"
      :rankNum="book.rankNum"
      :rankAvg="book.rankAvg"
    />
    <detail-rate
      :rate-value="book.rateValue"
      @onRateChange="onRateChange"
    />
  </div>
</template>

<script>
  import DetailBook from '../../components/Detail/DetailBook'
  import DetailStat from '../../components/Detail/DetailStat'
  import DetailRate from '../../components/Detail/DetailRate'
  import {getStorageSync} from '../../API/wechat'
  import {detailBook, detailRate} from '../../API'

  export default {
    name: 'detail.vue',
    components: {DetailRate, DetailStat, DetailBook},
    data () {
      return {
        book: {}
      }
    },
    methods: {
      onRateChange (value) {
        const openId = getStorageSync('openId')
        const {fileName} = this.$route.query
        detailRate({openId, fileName, rank: value}).then(response => {
          this.onBookDetail()
        })
      },
      onBookDetail () {
        const openId = getStorageSync('openId')
        const {fileName} = this.$route.query
        console.log(openId, fileName)
        detailBook({openId, fileName}).then(response => {
          this.book = response.data.data
        })
      }
    },
    mounted () {
      this.onBookDetail()
    }
  }
</script>

<style scoped>

</style>
