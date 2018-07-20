$(document).ready(function(){


    $(".card").click(function(){
        $(".card--open").toggle();
    });

      $(".card__like").click(function(event){
      	 $(this).toggleClass('card__like--red');

        event.stopPropagation();
      	event.preventDefault();
    });

      $(".card__follow-btn").click(function(event){
      	      	
        $(this).toggleClass('card__follow-btn--following');
        event.stopPropagation();
    });


        $(".create__select").change(function(event){
        
        $(".create__image img").attr("src","assets/images/squared/" + $(this).val());
      	
      
        event.stopPropagation();
    });





});