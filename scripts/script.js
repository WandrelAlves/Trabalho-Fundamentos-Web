$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
     


     var typed = new Typed(".typing_index", {
        strings: ["Programadores","Desenvolvedores","Analistas"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
     });

     var typed = new Typed(".typing-2_index", {
        strings: ["Programadores","Desenvolvedores","Analistas"],
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

