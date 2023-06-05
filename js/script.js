
// OBJECT //

var tv = {
    brand: "Samsung",
    model: "The Frame",
    isSmartTv: true,
    inches: [45, 65, 72, 80],
    on: false,
    inStock: true,
    price: ["10.000 kr", "12.399 kr", "13.499 kr", "14.999 kr"],
    colors:["Black", "Dark Oak", "Light Oak", "White"],
}

var inStock = true;


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

///// How can I change this so that it only affect one button at a time? 

function buttonColor(size) {
    var changeColor = document.getElementById(size);
    changeColor.addEventListener ("click", function () {
        changeColor.style.backgroundColor = "#CBCBCB";
        changeColor.style.borderColor = "#9B9B9B";
    });
}

buttonColor ("size1")
buttonColor ("size2")
buttonColor ("size3")
buttonColor ("size4")

///// Possible to make a if / else for the quantity, with in stock and not in stock. 
