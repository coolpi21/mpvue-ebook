<template>
  <div class="home-book">
    <div class="home-book-header">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-content-row" v-for="(item, index) in bookData" :key="index">
          <div class="home-book-content-list" v-for="(book, bookIndex) in item"
            :key="bookIndex"
            :style="{flex: '0,1,' + 100/col +'%'}"
          >

              <div class="book-pic">
                <ImageView
                :src="book.cover"
                mode="scaleToFill"
                height="147px"
                />
              </div>
              <div class="book-title book-title-col">
                {{book.categoryText}}
              </div>

          </div>
      </div>
    </div>
    <div class="home-book-footer">3</div>
  </div>
</template>

<script>
import {HOME_BOOK_MODE} from '@/utils/const'
import ImageView from '@/components/base/ImageView.vue'
export default {
  components: {
    ImageView
  },
  mounted () {
    console.log(this.bookData)
  },
  props: {
    title: String,
    data: {
      type: Array,
      default: []
    },
    btnText: String,
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: HOME_BOOK_MODE.ROW
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bookData () {
      const {data, row, col} = this
      if (data && data.length > 0) {
        const bookCountNumber = row * col
        const _bookData = data.slice(0, bookCountNumber)
        const _bookDataRow = []
        let _row = 0
        while (_row < row) {
          _bookDataRow.push(_bookData.slice(_row * col, _row * col + col))
          _row++
        }
        return _bookDataRow
      } else {
        return []
      }
    }
  },
  methods: {
    onMoreClick () {},
    onBookClick () {}
  }
}
</script>

<style lang="scss" scoped>
  .home-book {
    .home-book-header {
      padding: 13px 0 0 21px;
    }
    .home-book-content {
      padding: 22.5px 12px 0 20px;
      .home-book-content-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        .home-book-content-list {
          width: 101px;
            .book-title {
              &.book-title-col {
                font-size: 12px;
                line-height: 16.5px;
                max-height: 33px;
                word-wrap: break-word;
              }
            }

        }
      }
    }
    .home-book-footer {}
  }
</style>
