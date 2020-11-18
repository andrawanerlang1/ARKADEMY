
printSegitiga = (input) => {
    if (typeof(input) !== 'number'){
        console.log('Masukkan input angka!')
    }
    let hasil = ""
    for (let x=input; x>0;x--){
        for (let y=1; y<=input;y++){
            if(x>=y){
                hasil += `${y}`
            }
        }
        hasil += '\n'
    }
    console.log(hasil)
}

printSegitiga(7)