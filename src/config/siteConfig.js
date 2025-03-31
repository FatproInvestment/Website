/**
 * 网站配置文件
 * 用于管理网站的各种配置，如工具信息、Twitter和iframe配置等
 */

// 社交媒体配置
const socialMediaConfig = {
  // Twitter配置
  twitter: {
    'zh-CN': {
      username: 'fatbroCN',
      url: 'https://twitter.com/fatbroCN',
      label: 'Twitter'
    },
    'en': {
      username: 'fatbroEN',
      url: 'https://twitter.com/fatbroprofits',
      label: 'Twitter'
    }
  },
  // Substack配置
  substack: {
    'zh-CN': {
      url: 'https://fatbrozh.substack.com/',
      label: 'Substack中文'
    },
    'en': {
      url: 'https://fatbro.substack.com/',
      label: 'Substack'
    }
  }
};

// 工具配置
const toolsConfig = [
  {
    id: 1,
    name: {
      'zh-CN': 'FatBro Alpha信息交流区',
      'en': 'FatBro Alpha Info Channel'
    },
    description: {
      'zh-CN': '立即获得Fatbro精选的日常投研资讯，高息理财和交易机会',
      'en': 'Get instant access to Fatbro\'s daily investment research updates, high-yield financial products, and trading opportunities.'
    },
    icon: 'img/tools/telegram.png',
    url: {
      'zh-CN': 'https://t.me/FatBroCN',
      'en': 'https://t.me/fatbroEN'
    },
    featured: true,
  },
  {
    id: 2,
    name: {
      'zh-CN': '推特政治人物发币CA监控电报群',
      'en': 'Twitter Political Figure CA Monitoring Telegram Bot'
    },
    description: {
      'zh-CN': '当推政治人物或者明星在twitter上发布Solana CA或者提到Crypto关键字信息时，会自动提醒推送信息',
      'en': 'When a political figure or celebrity posts a Solana CA or mentions the Crypto keyword on Twitter, it will automatically notify and push information.'
    },
    icon: 'img/tools/political1.png',
    url: {
      'zh-CN': 'https://t.me/fatbro_twitter_political_bot',
      'en': 'https://t.me/fatbro_twitter_political_bot_en'
    },
    featured: true,
  },
  {
    id: 3,
    name: {
      'zh-CN': 'BSC热点监控',
      'en': 'BSC Hotspot Monitoring'
    },
    description: {
      'zh-CN': '当前已监控CZ和Heyi的Twitter信息留和CZ的钱包地址动向，可以提供快速的BSC上的MEME的角度信息',
      'en': 'Currently monitoring CZ and Heyi\'s Twitter information and wallet address movements, providing quick BSC MEME angle information.'
    },
    icon: 'img/tools/binance.png',
    url: {
      'zh-CN': 'https://t.me/bsc_cz_heyi_monitor_by_fatbro',
      'en': 'https://t.me/bsc_cz_heyi_monitor_by_fatbro'
    },
    featured: true,
  },
  {
    id: 4,
    name: {
      'zh-CN': '必做空投任务信息站-Alpha Hub',
      'en': 'Alpha Hub - Must do Air Drop Task'
    },
    description: {
      'zh-CN': '仅仅会展示那些确定性强，任务少，收益概率高的项目空投信息平台，尽可能减少信息过载',
      'en': 'Only show projects with high certainty, low tasks, and high return probability'
    },
    icon: 'img/tools/airdrop.png',
    url: {
      'zh-CN': 'https://hub.degate.com/',
      'en': 'https://hub.degate.com/'
    },
    featured: true,
  },  {
    id: 5,
    name: {
      'zh-CN': '网格交易利器 - DeGate',
      'en': 'Grid Trading Tool - DeGate'
    },
    description: {
      'zh-CN': '拥有强大网格策略功能的Dex',
      'en': 'A Dex with powerful grid strategy functions.'
    },
    icon: 'img/tools/degate.png',
    url: {
      'zh-CN': 'https://app.degate.com/?utm_source=fatbro_website',
      'en': 'https://app.degate.com/?utm_source=fatbro_website'
    },
    featured: true,
  },
];

// Twitter账号配置
const twitterConfig = {
  'zh-CN': 'fatbroCN', // 中文环境下的Twitter账号
  'en': 'fatbroprofits', // 英文环境下的Twitter账号
};

// iframe配置
const iframeConfig = [
  // {
  //   id: 'crypto-chart',
  //   width: '1', // 1表示100%宽度
  //   url: 'https://coinmarketcap.com/widget/price-marquee/',
  //   height: '300px',
  //   title: {
  //     'zh-CN': '加密货币行情',
  //     'en': 'Cryptocurrency Market'
  //   }
  // },
  // {
  //   id: 'stock-markets',
  //   width: '0.5', // 0.5表示50%宽度
  //   url: 'https://www.tradingview.com/widget/symbol-overview/?symbols=NASDAQ%3AAAPL%2CNASDAQ%3AMSFT%2CNASDAQ%3AAMZN%2CNASDAQ%3AGOOGL&theme=light',
  //   height: '400px',
  //   title: {
  //     'zh-CN': '热门股票',
  //     'en': 'Popular Stocks'
  //   }
  // },
  // {
  //   id: 'crypto-widget',
  //   width: '0.5', // 另一个50%宽度的iframe
  //   url: 'https://www.tradingview.com/widget/crypto-mkt-screener/?theme=light',
  //   height: '400px',
  //   title: {
  //     'zh-CN': '加密货币筛选器',
  //     'en': 'Crypto Screener'
  //   }
  // },
];

// 导出所有配置
export {
  toolsConfig,
  twitterConfig,
  iframeConfig,
  socialMediaConfig
};

// 默认导出所有配置
export default {
  tools: toolsConfig,
  twitter: twitterConfig,
  iframes: iframeConfig,
  social: socialMediaConfig
}; 