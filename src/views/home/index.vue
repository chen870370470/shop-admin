<template>
  <h1>首页</h1>
  <div>{{ $store.state.count }}</div>
</template>

<script lang="ts" setup>
import User from '@/api/user'
console.log(User)
</script>

<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
