const seleksiNilai = (par1,par2,arr)=>{
    //validasi input
    if(par1>par2){ return console.log("Nilai akhir harus lebih besar dari nilai awal")}
    if(typeof(par1)!=='number'){ return console.log("Input awal harus number!")}
    if(typeof(par2)!=='number'){ return console.log("Input tengah harus number!")}
    if (Array.isArray(arr)!==true){ return console.log("Input akhir harus array!")}
    if (arr.length<5){return console.log("jumlah data array harus lebih dari 5 nilai!")}

    let hasil = arr.sort((a, b)=> a-b).filter(x=>(x>par1 && x<par2))
    //validasi hasil tidak kosong
    if (hasil.length < 1) { return console.log("Jumlah angka dalam dataArray tidak ada") }
    
    console.log(hasil)
}

seleksiNilai(3 , 10 , [1,5,2,4,3,8,6,7,9,11,10,15,14,13])