<template>
  <h1>首页</h1>
  <el-button> 测试 </el-button>
  <el-date-picker
    v-model="value"
    type="date"
    placeholder="选择日期"
  />
</template>

<script lang="ts" setup>
const value = ''
</script>

<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
