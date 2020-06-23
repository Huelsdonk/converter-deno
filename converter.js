import Ask from 'https://deno.land/x/ask';


const ingredients = {
    'flour': 120,
    '00 flour': 106,
    'whole wheat flour': 113,
    'sugar': 198,
    'brown sugar': 213,
    'butter': 227,
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


const ask = new Ask();

const whichOne = await ask.input({
    
      name: 'ingredient',
      type: 'string',
      message: 'Which ingredient would you like to convert?'
    
});

const ing = whichOne.ingredient;

if (Object.keys(ingredients).includes(ing)) {
    const howMuch = await ask.input({
        name: 'amount',
        type: 'number',
        message: 'Enter an amount in cups (number of eggs if eggs):'
    });
    console.log(ingredients[whichOne.ingredient])
}

  