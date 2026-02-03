//reverse12345
let n=12345;
let rev=0;
while(n>0){
rev=rev*10+n%10;
n=Math.floor(n/10);
}
console.log(rev);
