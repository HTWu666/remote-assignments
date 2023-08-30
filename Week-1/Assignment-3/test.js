function countAandB(input){
    let cnt = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] === "a" || input[i] === "b"){
            cnt++;
        }
    }
    return cnt;
}

function toNumber(input){
    let newInput = [];
    for(let i = 0; i < input.length; i++){
        let letter = input[i];
        if(letter >= "a" && letter <= "z"){
            let number = letter.charCodeAt(0) - 96; // ascii code of "a" is 97
            newInput.push(number);
        }
    }
    return newInput;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']
console.log(countAandB(input1));
console.log(toNumber(input1));

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));
console.log(toNumber(input2));