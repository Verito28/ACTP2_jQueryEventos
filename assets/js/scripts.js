$(document).ready(function(){


    $(".card").click(function(){
        $(".card--open").toggle();
    });

      $(".card__like").click(function(event){
      	event.stopPropagation();
        $(".card__like--red").toggle();
    });




});