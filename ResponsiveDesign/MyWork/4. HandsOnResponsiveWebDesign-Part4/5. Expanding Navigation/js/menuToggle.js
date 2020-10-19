function toggleMenu() {
	var y = document.getElementById("primaryNav");
	if (y.className === "closed") {
		y.className = "open";
	} else {
    y.className = "closed";
    var animationString = "transition: max-height 0.5s ease-in-out; -webkit-transition: max-height 0.5s ease-in-out; -moz-transition: max-height 0.5s ease-in-out;"
    y.style += animationString;
    setTimeout(function() {
      y.style = y.style.toString().replace(animationString, "");
    }, 501);
  } // end if
  
} // end function

var x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 