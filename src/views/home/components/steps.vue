<script setup lang="ts">
import { ref } from "vue";
import Grouper from "./grouper.vue";

const datas = ref([
  // {
  //   title: "网课代上",
  //   message:
  //     "GIANT教育网课代上服务过全球超过300所高中、大学各类科目的网课，科目覆盖率达到98%以上！ 全程代上您的网课：所有的作业和考试，甚至包括Zoom Meeting, Group Project等，统统全包！ 支持新客户分期付款！ 下单后建微信工作群，随时与学霸沟通需求、追踪任务和成绩！ 成绩不满意随时换人、成绩不达标随时退款！",
  //   src: "https://img.picgo.net/2024/11/16/wkdsf6b7c02cd71a7068.png",
  // },
  {
    title: "联系客服",
    message: "将你的烦恼告诉我们或直接发送具体要求、并告知具体细节及交稿时间。",
    src: "https://img.picgo.net/2024/11/16/lwdx513e8b4876534151.png",
  },
  {
    title: "确认反馈",
    message: "客服第一时间询问我们的写手团队在规定时间内能否完成及报价反馈。",
    src: "https://img.picgo.net/2024/11/16/zydxf2673dd7da034822.png",
  },
  {
    title: "支付定金",
    message:
      "我们会告诉您要委托的任务预付金额及支付方式（毕业论文网课可分期）。",
    src: "https://img.picgo.net/2024/11/16/kstg2183cc332e0e8961.png",
  },
  {
    title: "完美收工",
    message: "完工后发送副本或检测稿至您的微信或指定邮箱确认后 支付余款。",
    src: "https://img.picgo.net/2024/11/16/xsfd7a2684d8aa1e128e.png",
  },
]);
</script>
<template>
  <div class="home-steps">
    <Grouper title="服务流程" message="简化流程，节约您的宝贵时间" />
    <div style="height: 12px" />
    <div class="steps">
      <div v-for="(item, index) in datas" class="item">
        <div class="title">{{ item.title }}</div>
        <div style="height: 1px" />
        <div class="message">{{ item.message }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-steps {
  background-color: #fff;
  padding: 12px;
  border-radius: 12px;
  .steps {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 12px;
    .item {
      flex: 1;
      align-items: center;
      display: flex;
      flex-direction: column;
      .title {
        color: #333;
        font-size: 18px;
        font-weight: 600;
      }
      .message {
        color: #666;
        font-size: 12px;
        text-align: center;
      }
    }
  }
  @media (max-width: 768px) {
    .steps {
      flex-direction: column;
      display: flex;
      .item {
        margin: 24px 0;
      }
    }
  }
}
</style>
