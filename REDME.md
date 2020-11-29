### 1 问题记录

1、wabpack  安装回4.x版本  webpack-cli 安装回3.x版本 

webpack-dev-server 才会生效

### 2 eslint

初始化

```bash
eslint --init
```

### 3 项目启动

```bash
npm run dev-web
```

### 4 husky 

代码在git commit 时会做eslint 检测， 原理就是在提交之前会提供一个钩子函数，git commit 后会触发这个钩子函数

### 使用

> 1 安装开发依赖

```bash
npm isntall --save-dev lint-staged
```
> 2 编写.huskyrc.js

```bash
// 个人理解提交代码时 触发lint-staged指令
module.exports = {
    'hooks': {
        'pre-commit': 'lint-staged',
    }
}
```

> 3 lint-staged 脚本

```bash
// "web/**/*.{js, jsx}" 针对web文件下的js、jsx文件 数组的脚本为一次执行
// cache 只检查已更改的文件
// fix 可以自动修复错误 
// git add 是把lint后的代码重新提交到缓存区 
"lint-staged": {
    "web/**/*.{js, jsx}": [
      "eslint --cache --fix",
      "git add"
    ]
  },
```

