function showLoader(target = '', hideItem = '', load = true, message = "Loading"){
    let _target = document.getElementById(`${target}`);
    let _hideItem = document.getElementById(`${hideItem}`);

    if(!_target) return;
    if(!_hideItem) return;
   
    if(load){
        _hideItem.style.display = 'none';
        removeLoader(_target, hideItem, 'ctr_loader');
        _target.innerHTML += `<div id="ctr_loader" style="display:flex; flex-direction:column; justify-content:center; align-items:center;">
                                <div class="loader"></div>
                                <p style="font-size:12px; margin:5px;">${message}</p>
                            </div>`; 
    }else{
       removeLoader(target, hideItem, 'ctr_loader');
    }
    
}

function removeLoader(target = '', showItem = '', removeItem = 'ctr_loader'){
    let _target = document.getElementById(`${target}`);
    let _showItem = document.getElementById(`${showItem}`);
    let _removeItem = document.getElementById(`${removeItem}`);

    if(!_target) return;
    if(!_showItem) return;

    if(_removeItem){
        if(_target){
            _target.removeChild(_removeItem);
            _showItem.style.display = 'inline-block';
        }
    }
}