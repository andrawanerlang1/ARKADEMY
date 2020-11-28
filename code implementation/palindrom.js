const cekPalindrom = (input) => {
    //validasi input
    if (typeof(input)!=='string') {
        return console.log('Harap masukkan input string!')
    }
    let inputLow = input.toLowerCase()
    if (inputLow.split("").reverse().join("") === inputLow){
        return console.log(`${input} adalah palindrom`)
    } else {
        return console.log(`${input} BUKAN palindrom`)
    }
}

cekPalindrom('Malam')