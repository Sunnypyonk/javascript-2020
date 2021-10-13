1 Number
const num = 42 // integer
const float = 42.42 // float
const pow = 10e3

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // максимальное число, которое можно использовать
console.log('Math.pow 53', Math.pow(2, 53) - 1) // возведение в степень
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER) //минимальное число
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) //бесконечность в положитеоьную сторону
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) //бесконечность в отрицательную сторону
console.log('2 / 0', 2 / 0)  // вернет бесконечность
console.log(Number.NaN) // Not A Number
console.log(typeof NaN) //все равно относится к классу Number
const weird = 2 / undefined
console.log(Number.isNaN(weird))
console.log(Number.isNaN(42))
console.log(Number.isFinite(Infinity)) //проверяет, конечно ли
console.log(Number.isFinite(42))

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2) //преобразует в integer
console.log(parseInt(stringInt) + 2) //преобразует в integer
console.log(Number(stringInt) + 2) //преобразует в integer
console.log(+stringInt + 2) //преобразует в integer
console.log(parseFloat(stringFloat) + 2) //преобразует в float
console.log(+stringFloat + 2) //преобразует в float

console.log(0.4 + 0.2) // 0.600000001 проблема!
console.log(+(0.4 + 0.2).toFixed(1)) //toFixed обрезает до указаннного зн. как String, а + в начале превращает в Float
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // -||-||-

2 BigInt  //числа, больше чем MAX_SAFE_INTEGER
console.log(90071992547409919999999n - 9007199254740991999999n)
console.log(-90071992547409919999999n)
console.log(90071992547409919999999.23231n) // error        нелзя использовать дробные

console.log(10n - 4) // error   BigInt взаимодействует только с BigInt
console.log(parseInt(10n) - 4) //можно преобразовать в Integer
console.log(10n - BigInt(4)) //или в BigInt
console.log(5n / 2n) // 2n    округлит до целого

3 Math
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.abs(-42))
console.log(Math.max(42, 12, 23, 11, 422)) // максимальное из списка
console.log(Math.min(42, 12, 23, 11, 422))  // минимальное из списка
console.log(Math.floor(4.9)) //округляет в меньшую сторону
console.log(Math.ceil(4.9)) //округляет в большую сторону
console.log(Math.round(4.4)) //округляет к ближайшему целому
console.log(Math.trunc(4.9)) //обрезает все после точки
console.log(Math.random()) //функция возвращает рандомное число 0.23443523452456

4 Example
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) ////функция возвращает рандомное целое число в зад. диап
}

console.log(getRandomBetween(10, 42))