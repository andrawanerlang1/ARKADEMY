const mtk = 90
const bahasaIndonesia = 90
const bahasaInggris = 80
const ipa = 80

const rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4

//validasi null
if (mtk==null || bahasaIndonesia==null || bahasaInggris==null || ipa==null){
    console.log("Masukkan semua nilai input!");
}
//validasi input number
else if (typeof(mtk)!='number'||typeof(bahasaIndonesia)!='number'||typeof(bahasaInggris)!='number'||typeof(ipa)!='number'){
    console.log("Masukkan input berupa number!");
}
//validasi range input
else if ((mtk>100||mtk<0)||(bahasaIndonesia>100||bahasaIndonesia<0)||(bahasaInggris>100||bahasaInggris<0)||(ipa>100||ipa<0)){
    console.log("Masukkan nilai dengan range 0 sampai 100!");
}
//percabangan hasil rata-rata
else if(rataRata >= 90 && rataRata <= 100){
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
