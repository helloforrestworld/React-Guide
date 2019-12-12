const transform = require('./utils/transform')
const introPageSideBar = transform([{
  title: 'Basic',
  link: 'basic',
  children: [
    { title: 'basic1', link: 'basic1' },
    { title: 'basic2', link: 'basic2'}
  ],
},{
  title: 'Graduate',
  link: 'graduate',
  children: [
    { title: 'graduate1', link: 'graduate1' },
    { title: 'graduate2', link: 'graduate2'}
  ]
}])

module.exports = {
  base: `/`,
  title: 'React Guidebook',
  themeConfig: {
    search: true,
    searchMaxSuggestions: 15,
    sidebarDepth: 0,
    logo: '/images/favicon.png',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '目录',
        items: [
          { text: '介绍', link: '/intro/' }
        ],
      },
      {
        text: '更多',
        items: [
          { text: '参考', link: 'https://tsejx.github.io/CSS-Guidebook/' }
        ],
      },
      { text: 'Wiki', link: 'https://github.com/helloforrestworld/React-Guide/wiki' },
    ],
    sidebar: {
      '/intro/': [{
        title: '项目目录',
        collapsable: true,
        children: [
          ['/', '主页'],
          '/intro/'
        ]
      }, ...introPageSideBar],
      '/': [{
        title: '项目目录',
        collapsable: false,
        children: [
          ['/', '主页'],
          '/intro/'
        ]
      }]
    }
  },
  plugins: [
    ['@vuepress/google-analytics', { ga: 'UA-138047269-1' }],
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    'vuepress-plugin-baidu-autopush',
  ],
};
