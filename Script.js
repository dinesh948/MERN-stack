/*var a=10
{
    console.log(5+"5");
    console.log(5-"5");
    var a=20
    let arr=[1,'new',2,3]
    console.log(arr);

}
console.log(a);
let mark=30;
let result= mark>=40?'pass':'fail'
console.log(result);
console.log(18^8)
 function add(a,b){
    console.log(a+b)
 }
 
 const sub=(a,b)=>{console.log(a-b)}
const mul=(a,b)=>{console.log(a*b)}
const calc=(a,b,fun)=>{
    fun(a,b)
}
calc(4,3,add)
let arr1=[1,2,3,4,5,6]
let [first,...other]=arr1
console.log(other)*/
/*
const promise=new Promise((resolve,reject)=>{
    let success=false
    if(success){
        resolve("data received successfully")
    }else{
        reject("error fetching data")
    }
})
promise.then((data)=>console.log(data)).catch((error)=>console.log(error))
*/
async function fetchData() {
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await res.json()
        console.log(data)
        data.map((user)=>console.log(`${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}`))
    }catch(error){
        console.log(error)
    }
}
fetchData()