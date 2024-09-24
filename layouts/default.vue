<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n()
// const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

let dialog = ref<boolean>(false)
</script>
<template>
  <v-app>
    <div class="loc-container">
      <v-btn icon="mdi-translate" @click="dialog = true"> </v-btn>
      <!-- <v-icon icon=""></v-icon> -->
    </div>
    <v-dialog v-model="dialog" class="loc-dialog" width="auto" height="auto">
      <v-card class="loc-card">
        <v-card-text>
          <v-row>
            <v-col>
              <h2>Choose language</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="12" v-for="locale in availableLocales" @click="setLocale(locale.code); dialog = false;" style="font-weight: 600;" class="d-flex justify-space-between cursor-pointer highlight">
              <div>{{ locale.name }}</div>
              <div>{{ locale.code }}</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <NuxtPage />
  </v-app>
</template>

<style scoped lang="scss">
.loc-container {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: end;
  background-color: transparent;
  margin: 12px;
  padding: 12px;
  z-index: 999;
}
.loc-dialog {
  z-index: 1000;
}
.loc-card {
  display: flex;
}
.highlight:hover {
  // цвет текста
  background: rgb(255, 159, 64);
  background: linear-gradient(180deg, rgba(255, 159, 64, 0.9) 50%, rgba(60, 206, 241, 0.3) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  // цвет текста
}
</style>
