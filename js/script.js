let submit = function(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var message= document.getElementById("message");
    if (email =""){
        alert("Please enter your email")
    }
    else{
        alert("Thank you for contacting us!" + " Your message has been received.")
    }
}
$(document).ready(function(){
    $("#project1").hover(
        function(){
        $("#text1").show("slow");
    },
    function(){
        $("#text1").hide("slow");
    });
    $("#project2").hover(
        function(){
        $("#text2").show("slow");
    },
    function(){
        $("#text2").hide("slow");
    });
    $("#project3").hover(
        function(){
        $("#text3").show("slow");
    },
    function(){
        $("#text3").hide("slow");
    });
    $("#project4").hover(
        function(){
        $("#text4").show("slow");
    },
    function(){
        $("#text4").hide("slow");
    });
    $("#project5").hover(
        function(){
        $("#text5").show("slow");
    },
    function(){
        $("#text5").hide("slow");
    });
    $("#project6").hover(
        function(){
        $("#text6").show("slow");
    },
    function(){
        $("#text6").hide("slow");
    });
    $("#project7").hover(
        function(){
        $("#text7").show("slow");
    },
    function(){
        $("#text7").hide("slow");
    });
    $("#project8").hover(
        function(){
        $("#text8").show("slow");
    },
    function(){
        $("#text8").hide("slow");
    });
    
});