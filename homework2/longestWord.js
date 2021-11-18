const longestWord = (sentence) => {
    const split = sentence.split(' ');
    let word = split[0];

    for(let i = 0; i < split.length; i++){
        if(split[i].length > word.length){
            word = split[i];
        }
      }
      return `Longest word is: ${word}`;
}

console.log(longestWord("In this exerecise I need to find the longest word given through the function"));
