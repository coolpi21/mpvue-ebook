<template>
  <web-view
    :src="url"
  ></web-view>
</template>

<script>
  export default {
    name: 'read',
    data () {
      return {
        url: ''
      }
    },
    mounted () {
      const {fileName, opf, navigation} = this.$route.query
      console.log(fileName,opf,navigation)
      let _url = 'http://www.youbaobao.xyz/book/#/ebook'
      if (fileName) {
        _url = `${_url}/${fileName}`
        if (opf) {
          _url = `${_url}?opf=${opf}`
          if (navigation) {
            _url = `${_url}&navigation=${navigation}`
          }
        } else {
          if (navigation) {
            _url = `${_url}?navigation=${navigation}`
          }
        }
        this.url = _url
      }
      // console.log(_url)
      //  http://www.youbaobao.xyz/book/#/ebook/2018_Book_AnimalsAndTheShapingOfModernMe?opf=https%3A%2F%2Fbook.youbaobao.xyz%2Fepub2%2F2018_Book_AnimalsAndTheShapingOfModernMe%2FOEBPS%2Fpackage.opf
    }
  }
</script>

<style scoped>

</style>
