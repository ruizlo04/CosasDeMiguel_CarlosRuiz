$(document).ready(function(){
    // Selector de etiqueta
    $("h1").html("Adiós Mundo cruel");

    //Selector de id (#)
    $("#page-title").html("Titulo Hola Mundo");

    //Selector de clase (.)
    $(".red").attr("style","color:#FF0000");

    //Evento click
    $(document).on("click", "#btn-clear", function(){
        $("h1").html("");
    })

    //Evento restore
    $(document).on("click", "#btn-restore", function(){
        $("h1").html("Adiós Mundo cruel");
        $("#page-title").html("Titulo Hola Mundo");
        $(".red").attr("style","color:#FF0000");

    });

    $(document).on("click", "#add-yellow", function () {
        $("#page-title").addClass("yellow");
      });
    
      $(document).on("click", "#delete-yellow", function () {
        $("#page-title").removeClass("yellow");
      });


      $(document).ready(function () {
        $(document).on("click", "#btn-dark", function () {
            $("body").addClass("dark");
            $("body").removeClass("light");
       
       
            $("#btn-dark").hide();
            $("#btn-light").show();
    
    
        });
    
    
        $(document).on("click", "#btn-light", function () {
            $("body").addClass("light");
            $("body").removeClass("dark");
    
    
            $("#btn-light").hide();
            $("#btn-dark").show();
    
    
        });
    
    
    });
});