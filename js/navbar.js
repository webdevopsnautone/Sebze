    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        window.onscroll = function() {scrollFunction()};

  function scrollFunction() {

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("logo").src = "images/logo-sm.png";
      document.getElementById("logo").style.height ="auto";

    }
     else{
      document.getElementById("logo").src = "images/logo.png";
    }
  }
  