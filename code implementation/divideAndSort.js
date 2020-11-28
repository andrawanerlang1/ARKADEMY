const divideAndSort = (input) => {
    let divided = input.toString().split('0')
    let sorted = divided.map((x)=> x.split("").sort().join(""))
    let sortedDivided = sorted.join("")
    let hasil = parseInt(sortedDivided,10)

    return console.log(hasil)
}

divideAndSort(1321503124012453)