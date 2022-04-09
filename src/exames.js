import months from './months.js'

let toPrint = months.filter( (months)=> {
    return months.days === 30
})

console.log(toPrint)

document.getElementById('main').innerHTML = toPrint.month