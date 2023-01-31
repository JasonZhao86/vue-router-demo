<template>
  <div>
    <div class="footer_wrap">
      <span @click="btn('/find')">发现音乐</span>
      <span @click="btn('/my', 'my')">我的音乐</span>
      <span @click="onBtn">朋友-小传</span>
      <span @click="twoBtn">朋友-小智</span>
    </div>
    <div class="top">
      <!-- 使用router-view挂载点显示切换的路由 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(pathName, routeName) {
      if (routeName) {
        this.$router.push({
          name: routeName,
        })
        return
      }
      this.$router.push({
        path: pathName,
      })
    },
    onBtn() {
      this.$router.push({
        path: '/part',
        query: {
          name: '小传',
        },
      })
    },
    twoBtn() {
      this.$router.push({
        name: 'part_username',
        params: {
          username: '小智',
        },
      })
    },
  },
}
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.top {
  padding-top: 62px;
}
.footer_wrap .span-active {
  color: white;
  background: black;
}
</style>
