export default {
  // ssr: {},
  // hash: true,
  title: "Medisys UI Doc",
  // mode: "site",
  favicon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
  base: "/medisysinnovation",
  publicPath: "/static/",
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // menus: {
  //   "/zh-CN/guide": [
  //     {
  //       title: "介绍",
  //       children: ["guide/index", "guide/getting-started"],
  //     },
  //     {
  //       title: "写组件 Demo",
  //       children: [
  //         "guide/demo-principle",
  //         "guide/demo-types",
  //         "guide/control-demo-render",
  //       ],
  //     },
  //     {
  //       title: "控制菜单和路由生成",
  //       children: [
  //         "guide/control-route-generate",
  //         "guide/control-menu-generate",
  //         "guide/control-nav-generate",
  //       ],
  //     },
  //     {
  //       title: "更多用法",
  //       children: ["guide/mode", "guide/multi-language", "guide/seo"],
  //     },
  //     {
  //       title: "其他",
  //       children: ["guide/migration", "guide/faq"],
  //     },
  //   ],
  //   "/guide": [
  //     {
  //       title: "Introducation",
  //       children: ["guide/index", "guide/getting-started"],
  //     },
  //     {
  //       title: "How to write a demo",
  //       children: [
  //         "guide/demo-principle",
  //         "guide/demo-types",
  //         "guide/control-demo-render",
  //       ],
  //     },
  //     {
  //       title: "Control and generate",
  //       children: [
  //         "guide/control-route-generate",
  //         "guide/control-menu-generate",
  //         "guide/control-nav-generate",
  //       ],
  //     },
  //     {
  //       title: "More usage",
  //       children: ["guide/mode", "guide/multi-language", "guide/seo"],
  //     },
  //     {
  //       title: "Others",
  //       children: ["guide/migration", "guide/faq"],
  //     },
  //   ],
  // },
  // navs: {
  //   "en-US": [
  //     null,
  //     { title: "GitHub", path: "https://github.com/umijs/dumi" },
  //     { title: "Changelog", path: "https://github.com/umijs/dumi/releases" },
  //   ],
  //   "zh-CN": [
  //     null,
  //     { title: "GitHub", path: "https://github.com/umijs/dumi" },
  //     { title: "更新日志", path: "https://github.com/umijs/dumi/releases" },
  //   ],
  // },
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      },
    ],
  ],
  // scripts: ["https://v1.cnzz.com/z_stat.php?id=1278653578&web_id=1278653578"],
  // analytics: {
  //   ga: "UA-128069695-2",
  // },
  // styles: ["a[title=站长统计] { display: none; }"],
  // exportStatic: {},
};
