<template>
  <div class="search-item-wrapper" @click="onClick">
    <div class="search-item-icon">
      <div class="icon-wrapper">
        <van-icon
          :name="icon"
          color="rgba(0,0,0,.5)"
          :style="{width: '20px', height: '20px'}"
        />
      </div>
    </div>
    <div class="search-item-list-wrapper">
      <div class="item-title">{{title}}</div>
      <div class="item-sub-title">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchItem',
    props: {
      title: String,
      subTitle: String,
      icon: String
    },
    methods: {
      onClick () {
        this.$emit('onClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-item-wrapper {
    display: flex;
    align-items: center;
    padding: 15px;

    .search-item-icon {
      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background: #F7F7F9;
        border-radius: 50%;
      }
    }

    .search-item-list-wrapper {
      width: 80%;
      margin-left: 10px;
      height: 36.5px;

      .item-title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #333333;
        line-height: 20px;
      }

      .item-sub-title {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
        line-height: 16.5px;
      }
    }
  }
</style>
<style>
  .icon {
    width: 20px;
    height: 20px;
  }
</style>
