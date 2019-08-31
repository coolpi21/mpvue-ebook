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
      @readBook="onReadBook"
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
  import {detailBook, detailRate, detailContents, bookIsInShelf, handleShelf, removeShelf} from '../../API'

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
          handleShelf({openId, fileName}).then(
            this.onBookIsInShelf
          )
        } else {
          const vue = this
          mpvue.showModal({
            title: '提示',
            content: `是否将《${this.book.title}》移出书架`,
            success (res) {
              if (res.confirm) {
                removeShelf({openId, fileName}).then(vue.onBookIsInShelf)
              }
            }
          })

        }
      },
      onReadBook (href) {
        const query = {}
        if (this.book && this.book.fileName) {
          query.fileName = this.book.fileName
          query.opf = this.book.opf
        }
        if (href) {
          const index = href.indexOf('/')
          console.log(index)
          if (index >= 0) {
            query.navigation = href.slice(index+1)
          } else {
            query.navigation = href
          }
        }
        console.log(query)
        this.$router.push({
          path: '/pages/read/main',
          query
        })
        // console.log(href)
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
