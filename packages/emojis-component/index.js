// 导入组件，组件必须声明 name
import WechatEmojiSimilar from './src/index.vue'
// 为组件提供 install 安装方法，供按需引入
WechatEmojiSimilar.install = function (Vue) {
  Vue.component(WechatEmojiSimilar.name, WechatEmojiSimilar)
}
// 默认导出组件
export default WechatEmojiSimilar
