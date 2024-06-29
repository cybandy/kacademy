import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
).overrideRules({
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  // 'vue/max-attributes-per-line': 'off',
})
