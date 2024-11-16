<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import Side from "./Side.vue";
import Footer from "./Footer.vue";

const router = useRouter();
const currentTab = ref("home");
const tabs = ref([
  { label: "首页", value: "home", path: "/" },
  { label: "作业代写", value: "work", path: "/work" },
  { label: "代写价格", value: "price", path: "/price" },
  { label: "服务流程", value: "process", path: "/process" },
  { label: "联系我们", value: "contact", path: "/contact" },
]);
const onTabPress = (key: string) => {
  let item = tabs.value.find((it) => it.value == key);
  currentTab.value = key as string;
  router.push(item?.path as string);
};

onMounted(() => {
  // router.push("/home");
});
</script>

<template>
  <div class="app">
    <div class="header-pc">
      <img src="@/assets/csdx.png" style="width: 128px; height: 64px" />
      <div>
        <n-tabs
          type="line"
          animated
          :value="currentTab"
          @update-value="onTabPress"
        >
          <n-tab-pane
            v-for="(tab, index) in tabs"
            :name="tab.value"
            :tab="tab.label"
          />
        </n-tabs>
      </div>
    </div>
    <div class="header-mobile">
      <img src="@/assets/csdx.png" style="width: 128px; height: 64px" />
      <n-select
        :value="currentTab"
        :options="tabs"
        style="width: 128px"
        :consistent-menu-width="false"
        @update-value="onTabPress"
      />
    </div>
    <div style="height: 12px" />
    <div class="main">
      <div class="main-fix">
        <div class="route">
          <RouterView />
        </div>
        <!-- <div style="width: 16px" />
        <div class="side">
          <Side />
        </div> -->
      </div>
    </div>
    <!-- <div class="footer">
      <Footer />
    </div> -->
  </div>
</template>
<style scoped>
.app {
  height: 100%;
  width: 100%;
  position: relative;
  .header-pc {
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    padding: 0 64px;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    box-shadow: 0 1px 3px 0 rgba(18, 18, 18, 0.10196);
    :deep(.n-tab-pane) {
      padding: 0;
    }
  }
  .header-mobile {
    display: none;
  }
  @media (max-width: 768px) {
    .header-pc {
      display: none;
    }
    .header-mobile {
      height: 64px;
      padding: 0 32px;
      justify-content: space-between;
      background-color: #fff;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
      box-shadow: 0 1px 3px 0 rgba(18, 18, 18, 0.10196);
      display: flex;
      align-items: center;
    }
  }
  .main {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 64px;
    .main-fix {
      max-width: 1280px;
      display: flex;
      padding: 0 24px;
      .route {
        flex: 1;
        /* margin-right: 288px; */
      }
      .side {
        width: 288px;
        position: fixed;
        right: 24px;
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 54px;
    background-color: #fff;
    max-width: 1280px;
    height: 64px;
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    :deep(.n-tab-pane) {
      padding: 0;
    }
  }
}
</style>
