// for given itrate json format(for, for in, for of)

let obj={
    name:"aravinth",
    age:22,
    study:"fullstack development"

}

/// json format for of

 for (let value of Object.values(obj)){
    console.log(value);
 }

 for (let key of Object.keys(obj)){
    console.log(key)
 }

 /// json format for in 

 for  ( let key in Object.keys(obj)){
    console.log(key)
 }



 /// array

 let details = ["Tamil","English","Mathematics","science","social science"]

 for(let value of details){
    console.log(value)
 }

for( let key in details){
    console.log(key)
}