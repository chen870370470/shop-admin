import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@':'绝对路径'
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      cache: false // 禁用eslint缓存
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // 选项写法
      '/admin': {
        target: 'https://shop.fed.lagou.com/api',
        changeOrigin: true
        // 兼容基于名字的虚拟主机
        // a.com localhost:xxx
        // b.com localhost:xxx
        // HTTP 请求头部的 origin 字段
        // 我们在开发模式：默认的origin是真实的origin localhost:3000
        //  changeOrigin: true 代理服务会把origin 修改为目标地址
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
