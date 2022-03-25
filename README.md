# wechat-emoji-similar

## intstall(安装)

### npm

```
npm install wechat-emoji-similar
```

## use(使用)

```vue
<template>
  <WechatEmojiSimilar @handlerEmoji="handlerEmoji" />
</template>
<script>
data(){
  return{
    value:'',
    html:''
  }
},
methods: {
  handlerEmoji({row}){
    // 选择emoji表情的微信编码
    console.log(row.code)
    // 编译成需要显示的html 在vue中提供了 $parseText(code)的方法 无需额外引用 你可以将它放到你需要的地方
    this.html = this.$parseText(this.value)
    console.log(this.$parseText(this.value))
    // 还有html转码为微信编码的方法,仅适用于组件 $parseText(code) 方法编译后的html
    console.log(this.$replaceEmoji(this.html))

  }
}
</script>
```

## notice(注意)

```
 * 静态资源引用不成功的时候
   > 需要copy我的静态资源文件到public文件下,并且命名为emoji_png
```

[这是一个地址](https://github.com/gejunhao/wechat-emoji-similar.git).

## project

[github](https://github.com/gejunhao/wechat-emoji-similar.git).

<!-- ### Customize configuration -->

<!-- See [Configuration Reference](https://cli.vuejs.org/config/). -->
