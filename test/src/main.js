import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import Mock from "./mock";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.prototype.$EventBus = new Vue();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
