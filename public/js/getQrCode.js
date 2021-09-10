async function _getQrCode(event, qr_img){
    event.preventDefault();
    event.stopPropagation();
    showLoader('result_box','qr_code');
    let form = document.getElementById("qrform");
    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries());
    
    if(data.code.trim() !== ""){
        const urlParams = new URLSearchParams(data);
        const url = `https://qrcodes-api.herokuapp.com/qr?${urlParams}`;
        try{
            const request = await fetch(url);
            let response = null;
            let _qr_img = document.getElementById(`${qr_img}`);
            
            if(request.ok){
                showLoader('result_box','qr_code', false);
                response = await request.json();
                response = response.server_response;
                if(!_qr_img) return;
                _qr_img.setAttribute('src',`${response.qr_code}`);
                console.table({response: true});
                return;
            }
        }catch(error){
            setTimeout(()=>{
                showLoader('result_box','qr_code', false);
            },500); 
            console.table({Error: `${error}`});
            return;
        }
    }else{
        setTimeout(()=>{
            showLoader('result_box','qr_code', false);
        },500); 
        console.log('Empty parameter');
    }
}