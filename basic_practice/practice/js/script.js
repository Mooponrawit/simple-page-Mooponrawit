
＄（function(){

    $(".btn").on("click",()=>{
        $(#"slide").slideToggle();
    })
    
    $("#slide").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        slidetoshow: 2,
      });
                      
});

