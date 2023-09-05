// Modify count function with forEach method
// forEach method1 has reusability
const output1 = {};
function count1(element){
    if ((element in output1)){
        output1[element]++;
    } else {
        output1[element] = 1;
    }
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
input1.forEach(count1); // By forEach method, each element in array is sequentially executed in the count2 function
console.log(output1); // should print {a:3, b:1, c:2, x:1}

// forEach method2 with arrow function
const output2 = {};
input1.forEach(element => {
    if ((element in output2)){
        output2[element]++;
    } else {
        output2[element] = 1;
    }
})
console.log(output2); // should print {a:3, b:1, c:2, x:1}

// Modify groupByKey function with forEach method
// forEach method1 has reusability
const output3 = {};
function groupByKey1(object){
    let key = object["key"];
    let value = object["value"];

    if (key in output3){
        output3[key] += value;
    } else {
        output3[key] = value;
    }
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
input2.forEach(groupByKey1);
console.log(output3); // should print {a:6, b:1, c:7}

// forEach method2 with arrow function
const output4 = {};
input2.forEach(object => {
    let key = object["key"];
    let value = object["value"];

    if(key in output4){
        output4[key] += value;
    } else {
        output4[key] = value;
    }
})
console.log(output4); // should print {a:6, b:1, c:7}