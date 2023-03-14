import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/nav/": [
    {
      text: "链接🔗",
      items: [
        { text: "JavaScript基础", link: "/module/js_junior/01_什么是js" },
        { text: "JavaScript进阶", link: "/module/js_Senior/01_彻底搞清this" },
        { text: "Vue", link: "/module/vue/01_初见Vue大魔王" },
        { text: "React", link: "/module/react/01_邂逅react" },
        { text: "前端工程化", link: "/module/ftdEnd/01_什么是工程化" },
        { text: "node", link: "/module/node/01_邂逅node" },
      ],
    },
  ],
  // "/mdFile/htmlCss/": [
  //   {
  //     text: "HTMLCss",
  //     items: [
  //       { text: "环境配置", link: "/mdFile/htmlCss/01 环境配置" },
  //       { text: "网站和网页", link: "/mdFile/htmlCss/02 网站和网页" },
  //       {
  //         text: "浏览器和浏览器内核",
  //         link: "/mdFile/htmlCss/03 浏览器和浏览器内核",
  //       },
  //       { text: "邂逅html", link: "/mdFile/htmlCss/04 邂逅html" },
  //       {
  //         text: "HTML结构、元素、类型",
  //         link: "/mdFile/htmlCss/05 HTML结构、元素、类型",
  //       },
  //       { text: "HTML高级元素", link: "/mdFile/htmlCss/06 HTML高级元素" },
  //       { text: "HTML补充", link: "/mdFile/htmlCss/07 HTML补充" },
  //       { text: "邂逅Css", link: "/mdFile/htmlCss/08 邂逅Css" },
  //       { text: "编写Css样式", link: "/mdFile/htmlCss/09 编写Css样式" },
  //       { text: "Css常用属性", link: "/mdFile/htmlCss/10 Css常用属性" },
  //       { text: "Css字体", link: "/mdFile/htmlCss/11 Css字体" },
  //       { text: "Css文本", link: "/mdFile/htmlCss/12 Css文本" },
  //       { text: "Css选择器", link: "/mdFile/htmlCss/13 Css选择器" },
  //       { text: "Css盒子模型", link: "/mdFile/htmlCss/14 Css盒子模型" },
  //       {
  //         text: "Css属性的继承与层叠",
  //         link: "/mdFile/htmlCss/15 Css属性的继承与层叠",
  //       },
  //       { text: "Css元素的隐藏", link: "/mdFile/htmlCss/16 Css元素的隐藏" },
  //       { text: "Css设置背景", link: "/mdFile/htmlCss/17 Css设置背景" },
  //       { text: "Css元素定位", link: "/mdFile/htmlCss/18 Css元素定位" },
  //       { text: "Css元素浮动", link: "/mdFile/htmlCss/19 Css元素浮动" },
  //       { text: "flex布局", link: "/mdFile/htmlCss/20 flex布局" },
  //       {
  //         text: "tranfrom、animation",
  //         link: "/mdFile/htmlCss/21 tranfrom、animation",
  //       },
  //       {
  //         text: "vertical-align",
  //         link: "/mdFile/htmlCss/22 vertical-align",
  //       },
  //       { text: "less-sass", link: "/mdFile/htmlCss/23 less-sass" },
  //       { text: "Css单位、视口", link: "/mdFile/htmlCss/24 Css单位、视口" },
  //       { text: "Grid布局", link: "/mdFile/htmlCss/25 Grid布局" },
  //       { text: "Css补充", link: "/mdFile/htmlCss/26 Css补充" },
  //       {
  //         text: "Css垂直水平居中",
  //         link: "/mdFile/htmlCss/27 Css垂直水平居中",
  //       },
  //     ],
  //   },
  // ],

  "/module/js_junior/": [
    {
      text: "JavaScript基础",
      items: [
        {
          text: "编程语言发展历史与JS的诞生",
          link: "/module/js_junior/01_什么是js",
        },
        
      ],
    },
  ],

  "/module/js_Senior/": [
    {
      text: "JavaScript进阶",
      items: [
        {
          text: "this指向",
          link: "/module/js_Senior/01_彻底搞清this",
        },
        
      ],
    },
  ],
  "/module/vue/": [
    {
      text: "Vue",
      items: [
        {
          text: "初识Vue大魔王",
          link: "/module/vue/01_初见Vue大魔王",
        },
      ],
    },
  ],
  "/module/react/": [
    {
      text: "React",
      items: [
        {
          text: "为什么要学React",
          link: "/module/react/01_邂逅react",
        },
      ],
    },
  ],
  "/module/ftdEng/": [
    {
      text: "前端工程化",
      items: [
        {
          text: "工程化",
          link: "/module/ftdEng/01_什么是工程化",
        },
        // {
        //   text: "javaScript模块化开发",
        //   link: "/mdFile/ftdEng/02 javaScript模块化开发",
        // },
        // {
        //   text: "包管理工具",
        //   link: "/mdFile/ftdEng/03 包管理工具",
        // },
        // {
        //   text: "webpack基础",
        //   link: "/mdFile/ftdEng/04 webpack基础",
        // },
        // {
        //   text: "webpack中的loader和plugin",
        //   link: "/mdFile/ftdEng/05 webpack中的loader和plugin",
        // },
        // {
        //   text: "webpack搭建本地服务器",
        //   link: "/mdFile/ftdEng/06 webpack搭建本地服务器",
        // },
        // {
        //   text: "git版本控制工具",
        //   link: "/mdFile/ftdEng/07 git版本控制工具",
        // },
      ],
    },
  ],
  "/module/node": [
    {
      text: "node",
      items: [
        {
          text: "内功心法-node",
          link: "/module/node/01_邂逅node",
        }
      ],
    },
  ]
};
