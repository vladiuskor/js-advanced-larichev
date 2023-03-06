// Exercise 2

/*
    Написати функцію, яка приймає 3 параметри:
        - сума
        - валюта
        - валюта для конвертації
   Функція має повертати рядок вже законвертованої суми з постфіксом валюти. Якщо не вийшло, то повертає null
   Для прикладу - 3 валюти
*/

function convertMyMoney(sum, initialCurrency, convertCurrency ) {
    const allCurrencies = [
        {
            name: 'USD',
            mult: 1
        },
        {
            name: 'EUR',
            mult: 1.07
        },
        {
            name: 'UAH',
            mult: 1/36.56
        }
    ];

    const initial = allCurrencies.find(c => c.name === initialCurrency);
    if (!initial) return null;

    const convert = allCurrencies.find(c => c.name === convertCurrency);
    if(!convert) return null;

    return new Intl
        .NumberFormat('uk-UA', {style: 'currency', currency: convert.name})
        .format(sum * initial.mult / convert.mult);
}

console.log(convertMyMoney(100, 'USD', 'UAH'));