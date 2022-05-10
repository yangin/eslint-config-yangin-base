module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.mjs', '.js', '.json', '.ts', '.tsx' ]
      }
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
      '.ts',
      '.tsx'
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ]
  },

  rules: {
    // 【强制】报告任何无效的import,如相同名字
    'import/export': [ 'error' ],

    // 【强制】确保所有的import在声明之前
    'import/first': [ 'error' ],

    // 强制在最后一个顶级导入语句或要求调用之后有一个空行
    'newline-after-import': [ 'error', { 'count': 1 } ],

    // 【强制】报告在多个地方重复导入同一模块 --fix
    'import/no-duplicates': [ 'error' ],

    // 【强制】禁止通过 var 或 let 使用可变导出
    'import/no-mutable-exports': [ 'error' ],

    // 【强制】禁止使用默认导出作为本地命名导入，如 export default 'foo'; export const bar = 'baz';
    'import/no-named-default': [ 'error' ],

    // 【强制】禁止导入中的 webpack 加载器语法
    'import/no-webpack-loader-syntax': [ 'error' ],

    // 【强制】定义import的排序 --fix
    'import/order': [ 'error', { 'groups': [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type' ] } ]
  }
}
