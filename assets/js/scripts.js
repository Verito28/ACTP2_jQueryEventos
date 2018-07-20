$(document).ready(function(){


    $(".card").click(function(){
        $(".card--open").toggle();
    });

      $(".card__like").click(function(event){
      	event.stopPropagation();
        $(".card__like--red").toggle();
    });

      $(".card__follow-btn").click(function(event){
      	event.stopPropagation();
      	
        $(this).toggleClass('card__follow-btn--following');
    });




});