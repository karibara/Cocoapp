
const recipeBtn = document.getElementById("recipeBtn");

let cocoaValue
let sweetValue

let cocoaRange = document.getElementById("cocoaRange");
let sweetRange = document.getElementById("sweetRange");

// data transfer from range input to recipe.html
recipeBtn.onclick = function() {

    cocoaValue = cocoaRange.value;
    sweetValue = sweetRange.value;

    localStorage.setItem("localCocoaValue", cocoaValue);
    localStorage.setItem("localSweetValue", sweetValue);

    window.location.href = "recipe.html";

}


// set spoon img depending on the value of sweetness
function setSpoonImg () {
    
    sweetValue = sweetRange.value
    $(".spoon").attr("src", "public/images/spoon-0" + sweetValue + ".png")
}


// set colour of hot chocolate (mug) depending on the value of chocolateness
function setMugImg () {
    cocoaValue = cocoaRange.value
    $(".mug").attr("src", "public/images/mug-0" + cocoaValue + ".png")
}


// set text under the range slider with value of chocolateness
function setCocoaText () {
    cocoaValue = cocoaRange.value
    let cocoaNewText

    switch (cocoaValue) {
        case "0":
            cocoaNewText = "LIGHT"
            break;

        case "1":
            cocoaNewText = "NORMAL"
            break;

        case "2":
            cocoaNewText = "DOUBLE COCO"
            break;

        default:
            break;
    }

    $(".cocoa-text").text(cocoaNewText)
}


// set text under the range slider with value of sweetness
function setSugarText () {
    sweetValue = sweetRange.value

    let sweetNewText 

    switch (sweetValue) {
        case "0":
            sweetNewText = "TROCHĘ BARDZIEJ FIT"
            break;

        case "1":
            sweetNewText = "SWEET"
            break;

        case "2":
            sweetNewText = "BAD DAY"
            break;
    
        default:
            break;
    }

    $(".sweet-text").text(sweetNewText)
}

//event listeners which set slider images
cocoaRange.addEventListener("input", setMugImg)
sweetRange.addEventListener("input", setSpoonImg)


//event listeners which set text uder the sliders
cocoaRange.addEventListener("input", setCocoaText)
sweetRange.addEventListener("input", setSugarText)


//set number of spoons of cocoa and sugar depends on value of range slider
function setSpoon() {
    cocoaValue = localStorage.getItem("localCocoaValue");
    sweetValue = localStorage.getItem("localSweetValue");

    let cocoaTs
    let sweetTs

    switch (cocoaValue) {
        case "0": 
            cocoaTs = "4 łyżeczki"
            break;

        case "1":
            cocoaTs = "6 łyżeczek"
            break;

        case "2":
            cocoaTs = "8 łyżeczek"
            break;
    
        default:
            break;
    }

    switch (sweetValue) {
        case "0":
            sweetTs = "2 łyżeczki"
            break;

        case "1":
            sweetTs = "3 łyżeczki"
            break;

        case "2":
            sweetTs = "6 łyżeczek"
            break;
    
        default:
            break;
    }

    
    document.getElementById("cocoaText").innerText = cocoaTs;
    document.getElementById("sugarText").innerText = sweetTs;


   //button which takes user to home page 
   recipeBtn.onclick = function() {
        window.location.href = "index.html";
    }
}

