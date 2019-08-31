<template>
  <div class="home-card">
    <div class="home-card-info">
      <div class="userInfo-avatar">
        <ImageView
          :src="avatar"
          height="100%"
          mode="scaleToFill"
          round
        />
      </div>
      <div class="nickName">{{nickname}}</div>
      <div class="shelf-text">书架共有{{data.num}}本好书</div>
      <div class="round-item"></div>
      <div class="spec-text">特别精选</div>

    </div>
    <div class="home-card-book">
      <div class="book-wrapper">
        <div
            class="book-inner-wrapper"
            v-for="(item, index) in data.bookList"
            :key="index"
            @click="onBookClick(item)"
        >
          <ImageView :src="item.cover" />
        </div>
      </div>
      <div class="shelf-wrapper">
        <div class="shelf-item">
          <div class="text">书</div>
          <div class="text">架</div>
        </div>
        <div class="shelf-arrow">
          <van-icon
            name="arrow"
            class="arrow"
            color="#828489"
            size="11px"
          />
        </div>
      </div>
    </div>
    <div class="feedback-item">
    </div>
    <div class="feedback-item-text" @click="onFeedBackClick">反馈</div>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import ImageView from '../base/ImageView'
import Dialog from 'vant-weapp/dist/dialog/dialog'
export default {
  components: {
    ImageView
  },
  props: {
    data: Object,
    hasSing: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  computed: {
    avatar() {
      return (this.data && this.data.userInfo && this.data.userInfo.avatarUrl) || ''
    },
    nickname() {
      return (this.data && this.data.userInfo && this.data.userInfo.nickName) || ''
    },
    bookList() {
      return (this.data && this.data.bookList) || []
    }
  },
  methods: {
    gotoShelf () {},
    onBookClick (book) {
      this.$emit('onBookClick', book)
    },
    sign () {},
    onFeedBackClick () {
      Dialog.confirm({
        title: '提示',
        message: '是否提交反馈内容',
        confrimButtonText: '确认',
        cancelButtonText: '取消'
      }).then(() => {
        console.log('点击确认后的事件')
      }).catch(() => {
        console.log('取消后的事件')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-card {
    position: relative;
    box-sizing: border-box;
    padding:21.5px 17px 20px 20px;
    margin:22px 20px 20px;
    background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
    border-radius: 15px;
    .home-card-info {
      display: flex;
      align-items: center;
      .userInfo-avatar {
        width: 20px;
        height: 20px;
      }
      .nickName,.shelf-text,.spec-text{
        font-size: 12px;
        color: #fff;
      }
      .nickName {
        margin: 0 8.5px;
      }
      .shelf-text,.round-item,.spec-text{
        opacity: .7;
      }
      .shelf-text {
      }
      .round-item {
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        margin:0 8px 0 5px;
      }
      .spec-text {}
    }
    .home-card-book {
      display: flex;
      margin-top: 16.5px;
      .book-wrapper {
        display: flex;
        justify-content: space-around;
        flex: 1;
        .book-inner-wrapper {
          width: 72px;
          height: 101px;
        }
      }
      .shelf-wrapper {
        display: flex;
        align-items: center;
        .shelf-item {
          font-size: 10.5px;
          color: #fff;
          opacity: .8;
        }
        .shelf-arrow {

        }
      }
    }
    .feedback-item {
      position: absolute;
      right: 0;
      top: 19.5px;
      width: 44.5px;
      height: 23.5px;
      background: #d8d8d8;
      opacity: .3;
      border-radius: 100px 0 0 100px;
    }
    .feedback-item-text {
      position: absolute;
      right: 0;
      top: 19.5px;
      width: 44.5px;
      height: 23.5px;
      color: #fff;
      font-size: 11px;
      text-align: center;
      line-height: 23.5px;
    }
  }
</style>
