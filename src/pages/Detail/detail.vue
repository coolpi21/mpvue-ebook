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
    <detail-contents
      :contents="contents"
      @readBook="onReadBook"
    />
  </div>
</template>

<script>
  import DetailBook from '../../components/Detail/DetailBook'
  import DetailStat from '../../components/Detail/DetailStat'
  import DetailRate from '../../components/Detail/DetailRate'
  import DetailContents from '../../components/Detail/DetailContents'
  import {getStorageSync} from '../../API/wechat'
  import {detailBook, detailRate, detailContents} from '../../API'

  export default {
    name: 'detail.vue',
    components: {DetailContents, DetailRate, DetailStat, DetailBook},
    data () {
      return {
        book: {},
        contents: []
      }
    },
    methods: {
      onReadBook (href) {
        console.log(href)
      },
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
        if (openId && fileName) {
          detailBook({openId, fileName}).then(response => {
            this.book = response.data.data
          })
        }
      },
      onDetailContents () {
        const {fileName} = this.$route.query
        if (fileName) {
          detailContents({fileName}).then(response => {
            this.contents = response.data.data
          })
        }
      }
    },
    mounted () {
      this.onBookDetail()
      this.onDetailContents()
    }
  }
</script>

<style scoped>

</style>
