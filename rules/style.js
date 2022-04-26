module.exports = {
  rules: {
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 4,
      },
    ],

    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': ['error'],

    // 强制要求在数组括号内使用一个或多个空格、或折行 --fix
    'array-bracket-spacing': ['error', 'never'],

    // 强制在代码块中开括号前和闭括号后有一个或多个空格 --fix
    'block-spacing': ['error', 'always'],

    // 强制在代码块中使用一致的大括号风格,强制 one true brace style, 允许块的开括号和闭括号在 同一行 --fix
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 强制使用骆驼拼写法命名约定, 强制属性名称为驼峰风格, 对解构标识符强制使用驼峰风格
    camelcase: [
      'error', {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],

    // 要求或禁止末尾逗号 --fix
    'comma-dangle': ['error', 'always-multiline'],

    // 强制在逗号前后使用一致的空格,逗号后使用空格，逗号前不使用 --fix
    'comma-spacing': [
      'error', {
        before: false,
        after: true,
      },
    ],

    // 强制使用一致的逗号风格,要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'comma-style': ['error', 'last'],

    // 强制在计算的属性的方括号中使用一个或多个空格 --fix
    'computed-property-spacing': ['error'],

    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': ['error'],

    // 禁止文件末尾存在空行 --fix
    'eol-last': ['error'],

    // 禁止在函数名和开括号之间有空格 --fix
    'func-call-spacing': ['error', 'never'],

    // 强制使用一致的缩进
    indent: [
      'error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      },
    ],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error'],

    // 禁止在对象字面量的键和冒号之间存在空格,要求在对象字面量的冒号和值之间存在至少有一个空格 --fix
    'key-spacing': [
      'error', {
        beforeColon: false,
        afterColon: true,
      },
    ],

    // 要求在关键字之前至少有一个空格, 要求在关键字之后至少有一个空格 --fix
    'keyword-spacing': [
      'error', {
        before: true,
        after: true,
      },
    ],

    // 要求构造函数首字母大写,要求调用 new 操作符时有首字母大写的函数，允许调用首字母大写的函数时没有 new 操作符，检查对象属性
    'new-cap': [
      'error', {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],

    // 强制操作符使用一致的换行样式
    'linebreak-style': ['error'],

    // 强制操作符使用一致的换行样式
    'lines-around-comment': ['error'],

    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': ['error'],

    // 强制对多行注释使用特定风格
    'multiline-comment-style': ['error'],

    // 要求或禁止在三元操作数中间换行
    'multiline-ternary': ['error', 'always-multiline'],

    // 禁止调用无参构造函数时有圆括号
    'new-parens': ['error'],

    // 强制或禁止调用无参构造函数时有圆括号
    'newline-per-chained-call': ['error'],

    // 禁用 Array 构造函数
    'no-array-constructor': ['error'],

    // 禁止混合使用不同的操作符
    'no-mixed-operators': [
      'error', {
        groups: [
          [
            '==', '!=', '===', '!==', '>', '>=', '<', '<=',
          ], ['&&', '||'], ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],

    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': ['error'],

    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': ['error'],

    // 禁止连续赋值
    'no-multi-assign': ['error'],

    // 禁止出现多行空行 --fix
    'no-multiple-empty-lines': [
      'error', {
        max: 1,
        maxEOF: 0,
      },
    ],

    // 禁用否定表达式
    'no-negated-condition': ['error'],

    // 禁用嵌套的三元表达式
    'no-nested-ternary': ['error'],

    // 禁用 Object 的构造函数
    'no-new-object': ['error'],

    // 禁用 tab
    'no-tabs': ['error'],

    // 禁用一元操作符 ++ 和 --（允许在 for 循环的最后一个表达式中使用 ++ 和 --）
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // 禁用行尾空格 --fix
    'no-trailing-spaces': ['error'],

    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': ['error'],

    // 禁止可以在有更简单的可替代的表达式时使用三元操作符,禁止条件表达式作为默认的赋值模式 --fix
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 禁止属性前有空白 --fix
    'no-whitespace-before-property': ['error'],

    // 在开始花括号之后和结束花括号之前强制一致的换行符
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        minProperties: 4,
      },
    ],

    // 要求花括号内有空格 (除了 {}) --fix
    'object-curly-spacing': ['error', 'always'],

    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error'],

    // 强制函数中的变量要么一起声明要么分开声明, 要求每个作用域的初始化的变量有多个变量声明 --fix
    'one-var': ['error', { initialized: 'never' }],

    // 强制操作符使用一致的换行符,换行符放在 ？: 之前 --fix
    'operator-linebreak': [
      'error', 'before', {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],

    // 禁止块内填充 --fix
    'padded-blocks': [
      'error', {
        blocks: 'never',
        switches: 'never',
        classes: 'never',
      },
    ],

    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    'prefer-object-spread': ['error'],

    // 要求对象字面量属性名称用引号括起来
    'quote-props': ['error', 'as-needed'],

    // 要求尽可能地使用单引号, 允许字符串使用反勾号 --fix
    quotes: ['error', 'single', { allowTemplateLiterals: true }],

    // 禁止使用分号代替 ASI --fix
    semi: ['error', 'always'],

    // 强制分号之前不使用，之后使用空格 --fix
    'semi-spacing': ['error'],

    // 强制分号的位置
    'semi-style': ['error'],

    // 块语句必须总是至少有一个前置空格 --fix
    'space-before-blocks': ['error', 'always'],

    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // 强制圆括号内没有空格 --fix
    'space-in-parens': ['error', 'never'],

    // 要求操作符周围有空格 --fix
    'space-infix-ops': ['error'],

    /*
     * 强制 words 一元操作符后有一个空格, nonwords 一元操作符之前或之后无空格 --fix
     * words - 适用于单词类一元操作符，例如：new、delete、typeof、void、yield
     * nonwords - 适用于这些一元操作符: -、+、--、++、!、!!
     */
    'space-unary-ops': [
      'error', {
        words: true,
        nonwords: false,
      },
    ],

    // 强制在注释中 // 或 /* 使用一致的空格 --fix
    'spaced-comment': [
      'error', 'always', {
        line: {
          markers: [
            '*package', '!', '/', ',', '=',
          ],
        },
        block: {
          balanced: true,
          markers: [
            '*package', '!', ',', ':', '::', 'flow-include',
          ],
          exceptions: ['*'],
        },
      },
    ],

    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': ['error'],

    // 禁止在一个标记的函数和它的模板字面量之间有空格 --fix
    'template-tag-spacing': ['error', 'never'],

    // 文件不能以 Unicode BOM 开头 --fix
    'unicode-bom': ['error', 'never'],
  },
};
