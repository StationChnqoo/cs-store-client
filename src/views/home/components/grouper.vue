<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["title", "message"]);
</script>
<template>
  <div class="home-grouper">
    <div class="title">{{ props.title }}</div>
    <div class="group">
      <div class="head">
        <div class="line" />
        <div class="message">{{ props.message }}</div>
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-grouper {
  display: flex;
  align-items: center;
  flex-direction: column;
  .head {
    align-items: center;
    display: flex;

    .line {
      height: 1px;
      background-color: #24b727;
      width: 64px;
    }

    .message {
      color: #24b727;
      margin: 12px 24px;
    }
  }
  .title {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
