const express = require("express");
const QR = require("./src/qr_code"); 
const app = express();
const port = process.env.PORT || 1801;

app.use(express.json());
//app.use(express.static('public'));

app.get("/qr", (req, res)=>{
    const code = req.query.code;
    QR.generateQRCode(res, code);
});

app.get("/", (req, res)=>{
    res.json({
        server_response:{
            error: "URL not found"
        }
    });
});

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});


