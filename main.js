window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("topnavbar").style.top = "30px";
    } else {
      document.getElementById("topnavbar").style.top = "-100px";
    }
  }

  function mobileMenu() {
    var x = document.getElementById("topnavlinks");
    if (x.className === "topnav-right") {
      x.className += " mobile";
    } else {
      x.className = "topnav-right";
    }
  }
