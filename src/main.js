import Vue from "vue";
import App from "./App.vue";
import store from "@/store/index.js";
import "view-design/dist/styles/iview.css";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from "view-design";
import "@/assets/default.less";
import "@/theme/index.less";

Vue.config.productionTip = false;
import "@/utils/directive.js";
console.log(ViewUI);
Vue.use(ViewUI);
Vue.use(ElementUI);
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");