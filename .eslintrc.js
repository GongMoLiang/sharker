module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true, // node运行环境检测
    },
    // eslint 拓展
    "extends": [
        "eslint:recommended", // eslint 推荐的一套
        "plugin:react/recommended" // react有关的eslint 规则
    ],
    // 全局变量
    // "globls": {
    //     "_": true, // 忽略使用lodash报错
    // },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"  // 我的理解是 对应eslint-plugin-react这个开发依赖
    ],
    // eslint 额外配置的规则
    "rules": {
        "indent": ["error", 4],
    }
};