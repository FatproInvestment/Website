import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FatBro Investment',
  tagline: '让你的钱包变胖',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fatbro.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FatproInvestment', // 通常是你的 GitHub 用户名或组织名
  projectName: 'Website', // 通常是你的仓库名

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 添加中文支持
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    localeConfigs: {
      'zh-CN': {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
    },
    path: 'i18n',
  },

  presets: [
    [
      'classic',
      {
        docs: false, // 禁用docs
        blog: false, // 禁用博客功能
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/investment-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {name: 'keywords', content: '投资, 分享, 金融, 文章, fatbro, investment, finance, articles'},
      {name: 'description', content: 'FatBro - 让你的钱包变胖'},
    ],
    navbar: {
      title: 'FatBro Investment',
      logo: {
        alt: 'FatBro Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/', label: '首页', position: 'left'},
        {to: '/tools', label: '工具', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
          queryString: '?locale=1',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Substack',
              href: 'https://fatbrozh.substack.com/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/fatbroCN',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/fatbroEN',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FatBro Investment.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // 部署设置
  trailingSlash: false,
};

export default config;
