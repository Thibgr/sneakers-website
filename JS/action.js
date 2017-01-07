// VARIABLES

var favtest = 1;

// COOKIES 

function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    setCookie(name,"",-1);
}





// FUNCTIONS


$(document).ready(function(){
    
    // PICTURES
    
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
    
    
    // BOX 
    
    $('#atc-box').scrollToFixed({ 
      limit: ($(window).scrollTop() === 1410),   
    });
    
    
    console.log(document.scrollTop);
    
    /*
    $('#atc-box').scrollTop(1410){
        $(this).css('position', 'absolute');
    }
    
    $('#atc-box').scrollTop(680){
        $(this).css('position', 'fixed');
    } 
    
    
    
    $(window).on("scroll", function(){
  if($(window).scrollTop() >= 680){
    $('#atc-box').css('position', 'fixed');
  }
        if ($('body').scrollTop() === 1410){
            $('#atc-box').css('position', 'absolute')
        }
} 
                             
    
    */
    
    // COOKIES
    
    $('#submit').click(function(){
        var p = $('select').val();
        if(getCookie('cart') === null) {
            setCookie('cart', p, 30);
        }
        else {
            var o = getCookie('cart');
            setCookie('cart', p+','+o, 30);
        }
        
        alert(getCookie('cart'));
    });
    
    
    
    // FAVORITE
    
    
    $("#fav").click(function(){
        
        if(favtest==1){
        $(".fav-col").attr({
            "stroke" : "rgb(254, 254, 254)",
            "fill" : "rgb(228,13,13)",
        });
        $(this).css('backgroundColor', 'rgb(228,13,13)');
        $(this).css('border', '1.5px solid rgb(228,13,13)');
        favtest=0;
        }

        
        else {
             $(".fav-col").attr({
            "stroke" : "rgb(204, 204, 204)",
            "fill" : "none",
        });
        $(this).css('backgroundColor', 'white');
        $(this).css('border', '1.5px solid rgb(204, 204, 204)');
            favtest=1;
        }  
    })
    
});

