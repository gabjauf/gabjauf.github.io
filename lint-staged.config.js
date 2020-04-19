module.exports = {
  '*.js': ['eslint', 'npm run test-ci'],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
}
