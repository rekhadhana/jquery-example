// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").show();
//     })
// });
// $(document).ready(function(){
//     $("#hideLi").click(function(){
// $(this).hide();
//     });
    
// });
$(document).ready(function(){
    $("#hideLi").click(function(){
        $("p").fadeIn("slow");
            });
            $("#hideLi").dblclick(function(){
                $("p").fadeOut(3000);
            })
            $("#hidebtn").click(function(){
                $("p").fadeToggle('slow');
            });
        });
            $(document).ready(function(){
            $("#tgl").click(function(){
                $("div1").fadeTo("slow",0.5);
            })
            $("button").after("he i am after text");
            $("ul").remove("#id");
})