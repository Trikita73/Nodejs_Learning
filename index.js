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
const fs = require('fs')

fs.readFile('some.txt', 'utf-8', (err, data) => {
    fs.writeFile('some.txt', data + '\nSome text!', (err, data) => {
        console.log('Everything work!')
    })
})