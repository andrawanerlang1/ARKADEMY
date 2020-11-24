const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false ;
        let month = ['Jauary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December']
        if(!error){
            callback(null, month)
        } else {
            callback(new Error("Sorry data not found!"))
        }
    }, 4000)
}

const showMonth = (err, month) => {
    if (err) { 
        return console.log(err)
    } else {
        return month.map((bulan)=> console.log(bulan))
    }
}

getMonth(showMonth)