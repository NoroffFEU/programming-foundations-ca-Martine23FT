// TV //

var tv = {
    brand: "Samsung",
    model: "The Frame",
    isSmartTv: true,
    inches: [45, 65, 72, 85],
    colors: ["Black", "Dark Oak", "Light Oak", "White"],
    on: false,
    inStock: true,

    power: function () {
        tv.on = !tv.on;
        document.getElementById("on").textContent = tv.on ? "On" : "Off";
    },
} 

console.log(tv);

document.getElementById("brand").innerHTML = tv.brand;
document.getElementById("model").innerHTML = tv.model;
document.getElementById("color").innerHTML = tv.colors;

var powerBtn = document.getElementById("power");
powerBtn.addEventListener("click", function () {
tv.power(); })






