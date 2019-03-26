<template>
  <el-container>
    <el-header>
      当前{{pageName}}
    </el-header>
    <el-main>
      <el-button>
        <a :href="`${baseUrl}index.html`">Go to index.html</a>
      </el-button>
      <el-button>
        <router-link to="/homePage1">Go to homePage1</router-link>
      </el-button>
      <el-button>
        <router-link to="/homePage2">Go to homePage2</router-link>
      </el-button>
    </el-main>
    <el-footer>
      <temp :pageName="pageName"></temp>
    </el-footer>
  </el-container>
</template>

<script>
import temp from "@/components/template/template.vue";
export default {
  name: "homeIndex",
  data() {
    return {
      pageName: "homeIndex",
      baseUrl: process.env.BASEURL,
    };
  },
  created() {
    this.$http.post("api/test", {
      data: "test",
    }).then(res => {
      if (res.data.success) {
        console.log(res.data);
        this.$message({
          message: res.data.message,
          type: "success",
        });
      } else {
        this.$message({
          message: res.data.message,
          type: "error",
        });
      }
    }).catch(() => {
      this.$message.error("错了哦，这是一条错误消息");
    });
  },
  components: {
    temp,
  },
};
</script>

<style lang="stylus">
@import './index.styl'
</style>
