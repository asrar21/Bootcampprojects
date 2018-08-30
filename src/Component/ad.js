export function Postdata(type,userdata){
    let baseurl='http://localhost:4000/ad';
    return new Promise((resolve,reject)=>{
        fetch(baseurl,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({ 
               
            name:userdata.name
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