
const express = require("express");

const app = express();


app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
// change doc.getElem. to body parser
    // const recipeBtn = document.getElementById("recipeBtn");
    // console.log(recipeBtn);

});

app.listen(3000, function() {
    console.log("server started on port 3000");
});

// recipeBtn.onclick = function () {
//     console.log("btn was clicked");
// }
