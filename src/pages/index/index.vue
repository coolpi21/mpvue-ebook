<template>
  <div class="home">
    <searchbar
      :disabled="false"
      @onClick="onSearchbarClick"
    />
    <HomeCard />
    <HomeBanner
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      title="MPvue2.0多端小程序课程重磅上线"
      subTitle="马上学习"
      @onClick="onHomeBannerClick"
    />
    <div class="home-book">
      <HomeBook
        title="为你推荐"
        :data="data"
        :row="2"
        :col="2"
        mode="category"
        btnText="更多"
        @onMoreClick="onBookMoreClick"
        @onBookClick="onBookClick"
      />
    </div>
  </div>
</template>

<script>
import Searchbar from '@/components/Home/Searchbar.vue'
import HomeCard from '@/components/Home/HomeCard.vue'
import HomeBanner from '@/components/Home/HomeBanner.vue'
import HomeBook from '@/components/Home/HomeBook.vue'
export default {
  components: {
    Searchbar,
    HomeCard,
    HomeBanner,
    HomeBook
  },
  methods: {
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
    }
  },
  data () {
    return {
      url: 'https://www.youbaobao.xyz/mpvue-res/big.jpg',
      data: [
        {
            "cover":"https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-25474-6_CoverFigure.jpg",
            "category":12,
            "categoryText":"Biomedicine",
            "num":14,
            "cover2":"https://www.youbaobao.xyz/book/res/img/Biomedicine/978-3-319-72790-5_CoverFigure.jpg"
        },
        {
            "cover":"https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-33515-5_CoverFigure.jpg",
            "category":13,
            "categoryText":"BusinessandManagement",
            "num":16,
            "cover2":"https://www.youbaobao.xyz/book/res/img/BusinessandManagement/978-3-319-95261-1_CoverFigure.jpg"
        },
        {
            "cover":"https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg",
            "category":1,
            "categoryText":"ComputerScience",
            "num":56,
            "cover2":"https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg"
        },
        {
            "cover":"https://www.youbaobao.xyz/book/res/img/EarthSciences/978-981-10-3713-9_CoverFigure.jpg",
            "category":14,
            "categoryText":"EarthSciences",
            "num":16,
            "cover2":"https://www.youbaobao.xyz/book/res/img/EarthSciences/978-3-319-65633-5_CoverFigure.jpg"
        },
        {
            "cover":"https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-69772-7_CoverFigure.jpg",
            "category":3,
            "categoryText":"Economics",
            "num":30,
            "cover2":"https://www.youbaobao.xyz/book/res/img/Economics/978-3-319-91400-8_CoverFigure.jpg"
        },
        {
            "cover":"https://www.youbaobao.xyz/book/res/img/Education/978-3-319-39450-3_CoverFigure.jpg",
            "category":4,
            "categoryText":"Education",
            "num":60,
            "cover2":"https://www.youbaobao.xyz/book/res/img/Education/978-3-319-52980-6_CoverFigure.jpg"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-book {
    margin-top: 23px;
  }
</style>
