function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

$(document).scroll(function() {
    if($(window).scrollTop() > 50){

        $(".main_side2").css("top","-508px");


    }else if($(window).scrollTop() < 50){

        $(".main_side2").css("bottom","-508px");

    }
});