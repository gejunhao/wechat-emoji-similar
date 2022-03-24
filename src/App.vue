<template>
  <div id="app">

    <div class="wx-chat">
      <div class="wx-chat-input">

        <el-popover
          placement="bottom-end"
          trigger="click"
        >
          <EmojisPanelComponent @handlerEmoji="handlerEmoji" />

          <div
            slot="reference"
            style="padding:0 10px 0 0;"
          >
            <!-- <i
              class="el-icon-circle-plus-outline"
              style="color:#06c021;font-size:26px;cursor: pointer;"
            ></i> -->
            <el-button type="plain">表情</el-button>
          </div>
        </el-popover>
        <div style="width:300px;margin-right:1rem">
          <el-input
            v-model="value"
            placeholder="请输入"
          ></el-input>
        </div>
        <el-button
          type="primary"
          @click="send"
        >发送</el-button>
        <el-button
          type="danger"
          @click="reset"
        >重置</el-button>
      </div>
      <div class="wx-chat-content">
        <ul>
          <li
            v-for="(item,index) in content"
            :key="index"
          >
            <div v-html="item"></div>
            <i
              class="el-icon-document-checked"
              style="font-size:26px;cursor:pointer;color:#06c021"
              @click="alertCode(item)"
            ></i>
          </li>

        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: '',
      content: []
    }
  },
  methods: {
    handlerEmoji({ row }) {
      console.log(row.code)
      this.value = row.code
    },
    reset() {
      this.value = ''
      this.content = []
    },
    send() {
      // console.log(this.$parseText(this.value))
      const html = this.$parseText(this.value)
      this.content.push(html)
      this.value = ''
    },
    alertCode(item) {
      alert('微信code编码为' + this.$replaceEmoji(item))
    }
  }
}
</script>

<style>
html {
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wx-chat {
  display: inline-block;
  width: auto;
  margin: 0 auto;
}
.wx-chat-input {
  display: flex;
  align-items: center;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.wx-chat-content ul li {
  text-align: left;
  padding: 10px 10px;
  margin: 20px 0 20px 0;
  line-height: 32px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
}
.wx-chat-content ul li .emoji-span {
  display: inline-block;
}
.wx-chat-content ul li .emoji-span img {
  vertical-align: middle;
}
</style>
