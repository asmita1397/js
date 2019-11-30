var str = "Hello world ,hi world";
console.log(str)
var pos = str.indexOf("world");
console.log("index of world",pos);
var pos1 = str.lastIndexOf("world",11);
console.log("last index of world",pos1);
var pos2 = str.search("hi");
console.log("search string prsent is",pos2);

var str1 = "Welcome to javascript";
var ps1 = str1.indexOf("to",2);
console.log("index of string is",ps1);
var ps2 = str.lastIndexOf("ot",9);
console.log("last index of string is",ps2);
var ps3 = str.search("hi");
console.log("search string present at",ps3);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res)

var str1 = "Good morning";
var res1 = str1.slice(-8, -4);
console.log(res1)


var s = "Apple, Banana, Kiwi";
var r = s.substring(7, 13);
var rs = str.substr(-4);
console.log(r)
console.log(rs)

var s1 = "Good morning";
var r1 = s1.substring(-8, 4);
var r2 = s1.substr(-4);
console.log(r1)
console.log(r2)



var st= "hello java";
var n = st.replace("java", "JavaScript");
console.log(n)

var st2= "hello India";
var n1 = st2.replace("India", "Bharath");
console.log(n1)


var text1 = "Hello World!";      
var text2 = text1.toUpperCase();
var text3=text1.toLowerCase();
console.log(text2);
console.log(text3);