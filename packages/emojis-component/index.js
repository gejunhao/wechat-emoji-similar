// 导入组件，组件必须声明 name
import emojisPanelComponent from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
emojisPanelComponent.install = function (Vue) {
  Vue.component(emojisPanelComponent.name, emojisPanelComponent)
}
// 默认导出组件
export default emojisPanelComponent
