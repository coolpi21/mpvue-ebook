<template>
  <div>
    <div class="home" v-if="isAuth">
      <searchbar
        :disabled="false"
        :focus="false"
        @onClick="onSearchbarClick"
        :hot-search="hotSearch"
      />
      <HomeCard
        :data="cardData"
      />
      <HomeBanner
        img="http://www.youbaobao.xyz/book/res/bg.jpg"
        title="MPvue2.0多端小程序课程重磅上线"
        subTitle="马上学习"
        @onClick="onHomeBannerClick"
      />
      <div class="home-book">
        <HomeBook
          title="为你推荐"
          :data="recommend"
          :row="1"
          :col="3"
          width="101px"
          height="147px"
          imgMode="scaleToFill"
          mode="col"
          btnText="换一批"
          @onMoreClick="onChangeBook('recommend')"
          @onBookClick="onBookClick"
        />
      </div>
      <div class="home-book">
        <HomeBook
          title="免费阅读"
          :data="freeRead"
          :row="2"
          :col="2"
          width="64px"
          height="88px"
          imgMode="scaleToFill"
          mode="row"
          btnText="换一批"
          @onMoreClick="onChangeBook('freeRead')"
          @onBookClick="onBookClick"
        />
      </div>
      <div class="home-book">
        <HomeBook
          title="当前最热"
          :data=" hotBook"
          :row="1"
          :col="4"
          width="68px"
          height="99px"
          imgMode="scaleToFill"
          mode="col"
          btnText="换一批"
          @onMoreClick="onChangeBook('hotBook')"
          @onBookClick="onBookClick"
        />
      </div>
      <div class="home-book">
        <HomeBook
          title="分类"
          :data="category"
          :row="3"
          :col="2"
          mode="category"
          btnText="查看全部"
          @onMoreClick="onFoundAllBook"
          @onBookClick="onBookClick"
        />
      </div>
    </div>
    <Auth
      v-if="!isAuth"
      @getUserInfo="init"
    />
  </div>
</template>

<script>
import Searchbar from '@/components/Home/Searchbar.vue'
import HomeCard from '@/components/Home/HomeCard.vue'
import HomeBanner from '@/components/Home/HomeBanner.vue'
import HomeBook from '@/components/Home/HomeBook.vue'
import Auth from '@/components/base/Auth.vue'
import {getIndexData, recommend, freeRead, hotBook, register} from '@/API/index.js'
import {
    getSetting,
    getUserInfo,
    setStorageSync,
    getStorageSync,
    getUserOpenId
} from '@/API/wechat.js'
export default {
  components: {
    Searchbar,
    HomeCard,
    HomeBanner,
    HomeBook,
    Auth
  },


  data () {
    return {
      url: 'https://www.youbaobao.xyz/mpvue-res/big.jpg',
      banner: {},
      category: [],
      freeRead: [],
      hotBook: [],
      hotSearch: {},
      recommend: [],
      shelf: [],
      cardData: {},
      isAuth: true
    }
  },
  methods: {
    onChangeBook (key) {
      switch(key) {
        case 'recommend':
          recommend().then(response => {
            const data = response && response.data && response.data.data
            this.recommend = data
          })
        break;
        case 'freeRead':
          freeRead().then(response => {
            const data = response && response.data && response.data.data
            this.freeRead = data
          })
          break;
        case 'hotBook':
          hotBook().then(response => {
            const data = response && response.data && response.data.data
            this.hotBook = data
          })
          break;
      }
    },
    onGetIndexData (openId, userInfo) {
      getIndexData({openId: openId}).then(response => {
        const {
          data: {
            hotSearch: {
              keyword
            },
            banner,
            category,
            freeRead,
            hotBook,
            recommend,
            shelf,
            shelfCount
          }
        } = response.data

        this.hotSearch = keyword
        this.banner = banner
        this.category = category
        this.freeRead = freeRead
        this.hotBook = hotBook
        this.recommend = recommend
        this.shelf = shelf
        this.cardData = {
          userInfo: userInfo,
          num: shelfCount,
          bookList: shelf
        }
      })
    },
    onFoundAllBook () {

    },
    onBookClick () {
      console.log('book click')
    },
    onBookMoreClick () {
      console.log('more click')
    },
    onSearchbarClick () {

    },
    onHomeBannerClick () {
      console.log('banner is clicked...')
    },
    // 获取用户信息
    getUserInfo () {
      getUserInfo (
        (userInfo) => {
          const onGetHomeData = (openId, userInfo) => {
            this.onGetIndexData(openId, userInfo)
            register(openId, userInfo)
          }
          console.log(userInfo)
          setStorageSync('userInfo', userInfo)
          const openId = getStorageSync('openId')
          if (!openId || openId.length === 0) {
            console.log('请求 openId')
            getUserOpenId(openId => onGetHomeData(openId, userInfo))
          } else {
            console.log('openId成功')
            onGetHomeData(openId, userInfo)
          }
        },
        () => {
          console.log('Failed...')
        }
      )
    },
    // 获取用户是否授权
    getSetting () {
      getSetting ('userInfo',
        () => {
          console.log('成功')
          this.isAuth = true
          this.getUserInfo()
        },
        () => {
          console.log('失败')
          this.isAuth = false
        }
      )
    },
    init () {
      this.getSetting()
      // this.onGetIndexData()
    }
  },
  mounted() {
    this.init()
  },
}
</script>

<style lang="scss" scoped>
  .home-book {
    margin-top: 23px;
    &:last-of-type {
      margin-bottom: 18.5px;
    }
  }
</style>
