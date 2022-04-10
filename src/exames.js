import months from './months.js'

 const days31 = months.filter( (months)=> {
    return months.days === 30
})

console.log(filterMonths)

let toPrint = ''

days31.forEach(days => {
   toPrint += ', ' + days.months
});

document.getElementById('main').innerHTML = toPrint