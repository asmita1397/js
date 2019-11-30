var num_arr = [ 10, 20, 30, 40, 50 ]; 
num_arr.push(1,30);
num_arr.push(3,20);
console.log(num_arr)
num_arr.pop()
console.log(num_arr)

var veg =[];
veg.push("chilli","patato","onion","carrot","capsicum");
console.log(veg)
veg.pop()
console.log(veg)


var vehicle =["Bike","Cycle","scooty","truck","plane"];
vehicle.unshift("bus","auto");
console.log(vehicle);
vehicle.shift();
console.log(vehicle);

var fruit=[];
fruit.unshift("orange","grapes","apple","kiwi","custard_apple");
console.log(fruit);
fruit.shift();
console.log(fruit);


var color =["Red","Yellow","White","Blue","Green"];
console.log(color);
color.splice(1, 3); 
console.log(color)

var n_arr = [ 10, 20, 30, 40, 50 ];
console.log(n_arr);
n_arr.splice(1,0,4)
console.log(n_arr);

var color =["Red","Yellow","White","Blue","Green"];
var vehicle =["Bike","Cycle","scooty","truck","plane"];
var vegitable =["chilli","patato","onion","carrot","capsicum"];
var new_arr = color.concat(vehicle, vegitable);
console.log(new_arr);  

var n_arr = [ 1, 2, 3, 4, 5 ];
var n_arr1=[2,3];
var new_arr1= n_arr.concat(n_arr1);
console.log(new_arr1);  


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits);
var new_fr = fruits.slice(1,3);
console.log(new_fr);

var color =["Red","Yellow","White","Blue","Green"];
var new_color=color.slice(2);
console.log(new_color);


