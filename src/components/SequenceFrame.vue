<template>
  <div class="frame-box" ref="FrameBox"></div>
  <button @click="play">Click</button>
</template>

<script setup>
import { reactive, ref, onMounted, watch, computed } from "vue";

const FrameBox = ref(null);

const keyframes = [
  { backgroundImage: "url(/guess/src/assets/frame/a-1.jpg)" },
  { backgroundImage: "url(/guess/src/assets/frame/a-2.jpg)" },
  { backgroundImage: "url(/guess/src/assets/frame/a-3.jpg)" },
  { backgroundImage: "url(/guess/src/assets/frame/a-4.jpg)" },
  { backgroundImage: "url(/guess/src/assets/frame/a-5.jpg)" },
  { backgroundImage: "url(/guess/src/assets/frame/a-6.jpg)" },
];

const play = () => {
  FrameBox.value.animate(keyframes, {
    duration: 400,
    iterations: Infinity,
  });
};

const pause = () => {
  FrameBox.value.getAnimations()[0].pause();
};

const replay = () => {
  FrameBox.value.getAnimations()[0].play();
};

defineExpose({
  play,
  pause,
  replay,
});
</script>

<style lang="scss">
.frame-box {
  width: 200px;
  height: 200px;
  background: {
    image: url("../assets/frame/a-1.jpg");
    repeat: no-repeat;
    size: contain;
  }
}
</style>
