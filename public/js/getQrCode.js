async function _getQrCode(event){
    event.preventDefault();
    event.stopPropagation();
    let form = document.getElementById("qrform");
    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries());

    console.log(data);
    if(data.code.trim() !== ""){
        const urlParams = new URLSearchParams(data);
        console.log(data);
        const url = `https://qrcodes-api.herokuapp.com/qr?${urlParams}`;
        //console.log(url);
        
        const request = await fetch(url);
        let response = null;
        if(request.ok){
            response = await request.json();
        }
        console.table(response);
    }else{
        console.log('Empty parameter');
    }
}