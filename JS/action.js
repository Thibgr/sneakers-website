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


$('#atc-box-mobile')




/* 
$(document).ready(function() {
    $('#atc-box').scrollToFixed({ limit: $($('h2')[2]).offset().top });
});

*/