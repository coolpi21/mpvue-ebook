<template>
  <div class="search-input">
    <div class="search-input-wrapper" @click="onSearchBarClick">
      <div class="search">
        <van-icon
          size="16px"
          color="#858C96"
          name="search"
        />
      </div>
      <input
        class="search-input-content"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotSearch.length === 0 ? '搜索' : hotSearch"
        v-model="searchWord"
        @input="onChange"
        @confirm="onConfirm"
        confirm-type="search"
        placeholder-style="color: #ADB4BE; font-size: 15px;"
      />
      <div
        class="close"
        @click="onClearClick"
      >
        <van-icon
          size="16px"
          color="#858C96"
          name="close"
          v-if="searchWord.length > 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearchBarClick () {
      this.$emit('onClick')
    },
    onClearClick () {
      this.searchWord = ''
      this.$emit('onClear')
    },
    onChange (e) {
      const {value} = e.mp.detail
      this.$emit('onChange', value)
    },
    onConfirm (e) {
      const {value} = e.mp.detail
      this.$emit('onConfirm', value)
    },
    setValue (v) {
      this.searchWord = v
    },
    getValue () {
      return this.searchWord
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-input {
    padding: 15px 16px;
    .search-input-wrapper {
      display: flex;
      align-items: center;
      height: 40px;
      box-sizing: border-box;
      padding: 12px 16px;
      border-radius: 20px;
      background: #f5f7f9;
      .search-input-content {
        flex: 1;
        margin: 0 8px;
        color: #333;
        font-size: 15px;
      }
      .search, .close {
        display: flex;
        height: 20px;
        align-items: center;
      }

    }
  }
</style>
