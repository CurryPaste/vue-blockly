
import * as Blockly from 'blockly/core'
import * as hans from 'blockly/msg/zh-hans'
import Vue from 'vue'
Vue.config.ignoredElements = ['field', 'block', 'category', 'xml', 'mutation', 'value', 'sep', 'next', 'statement', 'arg']

export const defaultOption = {
  media: 'media/', // 从页面（或帧）到 Blockly 媒体目录的路径。 默认值为 "https://blockly-demo.appspot.com/static/media/"。

  horizontalLayout: true, // 工具箱水平
  toolboxPosition: 'end', // 工具箱在底部
  oneBasedIndex: true, // 如果 true 列表和字符串操作应从 1 编入索引，则如果 false 来自 0，则应将其编入索引。默认值为 true
  readOnly: false, // true，则禁止用户修改。禁止显示工具箱和垃圾桶
  renderer: 'zelos', // 一种类似于刮刮器的渲染程序
  scrollbars: true, // 工作区滚动方式
  sounds: true, // 声音
  theme: 'deuteranopia', // 主题  deuteranopia/protanopia/tritanopia https://developers.google.com/blockly/guides/configure/web/themes#block_style
  trashcan: true, // 垃圾箱

  move: {
    scrollbars: {
      horizontal: true,
      vertical: true
    },
    drag: true,
    wheel: true
  }, // 移动方式，滚动条、拖动、鼠标滚轮
  grid: {
    spacing: 50, // 间距
    length: 3,
    colour: '#ccc',
    snap: true// 网格吸附
  }, // 画布网格
  zoom: {
    controls: true,
    wheel: false, // 鼠标滚动缩放
    startScale: 1.0,
    maxScale: 4,
    minScale: 0.7,
    scaleSpeed: 1.2,
    pinch: true // 触摸设备上启用双指张合缩放功能
  }, // 配置缩放行为
  // https://developers.google.com/blockly/guides/configure/web/toolbox
  toolbox: undefined
}
Blockly.setLocale(hans)

/**
 * 添加自定义块
 *
 * - 先看内置字段有没有满足的
 * https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/overview
 *
 * - 没有的话使用 开发者工具生成
 * 文档 https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools
 * 工具 https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
 *
 * - 自定义编写
 * https://developers.google.com/blockly/guides/configure/web/custom-blocks
 */
