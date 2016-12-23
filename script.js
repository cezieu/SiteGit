
$(document).ready(function(){
    $("figure").hover(function(){
        $(this).slideUp();
    });
    $(".row").click(function(){
	$(this).slideDown();
    });
});
