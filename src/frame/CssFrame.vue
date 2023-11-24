<template>
  <div class="sprite-wp">
    <div class="sprite"></div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch, computed } from "vue";
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
  background: {
    image: url("../assets/test.jpg");
    repeat: no-repeat;
    size: cover;
  }
  animation: frame 330ms steps(20) both infinite;
}
@keyframes frame {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-6000px, 0, 0);
  }
}
</style>
