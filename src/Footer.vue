<script setup lang="ts">
import moment from "moment";
import { onMounted, ref } from "vue";

const timer = ref<number | undefined>(undefined);
const date = ref("");

const calcSeconds = (time: string) => {
  const startDate = moment(time);
  // 获取当前时间
  const now = moment();
  // 计算时间差（毫秒）
  const diff = moment.duration(now.diff(startDate));
  // 提取天、小时、分钟、秒
  const days = Math.floor(diff.asDays());
  const hours = diff.hours();
  const minutes = diff.minutes();
  const seconds = diff.seconds();
  // 拼接成格式化字符串
  return `${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
};

onMounted(() => {
  timer.value && clearInterval(timer.value);
  timer.value = setInterval(() => {
    date.value = calcSeconds("2024-11-16 00:00:00");
  }, 1000);
});
</script>

<template>
  <div class="foot">
    <div>网站已经运行：{{ date }}</div>
  </div>
</template>
<style scoped>
.foot {
}
</style>
