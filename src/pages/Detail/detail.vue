<template>
  <div>
    <detail-book
      :book="123"
    />
  </div>
</template>

<script>
  import DetailBook from '../../components/Detail/DetailBook'
  export default {
    name: 'detail.vue',
    components: {DetailBook},
    data () {
      return {
        book: '123'
      }
    },
    mounted () {
      console.log(this.$route.query)
    }
  }
</script>

<style scoped>

</style>
