/*
 * vscode 中安装prettierrc插件 需要在settings.josn文件中设置如下配置才能生效
 * "editor.formatOnSave": true,
 */

module.exports = {

    // 一行最多 120 字符
    printWidth: 150,

    // tab缩进大小
    tabWidth: 2,

    // 是否使用tab缩进
    useTabs: true,

    // 使用分号
    semi: false,

    //是否用单引号 fale 双引号 true 单引号
    // 对jsx语法无效
    singleQuote: true,

    // 末尾需要有逗号
    trailingComma: 'none',

    // 对象中的空格 默认为true
    // true : { foo: bar }
    // false: {foo:bar}
    bracketSpacing: true,

    // 箭头函数参数括号 可选avoid| always
    // avoid 能省略时就省略
    // always 总是有括号
    arrowParens: 'avoid',

    // jsx标签闭合位置
    // fasle: <div
    //            className=""
    //            style={{}}
    //         >
    // true: <div
    //            className=""
    //            style={{}} >

    jsxBracketSameLine: false,

    // elsintIntergration: false
}

