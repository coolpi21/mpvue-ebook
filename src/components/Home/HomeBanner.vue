<template>
  <div class="home-banner"
    @click="onClick"
    :style="{backgroundImage: bgImg}"
  >
    <div class="banner-title">{{title}}</div>
    <div class="banner-sub-title">{{subTitle}}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    subTitle: String
  },
  computed: {
    bgImg () {
      return 'url(' + this.img + ')'
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 125px;
    width: 335px;
    margin: 0 auto;
    border-radius: 12px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .banner-title {
      font-size: 18px;
      color: #fff;
      font-weight: 500;
    }
    .banner-sub-title {
      margin-top: 12px;
      font-size: 12px;
      color: #fff;
      padding: 5px 8px;
      border-radius: 4px;
      background: #000;
      border: 1px solid #eee;
    }
  }
</style>
