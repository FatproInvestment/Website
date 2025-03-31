# FatBro Investment Website

这是 FatBro Investment 的官方网站，使用 [Docusaurus](https://docusaurus.io/) 构建。

## 特性

- 支持中英文双语内容
- 内置投资工具箱
- RSS 资讯订阅
- 响应式设计，支持移动端和桌面端
- 自动部署到 GitHub Pages

## 开发

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn
```

### 本地开发

```bash
# 启动中文版开发服务器
npm run start
# 或
yarn start

# 启动英文版开发服务器
npm run start:en
# 或
yarn start:en
```

此命令会启动本地开发服务器并打开浏览器窗口。大多数修改会实时更新，无需重启服务器。

### 构建

```bash
# 构建网站
npm run build
# 或
yarn build
```

此命令会在 `build` 目录生成静态内容，可以使用任何静态内容托管服务部署。

### 部署

如果要部署到 GitHub Pages:

1. 编辑 `docusaurus.config.js` 中的组织名和项目名
2. 在终端运行:

```bash
# 使用 GitHub token
GIT_USER=<Your GitHub username> yarn deploy

# 或使用脚本
yarn deploy:github  # 记得先在 package.json 中设置你的 GitHub 用户名
```

## 文件结构

- `/src/pages/` - 网站主要页面
- `/i18n/` - 国际化翻译文件
- `/static/` - 静态资源（图片、字体等）
- `/src/css/` - 自定义 CSS 样式
- `/src/config/` - 网站配置文件
- `/src/components/` - React 组件
- `/src/theme/` - 自定义主题组件

## 自定义域名

本网站配置了自定义域名 `fatbro.io`。在 `static/CNAME` 文件中设置。

## 许可证

Copyright © FatBro Investment。保留所有权利。
