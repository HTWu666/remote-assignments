async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    await setTimeout(() => {
        const result = 4 + 5;
        console.log(result);
    }, 3000)
}

main(); //result will be shown in the console after <delayTime> seconds