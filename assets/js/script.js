window.addEventListener('load', ()=>{    
    const largura =  window.innerWidth;
    carregarEstilo(largura);
});

function carregarEstilo(largura) {
 
    let arquivo = "";
    let video = document.querySelector("video") ;

    if (largura >= 1024) {
        arquivo = "min-1024";
    } else if ((largura >= 768) && (largura < 1024)) {
        arquivo = "min-768";
    } else if((largura < 768) && (largura >= 412)){
        arquivo = "min-412";
    } else if((largura < 412) && (largura >= 384)){
        arquivo = "min-384";   
    }else if(largura === 360){
        video.pause();
        arquivo = "min-360";
    }
    else{
        return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `assets/css/${arquivo}.css`;
    document.head.appendChild(link);

   
}