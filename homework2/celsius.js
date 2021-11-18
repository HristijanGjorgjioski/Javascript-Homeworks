//* Da se napisat dve funkcii koi sto ke konvertiraat temperatura od Farenhajtovi vo Celziusovi stepeni i obratno. 
//* Originalnata temperatura se prima kako parametar i od funkcijata se vrakja konvertiranata temperatura. 
//* Bonus: istoto da se napravi samo so edna funkcija


//! In two functions
const convertCelsius = (celsius) => {
    if(isNaN(celsius)) return 'Invalid input!';
    const converted = (celsius * (9/5) + 32).toFixed(0);
    return `${celsius} celsius to fahrenheit is: ${converted} f`;
}

const convertFahrenheit = (fahrenheit) => {
    if(isNaN(fahrenheit)) return 'Invalid input!';
    const converted = ((fahrenheit - 32) * (5/9)).toFixed(0); 
    return `${fahrenheit} fahrenheit to celsius is: ${converted} c`;
}

console.log(convertFahrenheit(0));
console.log(convertCelsius(0));

////////////////////////////////////////////////////////////////////////

//! In one function
const convertTempToCelsiusAndFahrenheit = (temp) => {
    const convertedToCelsius = ((temp - 32) * (5/9)).toFixed(0);
    const convertedToFehrenheit = (temp * (9/5) + 32).toFixed(0);

    return `${temp} to celsius: ${convertedToCelsius} c\n${temp} to fahrenheit: ${convertedToFehrenheit} f`;
}

console.log(convertTempToCelsiusAndFahrenheit(32));

