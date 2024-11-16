<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { Carousel, TabPane, Tabs } from "ant-design-vue";
import { onMounted, ref } from "vue";
import type { Key } from "ant-design-vue/es/table/interface";

const router = useRouter();
const currentTab = ref("home");
const tabs = ref([
  { label: "首页", key: "home", path: "/" },
  { label: "作业代写", key: "work", path: "/work" },
  { label: "代写价格", key: "price", path: "/price" },
  { label: "服务流程", key: "process", path: "/process" },
  { label: "联系我们", key: "contact", path: "/contact" },
]);
const onTabPress = (key: Key) => {
  let item = tabs.value.find((it) => it.key == key);
  currentTab.value = key as string;
  console.log(item?.path);
  router.push(item?.path as string);
};

onMounted(() => {
  // router.push("/home");
});
</script>

<template>
  <div class="main">
    <div class="header">
      <img src="@/assets/csdx.png" style="width: 128px; height: 64px" />
      <Tabs v-model:activeKey="currentTab" @change="onTabPress">
        <TabPane v-for="(tab, index) in tabs" :key="tab.key" :tab="tab.label" />
      </Tabs>
    </div>
    <RouterView />
  </div>
</template>
<style scoped>
.main {
  height: 100%;
  width: 100%;
  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 24px;
  }
}
</style>
