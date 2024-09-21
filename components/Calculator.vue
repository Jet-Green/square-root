<script setup lang="ts">
let calcInput = ref<string>("")
let result = ref<string>()
let accuracy = ref<number>(2)

let errors = ref<string[]>()

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
      result.value = "±" + String(Math.sqrt(Math.abs(num))) + "i"
    }
  } else {
    // Complex numbers
    // a + bi
    // /[-]?[0-9]*[,.]?[0-9]+\s*[+-]?\s*[0-9]*[,.]?[0-9]+[i]{1}$/
    let complexRegex = new RegExp(/[-]?[0-9]*[,.]?[0-9]*\s*[+-]*\s*[0-9]*[,.]?[0-9]*[i]{1}$/)

    if (complexRegex.test(String(calcInput.value))) {
      let splitted = calcInput.value.split(" ")
      console.log(splitted);
      
      // если введено с R и с I частью
      if (splitted.length == 3) {
        const R = Number(splitted[0])
        let I;
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
          String((nZ * cos).toFixed(accuracy.value)) + " + " + "i " + String((nZ * sin).toFixed(accuracy.value))
        return
      } 
      // если введено только с I частью
      else if (splitted.length == 1) {
        let I;
        // введено просто i
        if (splitted[0].length == 1) {
          I = 1
        } else {
          I = Number(splitted[0].replace("i", ""))
        }
        const z = Math.abs(I)

        let fi;
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
          "i " +
          String((nZ * sin).toFixed(accuracy.value)) +
          ")"
        return
      }
    } else {
      errors.value = ["Это не число"]
      result.value = ""
    }
  }
}

watch(accuracy, () => calculate())
watch(calcInput, (newInp, oldInp) => {
  if (oldInp[oldInp.length - 1] == " " && newInp[newInp.length - 1] == " ") {
    calcInput.value = calcInput.value?.substring(0, calcInput.value.length - 1)
  }
  calculate()
})
</script>
<template>
  <v-card class="pa-4" style="z-index: 9999">
    Введите выражение
    <v-text-field v-model="calcInput" :error-messages="errors"></v-text-field>
    Точность
    <v-text-field v-model="accuracy" type="number" :min="1" placeholder="Кол-во знаков после запятой"></v-text-field>

    Ответ: <span class="result">{{ result }}</span>
  </v-card>
</template>
<style scoped lang="scss">
.result {
  font-size: 20px;
  font-weight: 500;
}
</style>
