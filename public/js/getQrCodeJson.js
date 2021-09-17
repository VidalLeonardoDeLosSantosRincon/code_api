async function _getQrCodeJson(target, url){
    let req = await fetch(url);
    let _target = document.getElementById(`${target}`);
    let data = {};
    if(req.ok) data = await req.json(); 
    if(data.hasOwnProperty("server_response")) {
        //_target.textContent = JSON.stringify(data);
         
        const {status, parameter, qr_code} = data.server_response;
        let template = `
            <p class='object_entry'><span class='object_key'>status</span>: ${status}</p>
            <p class='object_entry'><span class='object_key'>parameter</span>: ${parameter}</p>
            <p class='object_entry'><span class='object_key'>qr_code</span>: ${qr_code}</p>
        `;

        _target.innerHTML = template;

    }
}
_getQrCodeJson('code_example', "https://qrcodes-api.herokuapp.com/qr?code=Hello");