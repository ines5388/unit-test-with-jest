// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(3.5));
console.log(fromEuroToDollar(810));

// Declaro la función "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convierto el valor a yenes
    let valueInYen = (valueInDollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    // Retorno el valor en yenes
    return valueInYen;
}
console.log(fromDollarToYen(1));
console.log(fromDollarToYen(125));

// Declaro la función "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convierto el valor a pounds
    let valueInPound = (valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    // Retorno el valor en pounds
    return valueInPound;
}
console.log(fromYenToPound(1));
console.log(fromYenToPound(980));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };