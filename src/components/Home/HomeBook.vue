<template>
  <div class="home-book">
    <div class="home-book-header" v-if="showTitle">{{title}}</div>
    <div class="home-book-content">
      <div
        class="home-book-content-row"
        v-for="(item, index) in bookData"
        :key="index"
      >
        <div class="home-book-content-list" v-for="(book, bookIndex) in item"
             :key="bookIndex"
             @click="onBookClick(book)"
        >
          <div class="home-book-card-list" v-if="mode === HomeBookMode.COL || mode === HomeBookMode.ROW"
               :style="{display: 'flex',flex: '0,1,' + 100/col +'%', flexDirection: mode === HomeBookMode.ROW ?  'row' : 'column'}">
            <div class="book-pic">
              <ImageView
                :src="book.cover"
                :height="height"
                :width="width"
                :mode="mode"
              />
            </div>
            <div class="book-content-wrapper">
              <div class="book-title book-title-col" v-if="mode === HomeBookMode.COL"
                   :style="{width}">
                {{book.title}}
              </div>
              <div class="book-title book-title-row" v-else>
                <div class="book-name">{{book.fileName}}</div>
                <div class="book-author">{{book.author}}</div>
                <div class="book-category">{{book.categoryText}}</div>
              </div>
            </div>
          </div>
          <div class="home-book-category-list" v-else>
            <div class="category-name">{{book.text}}</div>
            <div class="category-num">{{book.num}}本书</div>
            <div class="category-cover-img">
              <div class="category-cover-img1">
                <ImageView
                  :src="book.cover"
                  height="66px"
                  mode="scaleToFill"
                />
              </div>
              <div class="category-cover-img2">
                <ImageView
                  :src="book.cover2"
                  height="52px"
                  mode="scaleToFill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-book-footer" v-if="showBtn" @click="onMoreClick">
      <van-button custom-class="home-book-footer-button" round>{{btnText}}</van-button>
    </div>
  </div>
</template>

<script>
  import {HOME_BOOK_MODE, CATEGORY} from '@/utils/const'
  import ImageView from '@/components/base/ImageView.vue'

  export default {
    components: {
      ImageView
    },
    mounted () {
      // console.log(this.bookData)
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
      },
      height: String,
      width: String,
      imgMode: String
    },
    computed: {
      HomeBookMode () {
        return HOME_BOOK_MODE
      },
      bookData () {
        const {data, row, col} = this
        data.forEach(book => {
          book.text = CATEGORY[book.categoryText.toLowerCase()]
        })
        // console.log(data)
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
      onMoreClick () {
        this.$emit('onMoreClick')
      },
      onBookClick (book) {
        this.$emit('onBookClick', book)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-book {
    .home-book-header {
      padding: 13px 0 0 21px;
    }

    .home-book-content {
      padding: 22.5px 20px 0;

      .home-book-content-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin-bottom: 12px;

        .home-book-content-list {
          display: flex;
          align-items: center;
          // justify-content: center;
          .book-content-wrapper {
            .book-title {
              &.book-title-col {
                // width: 101px;
                font-size: 12px;
                line-height: 16.5px;
                font-weight: 500;
                color: #212731;
                max-height: 33px;
                word-break: break-all;
                overflow: hidden;
                text-align: center;

              }

              &.book-title-row {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 9px;
                width: 80px;

                .book-name {
                  font-size: 14px;
                  color: #1F1F1F;
                  line-height: 18px;
                  max-height: 36px;
                  word-break: break-all;
                  overflow: hidden;
                }

                .book-author {
                  margin-top: 10px;
                }

                .book-author, .book-category {
                  font-size: 12px;
                  color: #868686;
                  line-height: 14px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }

        .home-book-category-list {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 161px;
          height: 96px;
          box-sizing: border-box;
          background: #F8F9FB;
          border-radius: 10px;
          padding: 13.5px 0 14.5px 16px;

          .category-name {
            width: 64px;
            line-height: 22.5px;
            font-size: 16px;
            color: #212832;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .category-num {
            font-size: 12px;
            color: #868686;
          }

          .category-cover-img {
            position: absolute;
            right: 0;
            bottom: 6px;

            .category-cover-img1 {
              position: absolute;
              width: 36px;
              right: 0;
              bottom: -5px;
              z-index: 100;
            }

            .category-cover-img2 {
              position: absolute;
              width: 24px;
              right: 26px;
              bottom: -5px;
              z-index: 90;
            }

          }
        }
      }
    }

    .home-book-footer {
      padding: 0 20px;
    }
  }
</style>

<style lang="scss">
  .home-book-footer {
    .home-book-footer-button {
      width: 100%;
      font-size: 14px;
      color: #3696EF;
      border: 1px solid #EDEEEE;
    }
  }

  .category-cover-img1 {
    .image {
      border-radius: 0 0 10px 0;
    }
  }
</style>
