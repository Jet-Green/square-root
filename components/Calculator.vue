<script setup lang="ts">
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin)

let LOC = useLocale()

let calcInput = ref<string>("")
let result = ref<string>()
let accuracy = ref<number>(2)

let errors = ref<string[]>()

let sliderColor = computed(() => {
  if (accuracy.value <= 2) return ""
  if (accuracy.value > 2 && accuracy.value <= 6) return "#FFB873"
  if (accuracy.value > 6 && accuracy.value <= 8) return "#FF9F40"
  return "#FF7F00"
})

function calculate() {
  errors.value = []
  let c = calcInput.value
  c = c?.replace(",", ".")
  let num = Number(c)

  if (!Number.isNaN(num)) {
    if (num == 0) {
      result.value = "0"
      return
    }
    if (num > 0) {
      let s = Math.sqrt(num)
      if (String(s).includes(".")) {
        result.value = "±" + s.toFixed(accuracy.value)
        return
      } else {
        result.value = "±" + String(s)
        return
      }
    }
    if (num < 0) {
      result.value = "±" + String(Math.sqrt(Math.abs(num)).toFixed(accuracy.value)) + "i"
    }
  } else {
    // Complex numbers
    // a + bi
    // /[-]?[0-9]*[,.]?[0-9]+\s*[+-]?\s*[0-9]*[,.]?[0-9]+[i]{1}$/
    let complexRegex = new RegExp(/[-]?[0-9]*[,.]?[0-9]*\s*[+-]*\s*[0-9]*[,.]?[0-9]*[i]{1}$/)

    if (complexRegex.test(String(calcInput.value))) {
      let splitted = calcInput.value.split(" ")
      console.log(splitted)

      // если введено с R и с I частью
      if (splitted.length == 3) {
        const R = Number(splitted[0])
        let I
        // введено 2 + i, без множителя перед i
        if (splitted[2].length == 1) {
          I = 1
        } else {
          I = Number(splitted[1] + splitted[2].replace("i", ""))
        }

        const z = Math.sqrt(R ** 2 + I ** 2)

        let fi = Math.acos(R / z)

        if (I < 0) {
          fi = 2 * Math.PI - fi
        }

        const nZ = Math.sqrt(z)
        const cos = Math.cos(fi / 2)
        const sin = Math.sin(fi / 2)

        result.value =
          "±" +
          "(" +
          String((nZ * cos).toFixed(accuracy.value)) +
          " + " +
          String((nZ * sin).toFixed(accuracy.value)) +
          "i" +
          ")"
        return
      }
      // если введено только с I частью
      else if (splitted.length == 1) {
        // без пробелов и с Re и Im
        let complexRegexWithoutSpaces = new RegExp(/[-]?[0-9]+[,.]*[0-9]*[+-]+[0-9]*[,.]?[0-9]*[i]{1}$/)
        if (complexRegexWithoutSpaces.test(splitted[0])) {
          errors.value = [LOC.calc.enterSpaces]
          return
        } else {
          let I
          // введено просто i
          if (splitted[0].length == 1) {
            I = 1
          } else {
            if (splitted[0] == "-i") {
              I = -1
            } else {
              I = Number(splitted[0].replace("i", ""))
            }
          }
          const z = Math.abs(I)

          let fi
          if (I >= 0) fi = Math.PI / 2
          else fi = (3 * Math.PI) / 2

          const nZ = Math.sqrt(z)
          const cos = Math.cos(fi / 2)
          const sin = Math.sin(fi / 2)

          result.value =
            "±" +
            "(" +
            String((nZ * cos).toFixed(accuracy.value)) +
            " + " +
            String((nZ * sin).toFixed(accuracy.value)) +
            "i" +
            ")"
          return
        }
      }
    } else {
      errors.value = [LOC.calc.nanError]
      result.value = ""
    }
  }
}
watch(result, (newVal) => {
  gsap.to("#calc-result", {
    duration: 0.5,
    text: newVal,
    ease: "none",
  })
})
watch(accuracy, () => calculate())
watch(calcInput, (newInp, oldInp) => {
  if (oldInp[oldInp.length - 1] == " " && newInp[newInp.length - 1] == " ") {
    calcInput.value = calcInput.value?.substring(0, calcInput.value.length - 1)
  }
  calcInput.value = newInp.trimStart()
  calculate()
})
</script>
<template>
  <v-card class="pa-4" style="z-index: 99">
    <v-row>
      <v-col :cols="12" :md="6" :lg="8">
        <div class="calc-container">
          <img src="../assets//images/square-root.svg" alt="" />

          <v-text-field
            class="calc-input"
            v-model="calcInput"
            :error-messages="errors"
            variant="outlined"
          ></v-text-field>
        </div>
      </v-col>
      <v-col :cols="12" :md="6" :lg="4" class="d-flex justify-center align-center">
        <span class="result">= <span id="calc-result"></span></span>
      </v-col>
      <v-col :cols="12">
        <div class="text-caption">{{ LOC.calc.digitsCount }}</div>
        <v-slider v-model="accuracy" :thumb-label="true" :step="1" :min="0" :max="12" hide-details :color="sliderColor">
          <template v-slot:append> 😍 </template>
          <template v-slot:prepend> 😢 </template>
          <!-- {{ ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'][Math.min(Math.floor(modelValue / 10), 10)] }} -->
        </v-slider>
      </v-col>
    </v-row>
    <!-- <v-text-field v-model="accuracy" type="number" :min="1" placeholder="Кол-во знаков после запятой"></v-text-field> -->
  </v-card>
</template>
<style scoped lang="scss">
.result {
  font-size: clamp(1.125rem, 0.8267rem + 0.8523vw, 1.5rem);
  font-weight: 500;
  word-break: keep-all;
}
.calc-container {
  position: relative;
  overflow-x: hidden;
}
.calc-input {
  position: absolute;
  bottom: 0;
  width: 70%;
  left: 60px;
}
</style>
