import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import fastClick from "fastclick";
import "@/assets/style/index.styl";
import "babel-polyfill";
import {
  Button,
  Container,
  Header,
  Main,
  Footer,
  Message,
} from "element-ui";
import http from "@/utils/http";
fastClick.attach(document.body);
if (process.env.NODE_ENV === "production") {
  var VConsole = require("vconsole/dist/vconsole.min.js");
  new VConsole();
}

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.prototype.$message = Message;
Vue.prototype.$http = http;
Vue.config.productionTip = false;
Vue.use(router);
new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
