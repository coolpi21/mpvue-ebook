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
    <detail-bottom
      :is-in-shelf="isInShelf"
      @handleShelf="onHandleShelf"
    />
  </div>
</template>

<script>
  import DetailBook from '../../components/Detail/DetailBook'
  import DetailStat from '../../components/Detail/DetailStat'
  import DetailRate from '../../components/Detail/DetailRate'
  import DetailContents from '../../components/Detail/DetailContents'
  import DetailBottom from '../../components/Detail/DetailBottom'
  import {getStorageSync} from '../../API/wechat'
  import {detailBook, detailRate, detailContents, bookIsInShelf, handleShelf} from '../../API'

  export default {
    name: 'detail.vue',
    components: {DetailBottom, DetailContents, DetailRate, DetailStat, DetailBook},
    data () {
      return {
        book: {},
        contents: [],
        isInShelf: false
      }
    },
    methods: {
      onHandleShelf () {
        const openId = getStorageSync('openId')
        const {fileName} = this.$route.query
        if (!this.isInShelf) {
          handleShelf({openId, fileName}).then(()=> {
            this.onBookIsInShelf()
          })
        }
      },
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
      },
      onBookIsInShelf () {
        const openId = getStorageSync('openId')
        const {fileName} = this.$route.query
        if (openId && fileName) {
          bookIsInShelf({openId, fileName}).then(response => {
            const {data} = response.data
            if (data.length === 0) {
              this.isInShelf = false
            } else {
              this.isInShelf = true
            }
          })
        }
      }
    },
    mounted () {
      this.onBookDetail()
      this.onDetailContents()
      this.onBookIsInShelf()
    }
  }
</script>

<style scoped>

</style>
