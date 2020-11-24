fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
  .then(dataArray => {
    dataArray.map((dataObject, index)=>{
      console.log(`${index+1}.  ${dataObject.name}`)
    })
  });