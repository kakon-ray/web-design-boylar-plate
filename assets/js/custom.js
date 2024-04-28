(function ($) {
    "use strict";
  
    
  
    //   navbar
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 10) {
        $(".forntend-navbar").addClass("is-sticky");
      } else {
        $(".forntend-navbar").removeClass("is-sticky");
      }
    });
  
  
    // dropdown
    $(document).ready(function () {
      $("#flip").mouseenter(function () {
        
        $("#panel").slideDown("slow");
      });
  
      $("#dropdown-container").mouseleave(function () {
        $("#panel").hide();
      });
  
      $("#flip2").mouseenter(function () {
        $("#panel2").slideDown("slow");
      });
  
      $("#dropdown-container2").mouseleave(function () {
        $("#panel2").hide();
      });
    });
  
    $(document).ready(function () {
      $("#VisitorDt").DataTable();
      $(".dataTables_length").addClass("bs-select");
    });
  
  })(jQuery);
  
  




  


  
  


  