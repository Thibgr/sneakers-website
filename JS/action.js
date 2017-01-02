/*

jQuery(document).ready(function($){
    _box        = $('#atc-box-mobile');
    
    fixedLimit = _box.offset().top - parseFloat(_box.css('marginTop').replace(/auto/,0));
    
    // bottomLimit = _box.offset().bottom - parseFloat(_box.css('marginBottom').replace(/auto/,0));
    
    $(window).trigger('scroll');
 
    $(window).scroll(function(event){
        // Valeur de défilement lors du chargement de la page
        windowScrollTop = $(window).scrollTop();
 
        // Mise à jour du positionnement en fonction du scroll
        if( windowScrollTop >= fixedLimit ){
            _box.addClass('fixed');
        } else {
            _box.removeClass('fixed');
        }
    });
}); 

*/

/*

$(document).ready(function(){
    $('#atc-box-mobile').scrollToFixed({ marginTop: $('#atc-box-mobile').css('marginTop'), limit: $($('h2')[5]).offset().top });
});

*/


$(document).ready(function(){
    $("#tavas-grey-min").click(function(){
        $(".product-active").attr({
            "src" : "images/sneakers-grey.png"
            });
        });
    
    
    $("#tavas-pink-min").click(function(){
        $('.product-active').attr({
            "src" : "images/sneakers-pink.png"
            })
        })
    
    
    $('#atc-box').scrollToFixed({ 
        limit: $('#atc-container').offset().bottom,
    });
    
    
});