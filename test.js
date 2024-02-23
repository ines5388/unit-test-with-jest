// test de suma
test('adds 14 + 9 to equal 23', () => {
    const { sum } = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23);
});

//test fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745);
})

//test fromDollarToYen
test("1 dollar should be 146.26168224299064 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(1);
    expect(yenes).toBe(146.26168224299064);
})

//test fromDollarToYen
test("125 dollars should be 18282.71028037383 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(125);
    expect(yenes).toBe(18282.71028037383);
})


//test fromYenToPound
test("1 yen should be 0.0055591054313099035 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1);
    expect(pounds).toBe(0.0055591054313099035);
})

//test fromYenToPound
test("980 yenes should be 5.447923322683706 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(980);
    expect(pounds).toBe(5.447923322683706);
})