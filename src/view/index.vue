<template>
  <Swiper
    class="swiper1 swiper-h"
    :spaceBetween="0"
    :direction="'vertical'"
    edgeSwipeThreshold="0"
    :modules="modules"
    :touchReleaseOnEdges="true"
    :slidesPerView="1"
    :mousewheel="true"
  >
    <SwiperSlide>
      <Swiper
        class="mySwiper2 swiper-v"
        :spaceBetween="0"
        :modules="modules"
        edgeSwipeThreshold="0"
        :touchReleaseOnEdges="true"
        @activeIndexChange="activeIndexChange"
        :autoplay="true"
        :stopOnLastSlide="true"
        :delay="0"
      >
        <div class="fixed-content">
          <!-- <div class="fixed-content-title">探秘之旅</div> -->
          <!-- <div class="fixed-content-button">立即预约</div> -->

          <!-- 第三块延迟内容 -->
          <div class="fixed-delay-content">
            <!-- 标题容器 -->
            <div class="fixed-delay-content-box">
              <div class="fixed-delay-content-title">环节介绍</div>
              <div class="fixed-delay-content-text">
                环节介绍环节介绍环节介绍环节介绍环节
                环节介绍环节介绍介绍环节介绍环节介绍环节介绍环节介绍
              </div>
            </div>

            <!-- PC端视频容器 -->
            <div class="fixed-video-content">
              <div
                class="video-box"
                @mouseover="(e) => onMouseOver(e, index)"
                :style="`flex: ${videoActiveIndex === index ? 2 : 1}`"
                v-for="(item, index) in videoList"
                :key="item.key"
              >
                <video :src="item.src" muted="muted" class="custom-video"></video>
                <div class="custom-video-text">这是第{{ index }}</div>
              </div>
            </div>

            <!--  -->
          </div>
        </div>
        <SwiperSlide>
          <img src="./../assets/swiper-1-1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./../assets/swiper-1-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./../assets/swiper-1-3.jpg" />
        </SwiperSlide>
      </Swiper>
    </SwiperSlide>
    <SwiperSlide>
      <Swiper
        class="mySwiper2 swiper-v"
        :spaceBetween="0"
        :modules="modules"
        :allowSlideNext="false"
        edgeSwipeThreshold="0"
        :touchReleaseOnEdges="true"
      >
        <SwiperSlide>
          <img src="./../assets/swiper-2-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </SwiperSlide>
    <SwiperSlide>
      <Swiper
        class="mySwiper2 swiper-v"
        :spaceBetween="0"
        :modules="modules"
        :allowSlideNext="false"
        edgeSwipeThreshold="0"
        :touchReleaseOnEdges="true"
      >
        <SwiperSlide>
          <img src="./../assets/swiper-3-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Autoplay } from "swiper/modules";
import gasp from "gsap";

let tl = gsap.timeline();

const modules = ref([Mousewheel, Autoplay]);
const oneActiveIndex = ref(0);
const videoActiveIndex = ref(0);

const videoList = [
  {
    src:
      "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4",
    key: 0,
  },
  {
    src:
      "https://stream7.iqilu.com/10339/article/202002/18/2fca1c77730e54c7b500573c2437003f.mp4",
    key: 1,
  },
  {
    src:
      "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218025702PSiVKDB5ap.mp4",
    key: 2,
  },
];

const activeIndexChange = (swiper) => {
  const { activeIndex } = swiper;
  oneActiveIndex.value = activeIndex;
  if (activeIndex === 1) {
    swiper.autoplay.stop();
    setTimeout(() => {
      tl.to(
        ".fixed-delay-content-box",
        {
          y: -150,
          opacity: 1,
          duration: 0.5,
        },
        "+=1"
      );
      tl.to(
        ".fixed-video-content",
        {
          opacity: 1,
          duration: 0.5,
        },
        "+=1"
      );
    }, 2000);
  }
};

const onMouseOver = (e, index) => {
  if ([...e.target.classList].includes(`custom-video`)) {
    e.target.play();
    const videoList = [...document.querySelectorAll("video")];
    videoList.map((v, i) => {
      if (i !== index) {
        v.pause();
      }
    });
  }
  videoActiveIndex.value = index;
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
