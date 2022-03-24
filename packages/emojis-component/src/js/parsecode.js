import { emojis_code, emojis_text } from './filename'
import { escapecode } from './escapecode'
const keys = Object.keys(emojis_text)
const searchTable = new Array([])
keys.forEach((item, index) => {
  searchTable[emojis_code[index]] = item
})
export function parseText(text) {
  // var flag = false // 判定字符解析模式
  var _text = JSON.parse(JSON.stringify(text))
  emojis_code.forEach((item, index) => {
    const regCode = new RegExp('(' + escapecode(item) + ')', 'g')
    if (regCode.test(_text)) {
      // flag = true
      const path = '/emojis_png' + '/' + (index + 1) + '.png'
      const img = `<span class="emoji-span" style="display:inline-block"><img class="wx-emoji" name="{{${item}}}" code-type="{emojis_code}" src="${path}" ref="" style="display:inline-block;width:18px;height:18px;vertical-align:middle"></span>`
      _text = _text.replace(regCode, img)
    } else {
      return
    }
  })
  return _text
}
export function replaceEmoji(t) {
  var text = t.replaceAll('<span class="emoji-span" style="display:inline-block">', '')
  text = text.replaceAll('</span>', '')
  const reg = /<img class="wx-emoji" name="{{.*?}}".*?>/g
  const flag = reg.test(text)
  if (flag) {
    var _text = text
    var emoji_code = [] // 存放取出的code
    const nameReg = /{{.*?}}/g
    const arr = _text.match(reg)
    arr.forEach((item) => {
      emoji_code = item.match(nameReg)
      var a = emoji_code[0].replace('{{', '')
      a = a.replace('}}', '')
      _text = _text.replace(item, a)
    })
    return _text
  } else {
    return text
  }
}
