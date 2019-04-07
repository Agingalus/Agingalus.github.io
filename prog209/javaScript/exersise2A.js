for (let i = 0; i < 300; i++) {
    if ((i + 1) % 5 === 0) {
        console.log("Fizz");
    } else if ((i + 1) % 7 === 0) {
        console.log("Fuzz")
    } else {
        console.log(i + 1)
    }
}