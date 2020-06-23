import Ask from 'https://deno.land/x/ask/mod.ts';

const ingredients: { [name: string]: number } = {
    'flour': 120,
    '00 flour': 106,
    'whole wheat flour': 113,
    'sugar': 198,
    'brown sugar': 213,
    'butter': 227,
    'butter tbsp': 14.125,
    'brown butter': 182,
    'powdered sugar': 230,
    'water': 227,
    'milk': 227,
    'cream': 227,
    'graham crackers': 142,
    'corn syrup': 312,
    'eggs': 57,
    'cocoa': 85,
    'oats': 99,
    'shortening': 184,
    'chocolate chips': 170,
    'coconut': 85,
    'coconut oil': 156
};


const ask = new Ask({
    prefix: '>>'
});





const startConversion = async () => {

    const whichOne = await ask.input({

        name: 'ingredient',
        type: 'string',
        message: 'Which ingredient would you like to convert?'

    });

    const convert = (amount: number, ing: number) => {
        return `That is ${amount * ing} grams`;
    }


    if (Object.keys(ingredients).includes(whichOne.ingredient)) {
        const howMuch = await ask.input({
            name: 'amount',
            type: 'number',
            message: 'Enter an amount (usually in cups):'
        });
        console.log(convert(howMuch.amount, ingredients[whichOne.ingredient]))
    } else {
        console.log("I can't convert that.")
    }
    
    const again = await ask.confirm({
        name: 'runAgain',
        message: 'Convert another ingredient?'
    })
    if (again.runAgain) {
        startConversion();
    }
    
}

startConversion();


