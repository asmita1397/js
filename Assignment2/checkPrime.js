function isPrime(num,i){
  if(i==1){
        return false;
    }
    else{
       if(num%i==0)
         return true;
       else
         isPrime(num,i-1);
    }
}
console.log("The given number is prime??"+isPrime(5,5/2));

var isPrime=function (num,i){
  if(i==1){
        return false;
    }
    else{
       if(num%i==0)
         return true;
       else
         isPrime(num,i-1);
    }
}
console.log("The given number is prime??"+isPrime(5,5/2));


var isPrime=(function (num,i){
  if(i==1){
        return false;
    }
    else{
       if(num%i==0)
         return true;
       else
         isPrime(num,i-1);
    }
})
(5,5/2);
console.log("The given number is prime??"+isPrime);



var isPrime= (num,i)=>
{
  if(i==1){
        return false;
    }
    else{
       if(num%i==0)
         return true;
       else
         isPrime(num,i-1);
    }
}
console.log("The given number is prime??"+isPrime(5,5/2));

