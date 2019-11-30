function fib(n, a = 0, b = 1) 
{
    if (n == 0)
        return a;
    if (n == 1)
        return b;
    return fib(n - 1, b, a + b);
}
console.log("The series elements are :");
for (let index = 0; index <= 5; index++) 
{
    console.log(fib(index) + "  ");
}

var fib = function (n, a = 0, b = 1) {
    if (n == 0)
        return a;
    if (n == 1)
        return b;
    return fib(n - 1, b, a + b);
}
for (let index = 0; index < 5; index++) {
    console.log(fib(index) + "  ");
}




var fib = (function (n, a = 0, b = 1) {
 if (n == 0)
 return a;
if (n == 1)
return b;
return fib(n - 1, b, a + b);
})
(5);
console.log(5)
     
     



var fib = (n, a = 0, b = 1) => {
    if (n == 0)
        return a;
    if (n == 1)
        return b;
    return fib(n - 1, b, a + b);
}
for (let index = 0; index < 5; index++) {
    console.log(fib(index) + "  ");
}




