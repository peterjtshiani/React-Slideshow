const express = require ("express");
const app = express();
const path = require("path");

app.use("/app", function(req,res){
    res.sendFile(path.resolve(__dirname,"./html/app.html"))
})

app.use("/image1", function(req,res){
    res.sendFile(path.resolve(__dirname,"./images/alex_140.JPG"))
})

app.use("/image2", function(req,res){
    res.sendFile(path.resolve(__dirname,"./images/alex_69.JPG"))
})



app.use("/image3", function(req,res){
    res.sendFile(path.resolve(__dirname,"./images/alex_91.JPG"))
})

app.use("/image4", function(req,res){
    res.sendFile(path.resolve(__dirname,"./images/IMG_0217.jpg"))
})

app.use("/image5", function(req,res){
    res.sendFile(path.resolve(__dirname,"./images/wj_11.jpg"))
})


app.get("*", function(req, res, next) {
    let err = new Error("Sorry! Can’t find that resource. Please check your URL");
    err.statusCode = 404;
  
    next(err);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});