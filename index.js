const express = require("express");
const path = require("path");
const QR = require("./src/qr_code"); 
const app = express();
const port = process.env.PORT || 1801;

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.get("/qr", (req, res)=>{
    const code = req.query.code;
    QR.generateQRCode(res, code);
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve('index.html'));
});

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});


