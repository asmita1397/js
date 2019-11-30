let img4 = document.getElementById("img4")
let img5= document.getElementById("img5")
let img3= document.getElementById("img3")
let img2= document.getElementById("img2")
let img1= document.getElementById("img1")
img1.addEventListener('click', function () {
    img4.className="addImage"
    img5.className = "addImage"
    //img4.classList.toggle("visible");

})
img1.addEventListener('mouseover', function () {
    img2.src="D:/JS assignment/Assignment6/morning.webp"
    img3.src="D:/JS assignment/Assignment6/pastries.webp"

})
img1.addEventListener('mouseout', function () {
    img2.src="D:/JS assignment/Assignment6/cat.webp"
    img3.src="D:/JS assignment/Assignment6/road.jpg"


})