
const recipeBtn = document.getElementById("recipeBtn");

recipeBtn.onclick = function() {

    let cocoaRange = document.getElementById("cocoaRange");
    let sweetRange = document.getElementById("sweetRange");

    let cocoaValue = cocoaRange.value;
    let sweetValue = sweetRange.value;

    console.log(cocoaValue, sweetValue);

    document.getElementById("modify").innerHTML = "<h1>hello</h1>";


}


