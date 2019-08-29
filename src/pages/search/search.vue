<template>
  <div class="search-wrapper">
    <TagGroup
      :value="value"
      headerText="热门搜索"
      btnText="换一批"
      @onBtnClick="onBtnClick"
      @onTagClick="onTagClick"
    />
    <SearchItem
      title="计算机科学"
      sub-title="类别"
    />
    <SearchItem
      title="计算机科学"
      sub-title="类别"
    />
    <SearchItem
      title="计算机科学"
      sub-title="类别"
    />
  </div>
</template>

<script>
  import TagGroup from '@/components/base/TagGroup.vue'
  import SearchItem from '../../components/Search/SearchItem'
  export default {
    components: {
      TagGroup,
      SearchItem
    },
    data () {
      return {
        value: [
          'aaaa',
          'bbbb',
          'ccccccc',
          'ddddddddddddddddddd',
          'eeeeee'
        ]
      }
    },
    methods: {
      onClick () {
        console.log('taged...')
      },
      onTagClick (text, index) {
        console.log('tagged...', text, index)
      },
      onBtnClick () {
        console.log('btn clicked')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
