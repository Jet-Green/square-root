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
      userGuide: "Руководство пользователя",
      locale: 'ru',
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
      userGuide: "User guide",
      locale: 'en',
    },
    {
      mainTitle: "Calculadora",
      instruction: "Instrucción",
      firstCard: "Saca la raíz de números positivos y negativos",
      secondCard: "Ajustar el número de decimales",
      thirdCard: "Sacar la raíz de números complejos",
      support: "Apoyo técnico",
      calc: {
        nanError: "no es un numero",
        enterSpaces: "Separar el personaje con espacios",
        digitsCount: "Número de decimales",
      },
      userGuide: "guía de usuario",
      locale: 'es',
    },
    {
      mainTitle: "计算器",
      instruction: "操作说明",
      firstCard: "求正数和负数的根",
      secondCard: "调整小数位数",
      thirdCard: "求复数的根",
      support: "技术支援",
      calc: {
        nanError: "这不是一个数字",
        enterSpaces: "用空格分隔字符",
        digitsCount: "小数位数",
      },
      userGuide: "用户指南",
      locale: 'zh',
    },
    {
      mainTitle: "Kalkulator",
      instruction: "Anweisung",
      firstCard: "Ziehen Sie die Wurzel aus positiven und negativen Zahlen",
      secondCard: "Passen Sie die Anzahl der Dezimalstellen an",
      thirdCard: "Wurzelbildung aus komplexen Zahlen",
      support: "Technische Unterstützung",
      calc: {
        nanError: "Es ist keine Zahl",
        enterSpaces: "Trennen Sie die Zeichen durch Leerzeichen",
        digitsCount: "Anzahl der Dezimalstellen",
      },
      userGuide: "Bedienungsanleitung",
      locale: 'de',
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