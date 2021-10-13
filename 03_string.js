const name = 'Владилен'
const age = 26

function getAge() {
  return age
}

const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.` // обратные ковычки(похоже на f-string)
//Можно многострочно, переносы строк учитываются
const output = `
  <div>This is div</div>
  <p>this is o</p>
`

console.log(output)

const name = 'Владилен'
console.log(name.length)
console.log(name.toUpperCase()) //переводит в заглавные
console.log(name.toLowerCase()) //переводит в строчные
console.log(name.charAt(2)) //выведет какой символ на 2м индексе
console.log(name.indexOf('!')) //проверяет,есть ли в строке. Выводит индекс начала. Если нету -1.
console.log(name.toLowerCase().startsWith('влад'))
console.log(name.startsWith('Влад')) //проверка начинается ли строка с ...
console.log(name.endsWith('ен!'))  //проверка заканчивается ли строка  ...
console.log(name.repeat(3)) //повторяет строку такое кол-во раз
const string = '     password      '
console.log(string.trim()) //очищает пробелы
console.log(string.trimLeft())//очищает пробелы слева
console.log(string.trimRight())//очищает пробелы справа

function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Еще не родился'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Владилен'
const personName2 = 'Максим'
const personAge = 26
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)
