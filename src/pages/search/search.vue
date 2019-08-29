<template>
  <div class="search-wrapper">
    <searchbar
      :focus="searchFocus"
      @onChange="onChange"
      @onClearClick="onClear"
      @onConfirm="onConfirm"
    />
    <tag-group
      header-text="热门搜索"
      btn-text="换一批"
      :value="hotSearchArray"
      @onBtnClick="onChangeBook"
      @onTagClick="showBookDetail"
      v-if="hotSearchArray.length > 0 && !showList"
    />
    <tag-group
      header-text="历史搜索"
      btn-text="清空搜索"
      :value="historySearch"
      @onBtnClick="clearHistorySearch"
      @onTagClick="searchKeyWord"
      v-if="historySearch.length > 0 && !showList"
    />
    <search-list
      :data="searchList"
      v-if="showList"
    />
  </div>
</template>

<script>
  import SearchList from '../../components/Search/SearchList'
  import Searchbar from '../../components/Home/Searchbar'
  import TagGroup from '../../components/base/TagGroup'
  import {search} from '../../API/index'
  import {getStorageSync} from '../../API/wechat'

  export default {
    components: {
      TagGroup,
      Searchbar,
      SearchList
    },
    computed: {
      showList () {
        const keys = Object.keys(this.searchList)
        return keys.length > 0
      }
    },
    data () {
      return {
        hotSearchArray: [],
        historySearch: [],
        searchList: {},
        searchFocus: true,
        openId: ''
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
      },
      // 请求关键字查询
      onChange (keyword) {
        if (!keyword && keyword.trim().length === 0) {
          return
        }
        this.onSearch(keyword)
      },
      onSearch (keyword) {
        search({
          openId: this.openId,
          keyword
        }).then(response => {
          this.searchList = response.data.data
        })
      },
      onClear () {

      },
      onConfirm () {

      }
    },
    mounted () {
      this.openid = getStorageSync('openId')
    }
  }
</script>

<style lang="scss" scoped>

</style>
