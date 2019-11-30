function arraysum()
{
    var arr=[10,20,30,40,50];
    var element=0;
    for (let index = 0; index < arr.length; index++) {
    element = element+arr[index];
    }
    return element;
}
console.log("The sum of array is"+arraysum());


var arraysum =function ()
{
    var arr=[10,20,30,40,50];
    var element=0;
    for (let index = 0; index < arr.length; index++) {
    element = element+arr[index];
    }
    return element;
}
console.log("The sum of array is"+arraysum());

var arraysum =(function ()
{
    var arr=[10,20,30,40,50];
    var element=0;
    for (let index = 0; index < arr.length; index++) {
    element = element+arr[index];
    }
    return element;
})
();
console.log("The sum of array is"+arraysum);


var arraysum =()=>
{
    var arr=[10,20,30,40,50];
    var element=0;
    for (let index = 0; index < arr.length; index++) {
    element = element+arr[index];
    }
    return element;
}
console.log("The sum of array is"+arraysum());
