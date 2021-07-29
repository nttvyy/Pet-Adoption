$(document).ready(
    function(){
        $('.slideshow-container').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else {
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '600px'
            }
        )
    }
)