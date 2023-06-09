// OBJECT //

var tv = {
    brand: "Samsung",
    model: "The Frame",
    year: 2023,
    isSmartTv: true,
    inches: [45, 65, 72, 80],
    price: ["10.000 kr", "12.399 kr", "13.499 kr", "14.999 kr"],
    colors:["Black", "Dark Oak", "Light Oak", "White"],
 
    log: function(){
        console.log(tv);
    }
} 

tv.log();

document.getElementById("brand").innerHTML = tv.brand;
document.getElementById("model").innerHTML = tv.model;
document.getElementById("year").innerHTML = tv.year;

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

///// Buttons on click

let buttons = document.querySelectorAll(".size");
document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("size")) {
    buttons.forEach(function (button) {
      button.classList.remove("active");
    });
    evt.target.classList.add("active");
  }
});

/// Slideshow ///

var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2500);
}