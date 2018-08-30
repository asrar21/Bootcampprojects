export function Postdata(type,userdata){
    let baseurl='http://localhost:4001/user/signup';
    return new Promise((resolve,reject)=>{
        fetch(baseurl,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({ 
                email:userdata.email,
                password:userdata.password
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