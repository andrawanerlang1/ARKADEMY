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
 
async function async(callback){
    //try digunakan untuk menjalankan kode apabila kondisi berhasil
    try {
        let hasil = await callback
        //await akan menunggu sampai fungsi callback selesai berjalan
        console.log(hasil + ' adalah hari kerja')
    } catch (error) {
        //error akan ditangkap dan dijalankan oleh catch
        console.log(error)
    }
}

async(cekHariKerja('selasa'))