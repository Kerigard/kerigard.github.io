module.exports = {
  root: true,

  env: { node: true },

  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: { ecmaVersion: 2020 },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'vue/script-setup-uses-vars': 'error',
    'vue/v-slot-style': ['error', { atComponent: 'shorthand' }],
  },

  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
