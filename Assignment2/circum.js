 var PI=3.14;
 function circum(r,PI)
{
    return 2 *PI * r;
}
console.log("The circumference of circle:"+circum(5,PI));

var circum = function (r,PI)
{
   return 2 *PI * r;
}
console.log("The circumference of circle:"+circum(5,PI));


var circum = (function (r,PI)
{
   return 2 *PI * r;
})
(5,PI);
console.log("The circumference of circle:"+circum);

var circum =  (r,PI)=>2 *PI * r;
console.log("The circumference of circle:"+circum(5,PI));