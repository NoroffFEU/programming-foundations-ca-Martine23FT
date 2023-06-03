// TV //

var tv = {
    brand: "Samsung",
    model: "The Frame",
    isSmartTv: true,
    colors: ["Black", "Dark Oak", "Light Oak", "White"],
    inches: [45, 65, 72, 85],
    on: false,
} 

console.log(tv);
document.getElementById("brand").innerHTML = tv.brand;


var ignitionButton = document.getElementById("ignition");
ignitionButton.addEventListener("click", function () {
    tv.ignition();
    document.getElementById("on").textContent = tv.on ? "On" : "Off";
});



document.querySelector("h2").innerHTML = "Its weekend"
// IF & ELSE - Lage dette om i forhold til fargevalg og størrelse? //

var tvOption = {
    color: "Black",
    size: 45,
    inStock: true
}

if (inStock === true) {
    console.log("In stock");
}

else {
    console.log("NOT in stock");
}

console.log(inStock);

// FUNCTION ON BUTTON //

