// 导出所有组件
import emojisPanelComponent from './emojis-component/index.js'
import { parseText, replaceEmoji } from './emojis-component/src/js/parsecode'

// 存储组件列表
const components = [emojisPanelComponent]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$parseText = parseText
  Vue.prototype.$replaceEmoji = replaceEmoji
}
// 判断是否直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  // 具体的组件列表
  emojisPanelComponent,
}
