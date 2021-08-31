const express = require("express");
const app = express();
const port = process.env.PORT || 1801;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});


