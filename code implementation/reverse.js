const balikKata = (input) => {
    //validasi input
    if (typeof(input)!=='string') {
        return console.log('Harap masukkan input string!')
    }
    return console.log(
        input.split(" ").reverse().join(" ")
    )
}

balikKata('Begadang jangan begadang, jika tiada artinya')