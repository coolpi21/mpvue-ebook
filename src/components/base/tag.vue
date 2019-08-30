<template>
  <div class="tag-wrapper" @click="onClick">
    <div class="tag">{{text}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: ''
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
  .tag-wrapper {
    max-width: 100%;
    display: flex;
    justify-content: center;
    background: #F7F7F9;
    border-radius: 32px;
    padding: 6px 17px;
    box-sizing: border-box;

    .tag {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      font-size: 14px;
      color: #272E37;
      box-sizing: border-box;
    }
  }
</style>
