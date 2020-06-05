import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";

// an EventHub to share events between components
export const bus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
