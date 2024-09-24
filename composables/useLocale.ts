export default function() {
  const LOCS = [
    {
      mainTitle: "Калькулятор",
      instruction: "Инструкция",
      firstCard: "Извлекайте корень из положительных и отрицательных чисел",
      secondCard: "Настраивайте количество знаков после запятой",
      thirdCard: "Извлекайте корень из комплексных чисел",
      support: "Служба поддержки",
      calc: {
        nanError: "Это не число",
        enterSpaces: "Выделите знак пробелами",
        digitsCount: "Знаков после запятой",
      },
      locale: 'ru'
    },
    {
      mainTitle: "Calculator",
      instruction: "Instruction",
      firstCard: "Take the root of positive and negative numbers",
      secondCard: "Adjust the number of decimal places",
      thirdCard: "Take the root of complex numbers",
      support: "Support",
      calc: {
        nanError: "Not a number",
        enterSpaces: "Separate the character with spaces",
        digitsCount: "Number of decimal places",
      },
      locale: 'en'
    },
  ]

  let c = useCookie('i18n_redirected')
  console.log(c.value);
  for(let loc of LOCS) {
    if (loc.locale == c.value) {
      return loc
    }
  }
  
  return LOCS[0]
}