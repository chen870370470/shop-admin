module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // Vue2规则
    // 'plugin:vue/essential',
    // 修改为Vue3规则
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
}
