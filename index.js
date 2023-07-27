console.log("okay")

//Producing code ---> it will take some time 
let Po = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('this is resoved function');
        //rej('this is rejected function')
    },3000)

})

//consuming code ---> it will wait for the result 

Po.then((d)=>{
 console.log("resolved block", d)
}).catch((e)=>{
    console.log("reject block ", e)

})