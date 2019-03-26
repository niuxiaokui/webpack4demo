import Vue from "vue";
import App from "./App.vue";
import "@/assets/style/index.styl";
import "babel-polyfill";
import {
  Button,
  Row,
  Col,
  Notification,
} from "element-ui";
if (process.env.NODE_ENV !== "production") {
  var VConsole = require("vconsole/dist/vconsole.min.js");
  new VConsole();
}

Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.prototype.$notify = Notification;
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
}).$mount("#app");
