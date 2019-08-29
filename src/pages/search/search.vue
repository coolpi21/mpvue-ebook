<template>
  <div class="search-wrapper">
    <Tag text="测试数据" @onClick="onClick"/>
  </div>
</template>

<script>
  import Tag from '@/components/base/tag.vue'
  export default {
    components: {
      Tag
    },
    methods: {
      onClick () {
        console.log('taged...')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
