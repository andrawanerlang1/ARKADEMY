let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//merge dataDua ke dalam data
data ={
    ...data,
    name: "Andrawan Erlang",
    email: "andrawan.ep@gmail.com",
    hobby: ['Membaca', 'Gaming', 'Badminton']
    
}

console.log(data)

//mengambil data menggunakan destructuring
const {street : jalan , city : kota} = data.address
console.log(`saya tinggal di jalan ${jalan}, kota ${kota}`)