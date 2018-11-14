const elem = document.getElementById('app')
const name = data.map((item, index) => {
  return item
})
const cars = [
  { car: 'car1', year: 2017 },
  { car: 'car2', year: 2018 },
  { car: 'car3', year: 2019 }
]
const testId = document.getElementById('test')
console.log(cars)
// for (const test in cars) {
//   if (cars.hasOwnProperty(test)) {
//     const element = cars[test]
//     const out = `<h1>${element.car}</h1>
//     <p>${element.year}</p>`
//     console.log(element.car)
//     console.log(element.year)
//     testId.innerHTML = out
//   }
// }

// рендерим все песни в цикле
data.forEach(function(data) {
  var renderedRow = render('product-tpl', data)
  document.getElementById('product-list').appendChild(renderedRow)
})

// рендер темплейта
function render(id, data) {
  var tpl = document.getElementById(id)
  var tplHtml = tpl.innerHTML
  for (var i in data) {
    var repl = new RegExp('{' + i + '}', 'g')
    tplHtml = tplHtml.replace(repl, data[i])
  }
  return parseHTML(tplHtml)
}
// создаем dom-элементы из html-строки
function parseHTML(html) {
  var t = document.createElement('template')
  t.innerHTML = html
  return t.content.cloneNode(true)
}
