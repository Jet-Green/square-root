<script setup lang="ts">
let LOC = useLocale()

let dialog = ref<boolean>()
let guideDialog = ref<boolean>()

onMounted(() => {})
</script>
<template>
  <section
    style="
      background: rgb(2, 31, 75);
      min-height: 100vh;
      /* background: linear-gradient(180deg, rgba(2,31,75,1) 0%, rgba(117,151,222,1) 75%); */
    "
  >
    <img src="../assets/images/stars.png" alt="stars" id="stars" />
    <span>&nbsp;</span>
    <img src="../assets/images/mountains_behind.png" alt="mountains_behind" id="mountains_behind" />
    <span>&nbsp;</span>
    <Calculator :key="5" />
    <div class="support cursor-pointer" @click="dialog = true">
      {{ LOC.support }}
    </div>

    <div class="user-guide" @click="guideDialog = true">
      {{ LOC.userGuide }}
    </div>
    <img src="../assets/images/mountains_front.png" alt="mountains_front" id="mountains_front" />
    <v-dialog v-model="dialog" width="auto" height="auto">
      <v-card class="d-flex">
        <v-card-text class="pa-8">
          <v-row>
            <v-col>
              <a href="mailto:grishadzyin@gmail.com">
                <v-icon style="font-size: 50px;">mdi-email-outline</v-icon>
              </a>
            </v-col>
            <v-col>
              <a href="https://t.me/unenhi" target="_blank">
                <img src="../assets/images/telegram.png" alt="" style="height: 50px; cursor: pointer;">
              </a> 
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="guideDialog" width="auto" height="auto">
      <v-card class="d-flex">
        <v-card-text class="pa-8">
          <v-row>
            <v-col>
              <a href="https://drive.google.com/drive/folders/1aQCRqzu2h3PFDiP5NaDDcTKU54yLByXL?usp=sharing" target="_blank">
                <v-icon style="font-size: 50px;">mdi-file-document-outline</v-icon>
              </a> 
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>
<style scoped lang="scss">
img {
  user-select: none;
}
ul {
  list-style: none;
}

a {
  text-decoration: none;
}

section {
  position: relative;
  width: 100%;
  height: 125vh;
  height: auto;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

section::before {
  /*blending the border between sections*/
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #1c0522, transparent);
  z-index: 1000;
}

section img {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: fill;
  pointer-events: none;
}

section img#moon {
  mix-blend-mode: screen;
}

section img#mountains_front {
  z-index: 10;
}

#text {
  right: -350px;
  position: absolute;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
}

#button {
  text-decoration: none;
  padding: 8px 30px;
  border-radius: 40px;
  background-color: #fff;
  color: #2b1055;
  font-size: 1.5em;
  display: inline-block;
  z-index: 9;
  transform: translateY(120px);
}

.sec {
  position: relative;
  // padding: 100px;
  background-color: #1c0522;
}

.sec h2 {
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #fff;
}

.sec p {
  font-size: 1em;
  color: #fff;
}
.support {
  position: absolute;
  bottom: 10vh;
  z-index: 1000;
  font-weight: 800;
  color: #ff9f40;
  font-size: clamp(1.25rem, 1.0511rem + 0.5682vw, 1.5rem);
  user-select: none;
}
.user-guide {
  position: absolute;
  bottom: 20px;
  z-index: 1000;
  font-weight: 800;
  color: #ff9f40;
  font-size: clamp(1.25rem, 1.0511rem + 0.5682vw, 1.5rem);
  user-select: none;
  cursor: pointer;
}
</style>
