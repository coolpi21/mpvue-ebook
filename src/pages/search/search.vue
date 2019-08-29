<template>
  <div class="search-wrapper">
    <!--    <TagGroup-->
    <!--      :value="value"-->
    <!--      headerText="热门搜索"-->
    <!--      btnText="换一批"-->
    <!--      @onBtnClick="onBtnClick"-->
    <!--      @onTagClick="onTagClick"-->
    <!--    />-->
    <!--    <SearchItem-->
    <!--      title="计算机科学"-->
    <!--      sub-title="类别"-->
    <!--    />-->
    <!--    <SearchItem-->
    <!--      title="计算机科学"-->
    <!--      sub-title="类别"-->
    <!--    />-->
    <!--    <SearchItem-->
    <!--      title="计算机科学"-->
    <!--      sub-title="类别"-->
    <!--    />-->
    <!--    <search-table-->
    <!--      :data="value"-->
    <!--    />-->
    <search-list
      :data="data"
    />
  </div>
</template>

<script>
  import SearchList from '../../components/Search/SearchList'

  export default {
    components: {
      SearchList
    },
    computed: {
      data () {
        return {
          item: this.item,
          list: this.list
        }
      }
    },
    data () {
      return {
        item: [
          {
            icon: 'star-o',
            title: 'ComputerScience',
            subTitle: 'Category'
          },
          {
            icon: 'like-o',
            title: 'Bruce Spiegelman',
            subTitle: 'Author'
          },
          {
            icon: 'fire-o',
            title: 'Apress, Berkeley, CA',
            subTitle: 'Publisher'
          }
        ],
        list: [
          {
            'id': 19,
            'fileName': '2018_Book_AutonomousControlForAReliableI',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg',
            'title': 'Autonomous Control for a Reliable Internet of Services',
            'author': 'Ivan Ganchev',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_AutonomousControlForAReliableI',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 20,
            'fileName': '2018_Book_ComputerAidedVerification',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg',
            'title': 'Computer Aided Verification',
            'author': 'Hana Chockler',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_ComputerAidedVerification',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 19,
            'fileName': '2018_Book_AutonomousControlForAReliableI',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg',
            'title': 'Autonomous Control for a Reliable Internet of Services',
            'author': 'Ivan Ganchev',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_AutonomousControlForAReliableI',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 20,
            'fileName': '2018_Book_ComputerAidedVerification',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg',
            'title': 'Computer Aided Verification',
            'author': 'Hana Chockler',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_ComputerAidedVerification',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 19,
            'fileName': '2018_Book_AutonomousControlForAReliableI',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-90415-3_CoverFigure.jpg',
            'title': 'Autonomous Control for a Reliable Internet of Services',
            'author': 'Ivan Ganchev',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_AutonomousControlForAReliableI',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 20,
            'fileName': '2018_Book_ComputerAidedVerification',
            'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-96142-2_CoverFigure.jpg',
            'title': 'Computer Aided Verification',
            'author': 'Hana Chockler',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_ComputerAidedVerification',
            'category': 1,
            'categoryText': 'ComputerScience',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }
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
