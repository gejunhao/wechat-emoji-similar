const code1 = ['/::)', '/::~', '/::B', '/::|', '/:8-)', '/::<', '/::$', '/::X']
const code2 = ['/::Z', "/::'(", '/::-|', '/::@', '/::P', '/::D', '/::O', '/::(']
const code3 = ['/:--b', '/::Q', '/::T', '/:,@P', '/:,@-D', '/::d', '/:,@o', '/:|-)']
const code4 = ['/::!', '/::>', '/::,@', '/::-S', '/:?', '/:,@x', '/:,@@', '/:,@!']
const code5 = ['/:!!!', '/:xx', '/:bye', '/:wipe', '/:dig', '/:handclap', '/:B-)', '/:@>']
const code6 = ['/:>-|', '/:P-(', "/::'|", '/:X-)', '/::*', '/:8*', '[Happy]', '[Sick]']
const code7 = ['[Flushed]', '[Lol]', '[Terror]', '[LetDown]', '[Duh]', '[Hey]', '[Facepalm]', '[Smirk]']
const code8 = ['[Smart]', '[Concerned]', '[Yeah!]', '[Onlooker]', '[GoForIt]', '[Sweats]', '[OMG]', '[Emm]']
const code9 = ['[Respect]', '[Doge]', '[NoProb]', '[MyBad]', '[Wow]', '[Boring]', '[Awesome]', '[LetMeSee]']
const code10 = ['[Sigh]', '[Hurt]', '[Broken]', '/:showlove', '/:heart', '/:break', '/:hug', '/:strong']
const code11 = ['/:weak', '/:share', '/:v', '/:@)', '/:jj', '/:@@', '/:ok', '[Worship]']
const code12 = ['/:beer', '/:coffee', '/:cake', '/:rose', '/:fade', '/:pd', '/:bome', '/:shit']
const code13 = ['/:moon', '/:sun', '[Party]', '/:gift', '[Packet]', '[Rich]', '[Blessing]', '[Fireworks]']
const code14 = ['[爆竹]', '/:pig', '/:jump', '/:shake', '/:circle']

export const emojis_text = {
  '[微笑]': '0',
  '[撇嘴]': '1',
  '[色]': '2',
  '[发呆]': '3',
  '[得意]': '4',
  '[流泪]': '5',
  '[害羞]': '6',
  '[闭嘴]': '7',
  '[睡]': '8',
  '[大哭]': '9',
  '[尴尬]': '10',
  '[发怒]': '11',
  '[调皮]': '12',
  '[呲牙]': '13',
  '[惊讶]': '14',
  '[难过]': '15',
  '[破涕为笑]': '16',
  '[囧]': '17',
  '[抓狂]': '18',
  '[吐]': '19',
  '[偷笑]': '20',
  '[愉快]': '21',
  '[白眼]': '22',
  '[傲慢]': '23',
  '[失望]': '24',
  '[困]': '25',
  '[惊恐]': '26',
  '[无语]': '27',
  '[憨笑]': '28',
  '[悠闲]': '29',
  '[嘿哈]': '30',
  '[咒骂]': '31',
  '[疑问]': '32',
  '[嘘]': '33',
  '[晕]': '34',
  '[脸红]': '35',
  '[衰]': '36',
  '[骷髅]': '37',
  '[敲打]': '38',
  '[再见]': '39',
  '[擦汗]': '40',
  '[抠鼻]': '41',
  '[鼓掌]': '42',
  '[捂脸]': '43',
  '[坏笑]': '44',
  '[恐惧]': '45',
  '[右哼哼]': '46',
  '[口罩]': '47',
  '[鄙视]': '48',
  '[委屈]': '49',
  '[快哭了]': '50',
  '[阴险]': '51',
  '[亲亲]': '52',
  '[笑脸]': '53',
  '[可怜]': '54',
  '[奸笑]': '55',
  '[机智]': '56',
  '[皱眉]': '57',
  '[耶]': '58',
  '[吃瓜]': '59',
  '[加油]': '60',
  '[汗]': '61',
  '[天啦]': '62',
  '[社会]': '63',
  '[旺柴]': '64',
  '[好的]': '65',
  '[打脸]': '66',
  '[哇]': '67',
  '[翻白眼]': '68',
  '[666]': '69',
  '[让我看看]': '70',
  '[叹气]': '71',
  '[苦涩]': '72',
  '[裂开]': '73',
  '[Emm]': '74',
  '[嘴唇]': '75',
  '[爱心]': '76',
  '[心碎]': '77',
  '[拥抱]': '78',
  '[强]': '79',
  '[弱]': '80',
  '[握手]': '81',
  '[胜利]': '82',
  '[抱拳]': '83',
  '[勾引]': '84',
  '[拳头]': '85',
  '[OK]': '86',
  '[合十]': '87',
  '[啤酒]': '88',
  '[咖啡]': '89',
  '[蛋糕]': '90',
  '[玫瑰]': '91',
  '[凋谢]': '92',
  '[菜刀]': '93',
  '[炸弹]': '94',
  '[便便]': '95',
  '[月亮]': '96',
  '[太阳]': '97',
  '[庆祝]': '98',
  '[礼物]': '99',
  '[红包]': '100',
  '[發]': '101',
  '[福]': '102',
  '[烟花]': '103',
  '[爆竹]': '104',
  '[猪头]': '105',
  '[跳跳]': '106',
  '[发抖]': '107',
  '[转圈]': '108',
}
export const emojis_code = [...code1, ...code2, ...code3, ...code4, ...code5, ...code6, ...code7, ...code8, ...code9, ...code10, ...code11, ...code12, ...code13, ...code14]
// 生成wangeditor需要的数组
export const wangEditorEmoji = () => {
  const arr = []
  emojis_code.forEach((item, index) => {
    const obj = {
      alt: `{{${item}}}`,
      src: `/emojis_png/${index + 1}.png`,
    }
    arr.push(obj)
  })
  return arr
}
