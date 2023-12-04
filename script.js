
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

function generateNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber
}



function sum(numb1, numb2){
    const result = numb1 +  numb2;
    return result;
}

function evenOrOdd(numb){
    if(numb % 2 == 0){
        const message = "even";
        return message
    } else {
        const message = "odd";
        return message
    }
}

const choose = prompt('type even or odd')
if(choose == 'even' || choose == 'odd'){
    const userNumber = Number(prompt('type a number from 1 to 5'));
    if(userNumber > 5 || userNumber < 1){
        alert('you have to type only a number from 1 to 5')
    } else {
        const computerNumber = generateNumber(1, 5)

        console.log(computerNumber);
        const result = sum(userNumber, computerNumber);
        console.log(result);
        if(evenOrOdd(result) == choose){
            console.log(`it's ${choose}, you won!`);
        } else {
            console.log(`it isn't ${choose}, you lose!`);
        };

    }
} else {
    alert('you have to type only even or odd');
}


