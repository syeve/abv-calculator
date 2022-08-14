
let ounceArr = []
let totalOunces = 0
let numerator = 0
let alcContent = 0

function ifChecked(item) {
    item.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            let ounces = prompt('How many ounces?')
            ounceArr.push({
                spirit: item.name,
                ounces: ounces
            })
        }
    })
}

function calculate() {
    for (let i = 0; i < ounceArr.length; i++) {
        if (ounceArr[i].spirit === 'mixer') {
            totalOunces += parseInt(ounceArr[i].ounces)
        }
        else {
            totalOunces += parseInt(ounceArr[i].ounces)
            numerator += parseInt(ounceArr[i].ounces) * 0.40
        }
    }
    alcContent = numerator / totalOunces
    totalOunces = 0
    numerator = 0

    document.getElementById('output-val').innerHTML = Math.round(alcContent * 100) / 100
}
