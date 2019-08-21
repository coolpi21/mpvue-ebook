<template>
  <div class="home">
    <searchbar
      :disabled="false"
      @onClick="onSearchbarClick"
    />
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'
export default {
  components: {
    Searchbar
  },
  methods: {
    onSearchbarClick () {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
