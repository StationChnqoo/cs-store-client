import "./assets/main.css";

import { createApp, type Plugin } from "vue";
import { createPinia } from "pinia";
import "ant-design-vue/dist/reset.css";

import App from "./App.vue";
import router from "./router";
import { Carousel, TabPane, Tabs } from "ant-design-vue";

const app = createApp(App);
const antdComponents = <Plugin[]>[Carousel, Tabs, TabPane];
for (let i = 0; i < antdComponents.length; i++) {
  app.use(antdComponents[i]);
}
app.use(createPinia());
app.use(router);

app.mount("#app");
