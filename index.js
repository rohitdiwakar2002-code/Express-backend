const express = require("express");
const app  = express();
// console.dir(app);
let port = 8080;
app.listen(port, () =>{
    console.log(`app are listening on the port ${port}`);
});


// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request aagyi");
//     res.send("this is testing my brower are work or not")
// });
app.get("/path",(req,res)=>{
    res.send("you are cantact the Sahil");
});

app.get("/apple",(req,res)=>{
    res.send("you are cantact the aplle path");
});
app.get("/orange",(req,res)=>{
    res.send("you are cantact the orange path");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id } = req.params;
    let htmlStr = `<h1>wlcm to the page of @${username}!</h1>.` 
    res.send(htmlStr);
});