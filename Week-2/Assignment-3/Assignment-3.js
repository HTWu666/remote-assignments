function count(input) {
    const obj = {};

    for (let i = 0; i < input.length; i++) {
        if (!(input[i] in obj)){
            obj[input[i]] = 1;
            console.log(obj);
        } else {
            obj[input[i]]++;
        }
    }

    return obj;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    const obj = {};

    for (let i = 0; i < input.length; i++) {
        let key = input[i]["key"];
        let value = input[i]["value"];

        if (!(key in obj)){
            obj[key] = value;
        } else {
            obj[key] += value;
        }
    }

    return obj;
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];

console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}