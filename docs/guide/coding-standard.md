# 代码规范

## 准备

代码规范主要基于 ESLint 和 stylelint 运行，所以为保证代码风格统一，请统一使用 [VS Code](https://code.visualstudio.com/) 做为开发工具，并安装以下扩展：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 或 [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

安装完成以上依赖，便可查看最终效果：shift + option + F 组合键即可格式化代码。

## 配置

配置文件主要有 3 处，分别为 Prettier 配置（`.prettierrc.js`）、ESLint 配置（`.eslintrc.js` 和 `.eslintignore`）、StyleLint 配置（`.stylelintrc` 和 `.stylelintignore`）。
