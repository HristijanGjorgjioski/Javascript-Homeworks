//* prosecna temperatura
//* najdi najtopol i najstuden den
const temp = [12, 13, 20, 24, 31, 42, 18, 10, 6, 17, -8];

let avgTemp = 0, maxTemp = 0, minTemp = 50;

for (let index = 0; index < temp.length; index++) {
    avgTemp += temp[index];
    (temp[index] > maxTemp) && (maxTemp = temp[index]);
    (temp[index] < minTemp) && (minTemp = temp[index]);
}
avgTemp /= temp.length;
avgTemp = avgTemp.toFixed(1);

console.log(`Average temperature: ${avgTemp}\nMaximum Temperature: ${maxTemp}\nMinimum Temperature: ${minTemp}`);
