<template>
  <div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="group-text">{{headerText}}</div>
      <div class="group-btn" @click="onBtnClick">{{btnText}}</div>
    </div>
    <div class="tag-group-inner">
      <div class="tag-group" v-for="(text, index) in value" :key="index">
        <Tag
          :text="text"
          @onClick="onTagClick(index, text)"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Tag from '@/components/base/tag'

  export default {
    components: {
      Tag
    },
    props: {
      headerText: String,
      btnText: String,
      value: Array
    },
    methods: {
      onTagClick (text, index) {
        this.$emit('onTagClick', text, index)
      },
      onBtnClick () {
        this.$emit('onBtnClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tag-group-wrapper {
    margin-top: 35px;
    padding: 0 10px;

    .tag-group-header {
      display: flex;
      justify-content: space-between;
      padding: 0 6px;
      .group-text {
        font-size: 14px;
        color: #333333;
      }

      .group-btn {
        font-size: 14px;
        color: #3696EF;
      }
    }
    .tag-group-inner {
      display: flex;
      flex-flow: row wrap;
      padding: 10px 0 0;
      .tag-group {
        padding: 6px;
      }
    }

  }
</style>
