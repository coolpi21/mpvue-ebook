<template>
  <div class="search-wrapper">
    <searchbar
      :focus="searchFocus"
      @onChange="onChange"
      @onClear="onClear"
      @onConfirm="onConfirm"
      :hot-search="hotSearchKeyWord"
      ref="searchBar"
    />
    <tag-group
      header-text="热门搜索"
      btn-text="换一批"
      :value="hotSearchData"
      @onBtnClick="changeHotSearch"
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
  import {search, hotSearch} from '../../API/index'
  import {getStorageSync, hideLoading, setStorageSync, showLoading, showToast} from '../../API/wechat'

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
      },
      hotSearchData () {
        const _hotSearchArray = []
        this.hotSearchArray.forEach(o => {
          _hotSearchArray.push(o.title)
        })
        console.log(_hotSearchArray)
        return _hotSearchArray
      }
    },
    data () {
      return {
        hotSearchArray: [],
        hotSearchKeyWord: '',
        historySearch: [],
        searchList: {},
        searchFocus: true,
        openId: '',
        page: 1
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
          this.searchList = {}
          return
        }
        this.page = 1
        // this.searchFocus = true
        this.onSearch(keyword)
      },
      onSearch (keyword) {
        search({
          openId: this.openId,
          page: this.page,
          keyword
        }).then(response => {
          this.searchList = response.data.data
          console.log(this.searchList)
        })
      },
      onClear () {
        this.searchList = {}
      },
      onConfirm (keyword) {
        // 判断是否有无关键字
        if (!keyword && keyword.trim().length === 0) {
          // 没有则用默认关键字
          keyword = this.hotSearchKeyWord
          this.$refs.searchBar.setValue(keyword)
        }
        // 有则用搜索关键字
        this.onSearch(keyword)
        // 写入历史记录
        if (!this.historySearch.includes(keyword)) {
          this.historySearch.push(keyword)
          setStorageSync('historyKeyArr', this.historySearch)
        }
        // 清空搜索框焦点
        this.searchFocus = false
      },
      showBookDetail (text, index) {
        console.log(text, index)
      },
      clearHistorySearch () {
        this.historySearch = []
        setStorageSync('historyKeyArr', [])
      },
      searchKeyWord (text) {
        this.$refs.searchBar.setValue(text)
        this.onSearch(this.hotSearchKeyWord)
        // console.log(text)
      },
      changeHotSearch () {
        hotSearch().then(response => {
          this.hotSearchArray = response.data.data
        })
      }
    },
    mounted () {
      this.openid = getStorageSync('openId')
      this.page = 1
      this.hotSearchKeyWord = this.$route.query.keyword
      hotSearch().then(response => {
        this.hotSearchArray = response.data.data
      })
      this.historySearch = getStorageSync('historyKeyArr') || []
    },
    onPageScroll () {
      if (this.searchFocus) {
        this.searchFocus = false
      }
    },
    onReachBottom () {
      // 加载新的数据，若没有则弹出提示框
      if (this.showList) {
        showLoading('加载数据')
        this.page++
        const keyword = this.$refs.searchBar.getValue()
        search({
          openId: this.openId,
          page: this.page,
          keyword
        }).then(response => {
          const {book} = response.data.data
          if (book && book.length > 0) {
            hideLoading()
            this.searchList.book.push(...book)
          } else {
            showToast({
              title: '没有更多数据'
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
