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
  name: "homePage1",
  data() {
    return {
      pageName: "homePage1",
      baseUrl: process.env.BASEURL,
    };
  },
  activated() {
    console.log("jQuery版本：" + $.fn.jquery);
  },
  components: {
    temp,
  },
};
</script>
