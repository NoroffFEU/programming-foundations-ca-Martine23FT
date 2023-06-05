
// OBJECT //

var tv = {
    brand: "Samsung",
    model: "The Frame",
    isSmartTv: true,
    inches: [45, 65, 72, 80],
    on: false,
    inStock: true,
    price: [10000, 12399, 13499, 14999],
    colors:["Black", "Dark Oak", "Light Oak", "White"],
    
    power: function () {
        tv.on = !tv.on;
        document.getElementById("on").textContent = tv.on ? "On" : "Off";
    },
}

console.log(tv);

document.getElementById("brand").innerHTML = tv.brand;
document.getElementById("model").innerHTML = tv.model;


// Buttons //

function displayColorName(elementID, number){
    var colorBtn = document.getElementById(elementID);
    colorBtn.addEventListener("click", function () {
    document.getElementById("color").textContent = tv.colors[number];
    });  
}

displayColorName("color1", 0);
displayColorName("color2", 1);
displayColorName("color3", 2);
displayColorName("color4", 3);

var powerBtn = document.getElementById("power");
powerBtn.addEventListener("click", function () {
tv.power(); 
});

function displayTvPrice(size, number){
    var sizeBtn = document.getElementById(size);
    sizeBtn.addEventListener("click", function () {
    document.getElementById("price").textContent = tv.price[number];
    });  
}

displayTvPrice("size1", 0);
displayTvPrice("size2", 1);
displayTvPrice("size3", 2);
displayTvPrice("size4", 3);
