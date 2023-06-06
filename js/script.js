
// OBJECT //

var tv = {
    brand: "Samsung",
    model: "The Frame",
    isSmartTv: true,
    inches: [45, 65, 72, 80],
    inStock: true,
    price: ["10.000 kr", "12.399 kr", "13.499 kr", "14.999 kr"],
    colors:["Black", "Dark Oak", "Light Oak", "White"],
    options: 
    [
        {
            name: "Option 1",
            screenSize: 45,
            inStock: 3,
            colour: "Black"     
        },

        {
            name: "Option 2",
            screenSize: 65,
            inStock: 5,
            colour: "Dark Oak"
        },

        {
            name: "Option 3",
            screenSize: 72,
            inStock: 11,
            colour: "Light Oak"
        },

        {
            name: "Option 4",
            screenSize: 80,
            inStock: 17,
            colour: "White"
        }
    ]
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

///tvOption1 = {
    ///screenSize: 45,
    ///colour: "Black",
    ///inStock: 3,
///}

///if (inStock < 3) {
    ///document.getElementById("availability").textContent = "IN STOCK";
///}

///else {
    ///document.getElementById("availability").textContent = "NOT IN STOCK";
///}