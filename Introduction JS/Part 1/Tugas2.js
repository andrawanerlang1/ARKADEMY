const mtk = 90
const bahasaIndonesia = 89
const bahasaInggris = 89
const ipa = 89

const rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4

//validasi null
if((!mtk&&mtk!=0) || (!bahasaIndonesia&&bahasaIndonesia!=0) || (!bahasaInggris&&bahasaInggris!=0) || (!ipa&&ipa!=0)){
    console.log("Masukkan semua nilai input!");
}
//validari input number
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
else if (rataRata >= 80 && rataRata < 90){
    console.log(`Rata-rata = ${rataRata}\nGrade = B`)
}
else if (rataRata >= 70 && rataRata < 80){
    console.log(`Rata-rata = ${rataRata}\nGrade = C`)
}
else if (rataRata >= 60 && rataRata < 70){
    console.log(`Rata-rata = ${rataRata}\nGrade = D`)
}
else if (rataRata >= 0 && rataRata < 60){
    console.log(`Rata-rata = ${rataRata}\nGrade = E`)
}
