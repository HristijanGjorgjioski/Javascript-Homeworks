const palindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(palindrome('eyae'))

