module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    // parser: '@typescript-eslint/parser',
    // plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // "no-console": [1, {allow: ["warn", "error"]}], //允许 console.warn

        'indent': [2, 4],
        // 'vue/script-indent': [2, 4, {
        //   baseIndent: 1,
        //   switchCase: 1,
        // }],

        'semi': [2, 'always'], // 结尾分号
        '@typescript-eslint/semi': [2, 'always'],

        'no-alert': 1,

        'quotes': 0, // 引号类型 `` "" ''
        'eqeqeq': [2, 'always'], // 要求使用 === 和 !==

        'no-eq-null': 2, // 禁止对 null 使用 == 或 != 运算符
        'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
        'no-else-return': 2, // 如果 if 语句里面有 return,后面不能跟 else 语句
        "no-lonely-if": 2, // 禁止else语句内只有if语句

        'no-spaced-func': 2, // 函数调用时函数名与()之间不能有空格
        'space-before-function-paren': [2, 'always'], // 函数定义时括号前面要不要有空格
        'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
        // 'key-spacing': [2, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格

        'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}

        'no-undef-init': 2, // 变量初始化时不能直接给它赋值为undefined
        'no-unneeded-ternary': 2, // 禁止不必要的嵌套 let bool = answer === 1 ? true : false;
        'curly': [2, "all"], // 必须使用 if(){} 中的{}
        'no-trailing-spaces': 0, //
        'no-multiple-empty-lines': 0, //

        'max-depth': [2, 3],//嵌套块深度

        // "consistent-return": 0, // return 后面是否允许省略


    },

    // overrides: [
    //   {
    //     files: ["*.vue"],
    //     rules: {
    //       indent: "off",
    //     }
    //   }
    // ]
}
