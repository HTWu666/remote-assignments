// Modify count function with reduce method
let input1 = ["a", "b", "c", "a", "c", "a", "x"];

// reduce method1 has reusability
function count(acc, element) {
    if (element in acc) {
        acc[element]++;
    } else {
        acc[element] = 1;
    }
    return acc
}
console.log(input1.reduce(count, {})); // should print {a:3, b:1, c:2, x:1}

// reduce method2 with arrow function
console.log(input1.reduce((acc, element) => {
    if (element in acc) {
        acc[element]++;
    } else {
        acc[element] = 1;
    }
    return acc;
}, {})); // should print {a:3, b:1, c:2, x:1}


// Modify groupByKey function with reduce method
let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];

// reduce method1 has reusability
function groupByKey(acc, object) {
    let key = object["key"];
    let value = object["value"];

    if (key in acc) {
        acc[key] += value;
    } else {
        acc[key] = value;
    }

    return acc;
}
console.log(input2.reduce(groupByKey, {})); // should print {a:6, b:1, c:7}

// reduce method2 with arrow function
console.log(input2.reduce((acc, object) => {
    let key = object["key"];
    let value = object["value"];

    if (key in acc) {
        acc[key] += value;
    } else {
        acc[key] = value;
    }

    return acc;
    }, {})
); // should print {a:6, b:1, c:7}