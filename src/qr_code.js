const QRCode = require("qrcode");

const generateQRCode = async function(res, code){
    if(code){
        let text = code;
        if(text.trim() !== ""){
            try{
                let result = await QRCode.toDataURL(text);
                res.json({
                        server_response: { 
                            status:200,
                            parameter: text,
                            qr_code: `${result}`
                        }
                    });
            }catch(error){
                res.json({server_response: `${error}`});
            }
        }
    }else{
        res.json({
            server_response:{
                error: "empty parameter code"
            }
        });
    }
};

module.exports = {
    generateQRCode
};