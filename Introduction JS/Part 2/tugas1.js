//Method

//1. toString() ; Mengubah bentuk data menjadi bentuk string
let a = 12345
let b = a.toString()
//console.log(`${typeof(a)} ${typeof(b)} ${b}`)

//2. Date() ; Mendapatkan waktu lokal
let c = Date()
//console.log(c)

//3. Math.min() ;  Mendapatkan nilai number terkecil dari input
//console.log(Math.min(10, 14, -20, 0, -10, 19, 5))

//4. Math.max() ; Mendapatkan nilai number terbesar dari input
let d = [10, 14, -20, 0, -10, 19, 5] //bisa menggunakan array dengan spread operator
//console.log(Math.max(...d))

//5. Math.floor() ; Menghasilkan pembulatan ke bawah dari nilai input
//console.log(Math.floor(13.75)) 

//6. Math.ceil() ; Menghasilkan pembulatan ke atas dari nilai input
//console.log(Math.ceil(13.75))

//7. Math.round() ; Menghasilkan pembulatan ke nilai satuan terdekat
//console.log(Math.round(13.7))

//8. concat() ; menggabungkan 2 string atau array menjadi sebuah string atau array baru
let f = "halo nama saya"
let g = " andrawan erlang"
let h = f.concat(g)
//console.log(h)

//9. map() ; membuat array baru yang merupakan hasil pemanggilan fungsi pada tiap elemen
let i = [1,2,3,4,5,6]
fungsiSatu = (x) => x*2
//console.log(i.map(fungsiSatu))

//10. sort() ; Menghasilkan array yang sudah di urutkan berdasarkan fungsi pembandingnya
let j = [1,4,5,2,3,6,8,7]
let sorted = j.sort((a,b)=>b-a)  //fungsi pembanding untuk menentukan jenis urutan
//console.log(sorted)