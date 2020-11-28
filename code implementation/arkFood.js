const arkFood = (harga, voucher, jarak, pajak) => {
    //================ kode untuk promo =======================
    let potongan
    if (voucher === "ARKAFOOD5"){     
        harga>50000?
        potongan = Math.min(harga*0.5, 50000) : potongan = 0
    } else if (voucher === "DITRAKTIRDEMY"){
        harga>25000?
        potongan = Math.min(harga*0.6, 30000) : potongan = 0
    } else { potongan = 0 }
    //=============== kode biaya antar ========================
    let biayaAntar = 5000 + Math.max(((jarak-2)*3000),0)
    //================== kode pajak ============================
    let biayaPajak
    if (pajak) { biayaPajak = (harga*0.05) }
    else { biayaPajak = 0 } ;
    //================= output ================================
    let subTotal = harga-potongan+biayaAntar+biayaPajak
    return console.log(
        `
        Harga : ${harga}
        Potongan : ${potongan}
        Biaya Antar : ${biayaAntar}
        Pajak : ${biayaPajak}
        Sub Total : ${subTotal}
        `
    )
}

arkFood(75000,'ARKAFOOD5',5,true)