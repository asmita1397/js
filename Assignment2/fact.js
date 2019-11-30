function fact(n)
{
    if (n >= 1)
        return n*fact(n-1);
    else
        return 1;
}
console.log("The factorial of 5 is:"+fact(5));

var fact=function (n)
{
    if (n >= 1)
        return n*fact(n-1);
    else
        return 1;
}
console.log("The factorial of 5 is:"+fact(5));

var fact=(function (n)
{
    if (n >= 1)
        return n*fact(n-1);
    else
        return 1;
})
(5);
console.log("The factorial of 5 is:"+fact);

var fact=n=>
{
    if (n >= 1)
    return n*fact(n-1);
    else
    return 1; 
}
console.log("The factorial of 5 is:"+fact(5));