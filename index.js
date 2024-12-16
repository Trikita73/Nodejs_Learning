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


// папки 

/*
const fs = require('fs')

// синхронная функция
//fs.mkdirSync('text-files')

// асинхронная функция
fs.mkdir('text-files', () => {
    fs.writeFile('./text-files/some.txt', 'Hello', () => { })
})

// удаление
fs.unlink('./text-files/some.txt', () => {
    fs.rmdir('./text-files', () => { })
})
*/        


// Создание сервера

/*
const http = require('http')

let server = http.createServer((req, res) => {
    //res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    //res.end('Hello Node JS')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(`<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Server Node JS</title>
                    </head>
                    <body>
                        <h2>Server Node JS!</h2>
                    </body>
                </html>`
            )
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log(`Cервер запущен: http://${HOST}:${PORT}`)
})
*/


// Отслеживание URL

const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    if(req.url == '/') {
        fs.createReadStream('./temps/index.html').pipe(res)
    } else if (req.url == '/about') {
        fs.createReadStream('./temps/about.html').pipe(res)
    } else {
        fs.createReadStream('./temps/error.html').pipe(res)
    }
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log(`Cервер запущен: http://${HOST}:${PORT}`)
})



