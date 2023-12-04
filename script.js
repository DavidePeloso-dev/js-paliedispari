
const word = prompt('Type a word')

function palindrom(){
    let wordRight = [];
    let wordReverse = [];
    for(i = 0 ; i < word.length ; i++){
        const letter = word[i];
        wordRight.push(letter);
        wordReverse.unshift(letter);
        
    }
    console.log(wordRight);
    console.log(wordReverse);
    if(wordRight.toString() === wordReverse.toString()){
        console.log("it's palindrom")
    } else {
        console.log("it isn't palindrom");
    }
}

palindrom();


