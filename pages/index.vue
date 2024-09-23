<script lang="ts" setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  let tl1 = gsap.timeline()
  tl1.to(".first-card", {
    opacity: 1,
    x: 0,
    duration: 1,
  })
  tl1.to(
    ".first-card",
    {
      opacity: 0,
      x: -200,
      duration: 1,
    },
    "+=2"
  )

  ScrollTrigger.create({
    animation: tl1,
    trigger: ".first-card",
    start: "top 25%",
    end: "+=275%",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  })

  let tl2 = gsap.timeline()
  tl2.to(".second-card", {
    opacity: 1,
    x: 0,
    duration: 1,
  })
  tl2.to(
    ".second-card",
    {
      opacity: 0,
      x: 200,
      duration: 1,
    },
    "+=2"
  )

  ScrollTrigger.create({
    animation: tl2,
    trigger: ".second-card",
    start: "top 25%",
    end: "+=275%",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  })
})
</script>

<template>
  <div class="descent-gradient">
    <v-container class="text-center" style="height: 100%; overflow: hidden;">
      <v-row>
        <v-col cols="12" style="height: 90vh">
          <div class="main-title">Калькулятор</div>
        </v-col>

        <v-col cols="12" class="first-card">
          <v-row>
            <v-col cols="0" md="1"> </v-col>
            <v-col cols="12" md="6">
              <v-card class="message-card rounded-lg">
                <v-skeleton-loader type="table-heading, list-item-two-line, image"></v-skeleton-loader>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="second-card">
          <v-row>
            <v-col cols="0" md="5"> </v-col>
            <v-col cols="12" md="6">
              <v-card class="message-card rounded-lg">
                <v-skeleton-loader type="table-heading, list-item-two-line, image"></v-skeleton-loader>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <StarsAndMountains />
  </div>
</template>

<style scoped lang="scss">
.main-title {
  font-weight: 800;
  font-size: clamp(3.4375rem, 2.4537rem + 5.2469vw, 8.75rem);
  user-select: none;
  margin-top: 25vh;

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

  height: 100%;
}

.first-card {
  height: 300vh;
  opacity: 0;
}

.second-card {
  height: 300vh;
  opacity: 0;
}
</style>
