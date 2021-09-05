(function(){
    function hideHeaderOnScroll(){
        let _header = document.getElementsByClassName('_header')[0];
        setInterval(()=>{
            if(window.scrollY > 50){
                _header.style.background = "rgba(255, 255, 255, 0.05)";
                _header.style.transition = "all 0.5s ease-in";
                _header.style.boxShadow ="none";
                
            }else{
                _header.style.background = "white";
                _header.style.boxShadow ="2px 2px 5px rgba(0, 0, 0, 0.2)";
            }
        }, 500);
    }
    hideHeaderOnScroll();
})();