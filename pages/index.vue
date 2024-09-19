<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // gsap.to('.main-title', {
  //   scrollTrigger: {
  //     trigger: '.main-title',
  //     pin: true,
  //   }
  // })
})
</script>

<template>
  <div class="descent-gradient">
    <v-container class="text-center" style="position: relative; height: 100%;">
        <span class="main-title"> Calculator </span>
      
    </v-container>
  </div>
  <ClientOnly>
    <StarsAndMountains />
  </ClientOnly>
</template>

<style scoped lang="scss">
.main-title {
  position: sticky;
  top: 10vh;

  font-weight: 800;
  font-size: clamp(3.4375rem, 2.4537rem + 5.2469vw, 8.75rem);
  user-select: none;
  margin-top: 20vh;

  // цвет текста
  background: rgb(255, 159, 64);
  background: linear-gradient(180deg, rgba(255, 159, 64, 0.9) 50%, rgba(60, 206, 241, 0.3) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  // цвет текста
}

.descent-gradient {
  background: rgb(108, 215, 241);
  background: linear-gradient(
    180deg,
    rgba(108, 215, 241, 1) 0%,
    rgba(60, 206, 241, 1) 25%,
    rgba(0, 183, 226, 1) 50%,
    rgba(42, 145, 169, 1) 75%,
    rgba(2, 31, 75, 1) 100%
  );

  height: 800vh;
}
</style>
