<template>
  <div
    class="panel"
    :style="{'width':`${width*columns+10}`+'px',height:`${height*row+20}`+'px','overflow-Y':'scroll'}"
  >
    <div class="panel-content">
      <a
        v-for="(item,index) in emojis_path"
        :key="index"
        :ref="'emoji-element'+'-'+index"
        :name="item.name"
        class="emojis-icon icon-background"
        :style="{'display':'inline-block','width':width+'px','height': height+'px','background':'url('+`${item.path}`+') no-repeat','background-position':'center center','background-size':'80% 80%'}"
        @click="handlerEmoji(item,index)"
      ></a>
    </div>

  </div>
</template>

<script>
import { emojis_code } from './js/filename'
export default {
  name: 'WechatEmojiSimilar',
  props: {
    _path: {
      type: String,
      default: '/emojis_png/'
    },
    width: {
      type: Number,
      default: 30
    },
    height: {
      type: Number,
      default: 30
    },
    columns: {
      type: Number,
      default: 8
    },
    row: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {}
  },
  computed: {
    emojis_path() {
      const code_arr = []
      emojis_code.forEach((item, index) => {
        const obj = {
          index: index,
          code: item,
          path: '/emojis_png' + '/' + (index + 1) + '.png'
        }
        code_arr.push(obj)
      })
      return code_arr
    }
  },
  mounted() {},
  methods: {
    handlerEmoji(row, index) {
      const scope = {
        row: row,
        $el: this.$refs['emoji-element' + '-' + index][0]
      }
      this.$emit('handlerEmoji', scope)
    }
  }
}
</script>

<style scoped>
.panel .panel-content .emojis-icon {
  border-radius: 3px;
}
.panel .panel-content .emojis-icon:hover {
  background-color: #f0f0f0 !important;
}
.panel::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.panel::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 6px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #e7e5e5;
}
.panel::-webkit-scrollbar-track {
  /*滚动条里面轨道*/

  border-radius: 10px;
  background: #fafafa;
}
</style>
