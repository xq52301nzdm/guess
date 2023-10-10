<template>
  <div class="home-page-container">
    <div class="grid-box-container" v-if="isShowGridBox">
      <div class="grid-box" v-for="(item, index) in gridBoxList" :key="index">
        {{ item.name }}
      </div>
    </div>
  </div>
  <button @click="resetPosition">初始化</button>
</template>
<script setup>
import { onMounted, ref, reactive, nextTick } from "vue";
import gsap from "gsap";

const gridBoxList = ref([]);

for (var i = 0; i < 19; i++) {
  gridBoxList.value.push({
    name: `今日笔记`,
    key: i,
  });
}

const isShowGridBox = ref(true);
const resetPosition = () => {
  isShowGridBox.value = false;
  nextTick(() => {
    isShowGridBox.value = true;
    nextTick(() => {
      Draggable.create(".grid-box", { bounds: "body" });
    });
  });
};

onMounted(() => {
  gsap.to(".grid-box", 1, {
    scale: 0.1,
    y: 60,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    delay: 1,
    stagger: {
      amount: 1.5,
      grid: "auto",
      from: "center",
    },
  });
  Draggable.create(".grid-box", { bounds: "body" });
});
</script>

<style scoped lang="scss">
.home-page-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .grid-box-container {
    width: 800px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;

    .grid-box {
      width: 150px;
      height: 80px;
      border-radius: 5px;
      border: 1px dashed black;
      margin: 15px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
