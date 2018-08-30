export function Postdata(type,userdata){
    let baseurl='http://localhost:4001/post';
    return new Promise((resolve,reject)=>{
        fetch(baseurl,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({ 
                name:userdata.name,
                description:userdata.description,
                price:userdata.price
            })
                
           
        })
        .then((response)=>{

            return response.json()
        })
        .then((resposnejson)=>{
            resolve(resposnejson);
        }
    ).catch((error)=>{
        console.log("error")
       reject(error);
    })

    })
}