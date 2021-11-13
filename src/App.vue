<template>
  <!-- 语言配置 -->
  <el-config-provider :locale="locale">
    <!-- 路由渲染出口 -->
    <router-view />
  </el-config-provider>
</template>
<!-- 1.lang="ts" -->
<!-- 2. -->
<script setup lang="ts">
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>
<style></style>
