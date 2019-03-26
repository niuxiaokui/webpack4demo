<template>
  <div class="index" style="text-align: center;">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24">
        <img src="../../assets/images/logo.png" alt="">
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24">
        <el-button type="primary" @click="open">
          <span class="iconfont icon-child" style="font-size: 30px;"></span>
        </el-button>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24">
        <a class="aClass" :href="`${baseUrl}home.html`">Go to home.html</a>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageName: "home",
      baseUrl: process.env.BASEURL,
    };
  },
  methods: {
    open() {
      const h = this.$createElement;
      this.$notify({
        title: "标题",
        message: h("i", { style: "color: red" }, "提示信息"),
      });
    },
  },
  created() {
    console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
    console.log("lodash版本：" + _.VERSION);
    console.log("jQuery版本：" + $.fn.jquery);
  },
};
</script>

<style lang="stylus">
@import '../../assets/style/varibles.styl'
@import './index.styl'
.aClass
  line-height 1rem
  color $textColorWhite
</style>
