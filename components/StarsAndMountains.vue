<script setup lang="ts">
onMounted(() => {
})
</script>
<template>
  <section style="
    background: rgb(2,31,75);
    min-height: 100vh;
    /* background: linear-gradient(180deg, rgba(2,31,75,1) 0%, rgba(117,151,222,1) 75%); */
  ">
    <img src="../assets/images/stars.png" alt="stars" id="stars" />
    <span>&nbsp;</span>
    <img src="../assets/images/mountains_behind.png" alt="mountains_behind" id="mountains_behind" />
    <h2 id="text">Moon Light</h2>
    <span>&nbsp;</span>
    <img src="../assets/images/mountains_front.png" alt="mountains_front" id="mountains_front" />
  </section>
</template>
<style scoped lang="scss">
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
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  height: 100%;
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
  padding: 100px;
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
</style>
