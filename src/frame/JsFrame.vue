<template>
  <div class="sprite-wp">
    <div class="sprite" id="sprite"></div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch, computed } from "vue";
const start = () => {
  var sprite = document.getElementById("sprite"),
    picWidth = 300,
    k = 20,
    i = 0,
    timer = null;
  // 重置背景图片位置
  sprite.style = "transform: translate3d(0,0,0)";
  // 改变背景图移动
  function changePosition() {
    sprite.style = "transform: translate3d(" + -picWidth * i + "px,0,0)";
    i++;
    if (i == k) {
      i = 0;
    }
    window.requestAnimationFrame(changePosition);
  }
  window.requestAnimationFrame(changePosition);
};
onMounted(() => start());
</script>

<style lang="scss">
.sprite-wp {
  width: 300px;
  height: 300px;
  overflow: hidden;
}
.sprite {
  width: 6000px;
  height: 300px;
  will-change: transform;
  background: url(../assets/test.jpg) no-repeat center;
}
</style>
