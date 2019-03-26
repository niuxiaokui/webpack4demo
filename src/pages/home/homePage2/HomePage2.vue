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
        <router-link to="/homeIndex">Go to homeIndex</router-link>
      </el-button>
      <el-button>
        <router-link to="/homePage1">Go to homePage1</router-link>
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
  name: "homePage2",
  data() {
    return {
      pageName: "homePage2",
      baseUrl: process.env.BASEURL,
    };
  },
  activated() {
    console.log("lodash版本：" + _.VERSION);
  },
  components: {
    temp,
  },
};
</script>
