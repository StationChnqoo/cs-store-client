<script setup lang="ts">
import { ref } from "vue";

const datas = ref([
  // {
  //   title: "网课代上",
  //   message:
  //     "GIANT教育网课代上服务过全球超过300所高中、大学各类科目的网课，科目覆盖率达到98%以上！ 全程代上您的网课：所有的作业和考试，甚至包括Zoom Meeting, Group Project等，统统全包！ 支持新客户分期付款！ 下单后建微信工作群，随时与学霸沟通需求、追踪任务和成绩！ 成绩不满意随时换人、成绩不达标随时退款！",
  //   src: "https://img.picgo.net/2024/11/16/wkdsf6b7c02cd71a7068.png",
  // },
  {
    title: "论文代写",
    message:
      "Paper、Essay、Dissertation均一对一定制化写作；提供微信群可直接与学霸进行需求沟通和意见反馈，最大化服务效率；Deadline前提供初稿，无限次修改，满意为止！附赠Turnitin查重报告和AI查重报告，100%原创好文，杜绝chatgpt等AI软件！",
    src: "https://img.picgo.net/2024/11/16/lwdx513e8b4876534151.png",
  },
  {
    title: "作业代写",
    message:
      "还在为繁重的Assignment发愁吗？各类学科的Assignment代写，只要您有需求我们就能满足！下单后可直接与学霸反馈作业需求，提高沟通效率，成绩不达标随时退款！",
    src: "https://img.picgo.net/2024/11/16/zydxf2673dd7da034822.png",
  },
  {
    title: "考试托管",
    message:
      "考试代考服务专业托管您的任何考试，无论是Online代考还是Take-Home，无论是有摄像头的网课代考或者还是In class考试，我们都可以帮您！ 可接24小时内考试代考急单，不达标立即退款！下单后建立项目群，直接跟学霸沟通需求；配备课程助手，随时反馈进度!",
    src: "https://img.picgo.net/2024/11/16/kstg2183cc332e0e8961.png",
  },
  {
    title: "线上辅导",
    message:
      "根据您的需求定制化一对一辅导您的论文、作业或考试！下单前明确需求，不解决问题全额退款；配备参考答案，合同保分；下单后建立微信工作群，课后有问题随时滴滴学霸！",
    src: "https://img.picgo.net/2024/11/16/xsfd7a2684d8aa1e128e.png",
  },
]);
</script>
<template>
  <div class="home-service">
    <div class="items-pc">
      <div
        v-for="(item, index) in datas"
        :key="index"
        class="item"
        :class="['r', 'd'][index % 2]"
      >
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div style="height: 16px" />
          <div class="message">{{ item.message }}</div>
          <div style="height: 16px" />
          <div
            style="display: flex"
            :style="{ justifyContent: ['flex-end', 'flex-start'][index % 2] }"
          >
            <n-button type="primary">了解详情</n-button>
          </div>
        </div>
        <div style="width: 64px" />
        <img class="image" :src="`${item.src}`" />
      </div>
    </div>
    <div class="items-mobile">
      <div
        v-for="(item, index) in datas"
        :key="index"
        class="item"
        :class="['r', 'd'][index % 2]"
      >
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div style="height: 16px" />
          <img class="image" :src="`${item.src}`" />
          <div style="height: 24px" />
          <div class="message">{{ item.message }}</div>
          <div style="height: 16px" />
          <n-button type="primary">了解详情</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-service {
  background-color: #fff;
  padding: 12px;
  border-radius: 12px;
  .items-pc {
    flex-direction: column;
    display: flex;
    .item {
      display: flex;
      padding: 0 64px;
      margin: 16px 0;
      .image {
        width: 300px;
        height: 180px;
      }
      .content {
        .title {
          font-size: 24px;
          font-weight: 500;
          color: #333;
        }
        .message {
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* 限制显示4行 */
          -webkit-box-orient: vertical;
          overflow: hidden; /* 超出隐藏 */
        }
      }
    }
    .d {
      flex-direction: row;
    }
    .r {
      flex-direction: row-reverse;
    }
  }
  .items-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .items-pc {
      display: none;
    }
    .items-mobile {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 48%;
        margin: 12px 0;
        .content {
          flex-direction: column;
          align-items: center;
          display: flex;
          .title {
            font-size: 20px;
            font-weight: 500;
          }

          .image {
            width: 100px;
            height: 60px;
          }

          .message {
            font-size: 14px;
            display: -webkit-box;
            -webkit-line-clamp: 4; /* 限制显示4行 */
            -webkit-box-orient: vertical;
            overflow: hidden; /* 超出隐藏 */
          }
        }
      }
    }
  }
}
</style>
