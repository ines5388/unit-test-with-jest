// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}


// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = (valueInDollar % 1.07) * ;
    // Retornamos el valor en dólares
    return valueInYen;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a pounds
    let valueInPound = valueInYen * 1.07;
    // Retornamos el valor en dólares
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar };