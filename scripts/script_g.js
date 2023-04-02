const par = 0;

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
     


     var typed = new Typed(".typing_gustavo", {
        strings: ["Programador","Desenvolvedor","Analista","DevOps"],
        typeSpeed: 120,
        backSpeed: 80,
        loop:true
     });

     var typed = new Typed(".typing-2_gustavo", {
        strings: ["Programador","Desenvolvedor","Analista","DevOps"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
     });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('')
});


// IFRAME 1
function exibirIframe()
     {
        var botaoA=document.getElementById("botaoAbrirWD");
        var teste=document.getElementById("iframeWD");
        var botaoF=document.getElementById("botaoFecharWD");
        teste.style.display = `block`;
        teste.style.position = `center`;
        botaoA.style.display = `none`;
        botaoF.style.display = `inline-block`;
        botaoF.style.padding = `10px 40px`;
        botaoF.style.marginTop = `20px`;
        botaoF.style.borderRadius = `6px`;
        botaoF.style.transition = `all 0.3s ease`;
        botaoF.style.background = '#4169E1';
        botaoF.style.color = '#fff';
        botaoF.style.fontSize = `20px`;
        botaoF.style.fontWeight = 500;
        botaoF.style.border = `2px solid #222`;
     }

function fecharIframe(){
    var botaoF=document.getElementById("botaoFecharWD");
    var botaoA=document.getElementById("botaoAbrirWD");
    
    document.getElementById("iframeWD").style.display = "none";
    botaoA.style.display = "inline";
    botaoF.style.display = "none";
}

// IFRAME 2
function exibirIframe_2()
     {
        var botaoA_2=document.getElementById("botaoAbrirPM");
        var teste_2=document.getElementById("iframePM");
        var botaoF_2=document.getElementById("botaoFecharPM");
        teste_2.style.display = "block";
        botaoA_2.style.display = "none";
        botaoF_2.style.display = "inline-block";
        botaoF_2.style.padding = `10px 40px`;
        botaoF_2.style.marginTop = `20px`;
        botaoF_2.style.borderRadius = `6px`;
        botaoF_2.style.transition = `all 0.3s ease`;
        botaoF_2.style.background = '#4169E1';
        botaoF_2.style.color = '#fff';
        botaoF_2.style.fontSize = `20px`;
        botaoF_2.style.fontWeight = 500;
        botaoF_2.style.border = `2px solid #222`;
     }

function fecharIframe_2(){
    var botaoF_2=document.getElementById("botaoFecharPM");
    var botaoA_2=document.getElementById("botaoAbrirPM");
    
    document.getElementById("iframePM").style.display = "none";
    botaoA_2.style.display = "inline";
    botaoF_2.style.display = "none";
}

// IFRAME 3
function exibirIframe_3()
     {
        var botaoA_3=document.getElementById("botaoAbrirPY");
        var teste_3=document.getElementById("iframePY");
        var botaoF_3=document.getElementById("botaoFecharPY");
        teste_3.style.display = "block";
        botaoA_3.style.display = "none";
        botaoF_3.style.display = "inline-block";
        botaoF_3.style.padding = `10px 40px`;
        botaoF_3.style.marginTop = `20px`;
        botaoF_3.style.borderRadius = `6px`;
        botaoF_3.style.transition = `all 0.3s ease`;
        botaoF_3.style.background = '#4169E1';
        botaoF_3.style.color = '#fff';
        botaoF_3.style.fontSize = `20px`;
        botaoF_3.style.fontWeight = 500;
        botaoF_3.style.border = `2px solid #222`;
     }

function fecharIframe_3(){
    var botaoF_3=document.getElementById("botaoFecharPY");
    var botaoA_3=document.getElementById("botaoAbrirPY");
    
    document.getElementById("iframePY").style.display = "none";
    botaoA_3.style.display = "inline";
    botaoF_3.style.display = "none";
}
