<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  created() {
    console.log(111111111);
  }
};
</script>
<style>
* {
  /* 这个是默认字体 */
  font-family: -apple-system, 'Noto Sans', 'Helvetica Neue', Helvetica,
    'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB',
    'Noto Sans CJK SC', 'Source Han Sans SC', 'Source Han Sans CN',
    'Microsoft YaHei', 'Wenquanyi Micro Hei', 'WenQuanYi Zen Hei', 'ST Heiti',
    SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif;

  /* 这个是带字体的 */
  /* font-family: Baskerville, 'Times New Roman', 'Liberation Serif', STFangsong,
    FangSong, FangSong_GB2312, 'CWTEX\-F', serif; */
  padding: 0px;
  margin: 0px;
}
</style>
