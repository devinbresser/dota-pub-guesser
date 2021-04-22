function callMyServer(){
    fetch('localhost:3000')
    .then(res => res.json)
    .then(matchList =>{
        console.log(matchList)
    })

}
