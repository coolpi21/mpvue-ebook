<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <div class="auth-info">
        <div class="auth-info-image">
          <ImageView
            src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"
          round/>
        </div>
        <div class="sub-title">登录小幕读书</div>
        <div class="title">全场好书免费读</div>
      </div>
      <button
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
        class="auth-button"
      >授权登录</button>
    </div>
  </div>
</template>

<script>
import ImageView from '@/components/base/ImageView.vue'
export default {
  components: {
    ImageView
  },
  methods: {
    getUserInfo () {
      this.$emit('getUserInfo')
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #999;
    z-index: 1000;
    .auth-card {
      position: relative;
      width: 270px;
      height: 248px;
      background: #f5f5f5;
      border-radius: 18px;
      .auth-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 22.5px;
        .auth-info-image {
          width: 74px;
          height: 74px;
        }
        .sub-title {
          margin-top: 18px;
          font-size: 13px;
          color: #999;
          line-height: 18.5px;
        }
        .title {
          font-size: 16px;
          line-height: 22.5px;
          color:#333;
          font-weight: 400;
        }
      }
      .auth-button {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 49px;
        line-height: 49px;
        background-image: linear-gradient(270deg, #1EA3F5 0%, #0F87FC 100%);
        border-radius: 0 0 18px 18px;
        color: #fff;
        font-size: 15px;
      }
    }

  }
</style>
