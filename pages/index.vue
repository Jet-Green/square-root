<script lang="ts" setup></script>

<template>
  <div class="descent-gradient">
    <v-container class="d-flex justify-center align-center">
      <span class="main-title"> Calculator </span>
      <!-- <div class="black-bg">
        dads
      </div> -->
    </v-container>
  </div>
  <ClientOnly>
    <StarsAndMountains />
  </ClientOnly>
</template>

<style scoped lang="scss">
.main-title {
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
