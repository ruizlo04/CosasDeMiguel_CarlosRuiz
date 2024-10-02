
//1a opcion
$(document).ready(function () {
    var i = 1;
    $(document).on("click", "#btn-add-paragraph", function () {
      $("#content").append("<p>" + i +  
        '>>Lorem ipsum <button id="btn-delete-paragraph">Delete paragraph</button></p>'
        );
      i++;
    });

  $(document).on("click", "#btn-delete-paragraph", function(){
    $(this).parent().remove();
  });

});