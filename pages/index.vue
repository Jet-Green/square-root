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

  let tl3 = gsap.timeline()
  tl3.to(".third-card", {
    opacity: 1,
    x: 0,
    duration: 1,
  })
  tl3.to(
    ".third-card",
    {
      opacity: 0,
      x: -200,
      duration: 1,
    },
    "+=2"
  )

  ScrollTrigger.create({
    animation: tl3,
    trigger: ".third-card",
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
    <v-container style="height: 100%; overflow: hidden">
      <v-row>
        <v-col cols="12" style="height: 90vh" class="text-center">
          <div class="main-title">Калькулятор</div>
          <div class="instruction-container">
            <div class="instruction">Инструкция</div>
            <span class="mdi mdi-arrow-down"></span>
          </div>
        </v-col>

        <v-col cols="12" class="first-card">
          <v-row>
            <v-col cols="0" md="1"> </v-col>
            <v-col cols="12" md="6" style="position: relative">
              <v-card class="pa-4" style="z-index: 9999">
                <v-row>
                  <v-col cols="12">
                    <h2>Извлекайте корень из положительных и отрицательных чисел</h2>
                  </v-col>
                </v-row>
                <CalculatorExample :inputValues="['14', '-22', '11', '4']" :key="0" :showAccuracy="false" />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="second-card">
          <v-row>
            <v-col cols="0" md="5"> </v-col>
            <v-col cols="12" md="6" style="position: relative">
              <v-card class="pa-4" style="z-index: 9999">
                <v-row>
                  <v-col cols="12">
                    <h2>Настраивайте количество знаков после запятой</h2>
                  </v-col>
                </v-row>
                <CalculatorExample :inputValues="['2']" :key="1" :showAccuracy="true" />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="third-card">
          <v-row>
            <v-col cols="0" md="1"> </v-col>
            <v-col cols="12" md="6" style="position: relative">
              <v-card class="pa-4" style="z-index: 9999">
                <v-row>
                  <v-col cols="12">
                    <h2>Извлекайте корень из комплексных чисел</h2>
                  </v-col>
                </v-row>
                <CalculatorExample :inputValues="['2i', '-2 + 4i', '4i', '2 + 2i']" :key="0" :showAccuracy="false" />
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

.instruction-container {
  margin-top: 15vh;
  display: flex;
  flex-direction: column;

  .mdi-arrow-down {
    color: #ff9f40;
    font-size: clamp(2.25rem, 1.7528rem + 1.4205vw, 2.875rem);
  }
}

.instruction {
  font-weight: 600;
  font-size: clamp(1.625rem, 1.2273rem + 1.1364vw, 2.125rem);
  background: rgb(255, 159, 64);
  background: linear-gradient(180deg, rgba(255, 159, 64, 0.9) 50%, rgba(60, 206, 241, 0.3) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
.third-card {
  height: 300vh;
  opacity: 0;
}
</style>
