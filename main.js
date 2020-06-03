window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("header").style.top = "30px";
    } else {
      document.getElementById("header").style.top = "-100px";
    }
  }
