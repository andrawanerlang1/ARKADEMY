const listNama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',    
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function searchName(str, num, callback){
    //validasi input
    if(typeof(str)!=='string'){return console.log("Masukkan input awal string!")}
    if(typeof(num)!=='number'){return console.log("Masukkan input tengah number!")}
    if(typeof(callback)!=='function'){return console.log("Masukkan input akhir fungsi!")}
    if(num<0){return console.log("Nilai num harus positif!")}

    //looping fungsi callback pada tiap elemen array nama
    let hasil = []
    listNama.map(
        function(listNama) { 
            if ((callback(listNama,str))){
                hasil.push(callback(listNama,str))
            }
        }
    )

    //mengurangi array supaya panjangnya num
    while(hasil.length>num) { hasil.pop() }

    console.log(hasil)
}

byAlphabet =(name,str) =>{
    let a = str.split("")
    let i = 0
    while (i<a.length){
        (name.search(a[i])!==-1)?i++:i='tidak ada';
    }
    if(i!=='tidak ada'){
        return name
    }
}

byWord =(name,str) =>{
    if(name.search(str)!==-1){
        return name
    }
}



searchName("an",3,byAlphabet)
searchName("el",5,byAlphabet)

