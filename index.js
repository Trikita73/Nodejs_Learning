// currency_converter

/*
const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"USD", to:"EUR", amount:100})

currencyConverter.convert().then((response) => {
    console.log(`Result: ${response}`)
})
*/


// file_systems

// cинхронные функции
/*
const fs = require('fs')

let result = fs.readFileSync('some.txt', 'utf-8')
console.log(result)
fs.writeFileSync('some.txt', result + '\nHello world!')
*/

// асинхронные функции
/*
const fs = require('fs')

fs.readFile('some.txt', 'utf-8', (err, data) => {
    fs.writeFile('some.txt', data + '\nSome text!', (err, data) => {
        console.log('Everything work!')
    })
})
*/


// модули
/*
const os = require('os')
let res = os.platform()
console.log(res)

const my_math = require('./my_math')
let res1 = my_math.add(4, 5)
let res2 = my_math.minus(6, 9)
console.log(`Res1: ${res1}, Res2: ${res2}`)
*/