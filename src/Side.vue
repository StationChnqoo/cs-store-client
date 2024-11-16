<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView, useRouter } from "vue-router";

const myQRCodes = [
  { name: "QQ", tab: "QQ", src: "https://blog.cctv3.net/PayAli.jpg" },
  { name: "Wechat", tab: "微信", src: "https://blog.cctv3.net/PayAli.jpg" },
  { name: "Telegram", tab: "纸飞机", src: "https://blog.cctv3.net/PayAli.jpg" },
];

onMounted(() => {
  // router.push("/home");
});
</script>

<template>
  <div class="sider">
    <div class="card">
      <h3 style="text-align: center">呼叫大佬儿</h3>
      <n-tabs animated size="small" placement="left">
        <n-tab-pane
          v-for="(item, index) in myQRCodes"
          :name="item.name"
          :tab="item.tab"
        >
          <img
            :src="item.src"
            style="height: 158px; width: 158px; border-radius: 12px"
          />
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>
<style scoped>
.sider {
  .card {
    padding: 12px;
    border-radius: 12px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
}
</style>
