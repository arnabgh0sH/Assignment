function reverse(str,substr){
   return str.split(substr).reverse().join(substr)
}
let str ="I am having the worst time in my life";
let str1=reverse(str,"")

let str2=reverse(str1," ")

console.log(str2)