<template>
  <div>
    <!-- <span class="msg">Hello World</span> -->
    <van-button type="primary" @click="jump">按钮</van-button>
    <!-- <van-icon name="close"/> -->
    <!-- <button @click="jump">按钮</button> -->
  </div>
</template>

<script>
import { post } from '@/utils/request'
export default {
  methods: {
    jump () {
      post('http://www.baidu.com').then(response => {
        console.log('12345')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .msg {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
</style>
