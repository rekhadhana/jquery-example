$(document).ready(function(){
    $(".div1").click(function(){
        $("#pic").slideDown("slow");
    })
    $(".div1").dblclick(function(){
        $("#pic").slideUp(3000);
    })
    $(".div1").mouseenter(function(){
        $("#pic").slideToggle();
    })
    $(".div2").click(function(){
        $("#div3").animate({left:"250px",opacity:"0.5",height:"toggle",width:"+=200px"})
    })
    $(".div2").click(function(){
        $("#div4").animate({left:"250px",opacity:"0.5",height:"toggle",width:"+=200px"},"slow")
    });
    $("button").click(function(){
        $("#div4").text("hi dhana");
    });
   $("#setVal").click(function(){
       $("#fld").val("dhanalakshmi");
   });
   $("#clr").click(function(){
       $("h1,p").toggleClass("blue");
   })
})