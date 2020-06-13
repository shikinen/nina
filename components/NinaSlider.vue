<template>
  <div class="dupa">
    <swiper :options="options">
      <swiper-slide
        v-for="photo in photos"
        :key="photo"
        class="swiper-slide"
      >
        <img
          :src="photo"
        >
      </swiper-slide>
    </swiper>
    <div class="swiper-button swiper-button-prev" />
    <div class="swiper-button swiper-button-next" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'NinaSlider',

  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    photos: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    options: {
      spaceBetween: '3%',
      slidesPerView: 'auto',
      centeredSlides: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.dupa {
  position: relative;
  width: 100%;
  max-width: 100%;
  opacity: 0;
  animation: 1s ease-out 0s 1 fadeIn;
  animation-delay: .5s;
  animation-fill-mode: forwards;
}

.swiper-button {
  color: $primary-color;
  margin-top: 5px;
  height: 10px;
  outline: none;

  &::after {
    font-size: $small-font-size;
  }
}

.swiper-button-disabled {
  opacity: 0;
}

.swiper-slide {
  display: flex;

  img {
    max-height: 70vh;
    margin: auto;
  }
}

.swiper-button {
  position: absolute;
}
</style>
