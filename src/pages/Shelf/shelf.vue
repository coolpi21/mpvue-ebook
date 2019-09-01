<template>
  <div>
    <shelf-user-info
      :num="num"
      :read-day="readDay"
      :user-info="userInfo"
    />
    <shelf-list
      :shelf-list="shelfList"
    />
  </div>
</template>

<script>
  import ShelfUserInfo from '../../components/Shelf/shelfUserInfo'
  import {getStorageSync} from '../../API/wechat'
  import {readDay, bookIsInShelf} from '../../API/index'
  import ShelfList from '../../components/Shelf/shelfList'
  export default {
    name: 'shelf.vue',
    components: {ShelfList, ShelfUserInfo},
    data () {
      return {
        num: 0,
        readDay: 0,
        userInfo: {},
        shelfList: []
      }
    },
    onShow () {
      const userInfo = getStorageSync('userInfo')
      const openId = getStorageSync('openId')
      this.userInfo = userInfo
      readDay({openId}).then(response =>{
        this.readDay = response.data.data.day
      })
      bookIsInShelf({openId}).then(response => {
        this.num = response.data.data.length
        this.shelfList = response.data.data
        this.shelfList.push({})
      })
    }
  }
</script>

<style scoped>

</style>
