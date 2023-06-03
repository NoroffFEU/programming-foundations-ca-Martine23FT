
var tv = {
    brand: "Samsung",
    model: "The Frame",
    isSmartTv: true,
    inches: [45, 65, 72, 85],
    on: false,
    inStock: true,
    price: 10.000,

    color1: "Black",
    color2: "Dark Oak",
    color3: "Light Oak",
    color4: "white",

    power: function () {
        tv.on = !tv.on;
        document.getElementById("on").textContent = tv.on ? "On" : "Off";
    },

    colorOne: function () {
        tv.color1 = !tv.color1;
        document.getElementById("color").textContent = tv.color1 ? "Black" : "Black";
    },

    colorTwo: function () {
        tv.color2 = !tv.color2;
        document.getElementById("color").textContent = tv.color2 ? "Dark Oak" : "Dark Oak";
    },

    colorTree: function () {
        tv.color3 = !tv.color3;
        document.getElementById("color").textContent = tv.color3 ? "Light Oak" : "Light Oak";
    },

    colorFour: function () {
        tv.color4 = !tv.color4;
        document.getElementById("color").textContent = tv.color4 ? "White" : "White";
    },
}

//Possible to do the same with inches? //

console.log(tv);

document.getElementById("brand").innerHTML = tv.brand;
document.getElementById("model").innerHTML = tv.model;
document.getElementById("inches").innerHTML = tv.inches;

var colorBtn1 = document.getElementById("color1");
colorBtn1.addEventListener("click", function () {
tv.colorOne(); })

var colorBtn2 = document.getElementById("color2");
colorBtn2.addEventListener("click", function () {
tv.colorTwo(); })

var colorBtn3 = document.getElementById("color3");
colorBtn3.addEventListener("click", function () {
tv.colorTree(); })

var colorBtn4 = document.getElementById("color4");
colorBtn4.addEventListener("click", function () {
tv.colorFour(); })

var powerBtn = document.getElementById("power");
powerBtn.addEventListener("click", function () {
tv.power(); })

// colors: ["Black", "Dark Oak", "Light Oak", "White"],