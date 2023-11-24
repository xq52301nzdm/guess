<template>
  <div class="v-box">
    <!-- <CssFrame></CssFrame> -->
    <!-- <CanvasFrame></CanvasFrame> -->
    <JsFrame></JsFrame>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch, computed } from "vue";
import CssFrame from "./../frame/CssFrame.vue";
import CanvasFrame from "../frame/CanvasFrame.vue";
import JsFrame from "../frame/JsFrame.vue";

const activeIndex = ref(0);

const list = [1, 2, 3, 4, 5];
</script>

<style lang="scss">
.v-box {
  width: 100vw;
  height: 100vh;
}
</style>
