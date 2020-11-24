//contoh 1 ===============================================================================//

const cekBilangan = (num) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (num%2===0 && typeof(num)==='number'){
                resolve(num +' adalah bilangan genap')
            } 
            else if (num%2!==0 && typeof(num)==='number'){
                resolve(num + ' adalah bilangan ganjil')
            }
            else {
                reject(new Error("Data inputan salah!"))
            }
        },2000)
    })
}
// cekBilangan(13).then((hasil) => {
//     console.log(hasil)
// }).catch((kesalahan) => {
//     console.log(kesalahan)
// })


//contoh 2 ===============================================================================//

let randomNum = Math.floor(Math.random() * 11); 

const luckyTest = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        if(randomNum>=9){
            resolve('YOUR LUCK IS AT MAX!! ')
        }
        else if(randomNum>=7){
            resolve('Im Lucky Today! ^_^ ')
        }
        else if (randomNum>=5){
            resolve('Im not Lucky Today! :( ')
        } else {
            reject(new Error("Something is wrong"))
        }
    },2000)
})

// luckyTest.then((hasil)=>{
//     console.log(hasil)
// }).catch((err)=>{
//     console.log(err)
// })



