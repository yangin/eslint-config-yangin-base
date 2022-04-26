module.exports = {
  rules: {
    // 强制在声明时进行初始化
    'init-declarations': ['error', 'always'],

    // 禁止删除变量
    'no-delete-var': ['error'],

    // 不允许标签与变量同名
    'no-label-var': ['error'],

    // 禁用特定的全局变量
    'no-restricted-globals': [
      'error', 'localStorage', 'Screen', 'name', 'history', 'External',
    ], // safari Throw [SecurityError (DOM Exception 18): The operation is insecure], use MB.localStorageDelegate instead

    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': ['error'],

    // 禁止将变量初始化为 undefined --fix
    'no-undef-init': ['error'],

    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': ['error'],

    // 禁止出现未使用过的变量
    'no-unused-vars': ['warn'],

    // 禁止在变量定义之前使用它们
    'no-use-before-define': [
      'error', {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
  },
};
