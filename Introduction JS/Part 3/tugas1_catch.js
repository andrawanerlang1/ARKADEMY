const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', ]
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error("Hari ini bukan hari kerja"))
            }
        },3000)
    })
}

cekHariKerja('senin').then((hasil) => {
    console.log(hasil+" adalah hari kerja")
    //then digunakan apabila promise berhasil, menjalankan fungsi yang nilainya diambil dari resolve
}).catch((kesalahan) => {
    console.log(kesalahan)
    //catch digunakan apabila promise gagal, menjalankan fungsi yang nilainya diambil dari reject
})
