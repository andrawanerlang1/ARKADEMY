const mtk = 80
const bahasaIndonesia = 50
const bahasaInggris = 89
const ipa = 69

//validasi
if (mtk==null || bahasaIndonesia==null || bahasaInggris==null || ipa==null){
    console.log("Masukkan semua nilai input!");
}

const rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4

if(rataRata >= 90 && rataRata <= 100){
    console.log(`Rata-rata = ${rataRata}\nGrade = A`)
}
else if (rataRata >= 80 && rataRata <= 89){
    console.log(`Rata-rata = ${rataRata}\nGrade = B`)
}
else if (rataRata >= 70 && rataRata <= 79){
    console.log(`Rata-rata = ${rataRata}\nGrade = C`)
}
else if (rataRata >= 60 && rataRata <= 69){
    console.log(`Rata-rata = ${rataRata}\nGrade = D`)
}
else if (rataRata >= 0 && rataRata <= 59){
    console.log(`Rata-rata = ${rataRata}\nGrade = E`)
}