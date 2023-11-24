<template>
  <canvas id="canvas" width="300" height="300"></canvas>
</template>

<script setup>
import { reactive, ref, onMounted, watch, computed } from "vue";
import TestPng from "../assets/test.jpg";

const startAnimate = () => {
  var timer = null,
    canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    img = new Image(),
    width = 300,
    height = 300,
    k = 20,
    i = 0;
  img.src = TestPng;

  function drawImg() {
    context.clearRect(0, 0, width, height);
    i++;
    if (i == k) {
      i = 0;
    }
    context.drawImage(img, i * width, 0, width, height, 0, 0, width, height);
    window.requestAnimationFrame(drawImg);
  }
  img.onload = function () {
    window.requestAnimationFrame(drawImg);
  };
};

// onMounted(() => startAnimate());
</script>

<style lang="scss"></style>
