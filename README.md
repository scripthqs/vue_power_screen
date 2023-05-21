# PowerScreenVue

该项目为一个大屏可视化项目

1. 封装了 useScalePage 大屏适配 hook，原理是使用了 css3 的 scale 函数
2. 封装了 useEchart 图表 hook，统一管理 ECharts 图表，统一渲染器和销毁实例
3. 实现了饼图，对比折线图、柱状图，利用了渐变美化样式
4. 利用 animateMotion 和 mpath 实现了 svg 路径动画
5. svg 封装成 vue 组件时，注意：
   - 需要检查 svg 元素的 id 尽量唯一
   - 里面 image 引用的 base64 图片尽量替换成路径，可以将 base64 下载保存为 png 图片
   - 可以利用 css3 的 animation 可以做动画，常见的上下左右移动动画(translate)，闪烁动画(opacity)
   - 利用子绝父相，将元素定位到合适的位置，再配合动画实现烟花效果(translate + opacity)
6. 使用 CountUp.js 插件可以实现动态数字变化的效果
7. 使用 gsap 插件可以实现入场动画

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
