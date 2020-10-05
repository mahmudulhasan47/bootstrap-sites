
$(document).ready(function(){
  $("#tab-1").on("click",function(){
    $("#item-1").show();
    $("#item-2").hide();
    $("#item-3").hide();
    $("#item-11").show();
    $("#item-22").hide();
    $("#item-33").hide();

    $("#tab-1").addClass("active");
    $("#tab-2").removeClass("active");
    $("#tab-3").removeClass("active");
  });

  $("#tab-2").on("click",function(){
    $("#item-1").hide();
    $("#item-2").show();
    $("#item-3").hide();
    $("#item-11").hide();
    $("#item-22").show();
    $("#item-33").hide();

    $("#tab-1").removeClass("active");
    $("#tab-2").addClass("active");
    $("#tab-3").removeClass("active");
  });

  $("#tab-3").on("click",function(){
    $("#item-1").hide();
    $("#item-2").hide();
    $("#item-3").show();
    $("#item-11").hide();
    $("#item-22").hide();
    $("#item-33").show();

    $("#tab-1").removeClass("active");
    $("#tab-2").removeClass("active");
    $("#tab-3").addClass("active");
  });
});

// header js

var topheader=document.querySelector("header");
window.addEventListener("scroll",function(){
  topheader.classList.toggle("sticky",window.scrollY >72);
});
