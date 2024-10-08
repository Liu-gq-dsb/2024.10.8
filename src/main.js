import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import OneTt from "./views/CodeRepository/Fujijan/OneTt.vue";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use("sidebar-component", OneTt);
app.mount("#app");
