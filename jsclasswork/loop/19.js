//prime1to20
for(let i=2;i<=20;i++){
let prime=true;
for(let j=2;j<i;j++){
if(i%j==0){
prime=false;
}
}
if(prime){
console.log(i);
}
}
