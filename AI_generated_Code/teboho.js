window.onload = function() {
    // Add a click listener to the navigation bar
    var nav = document.querySelector("nav");
    nav.addEventListener("click", function(event) {
      // Get the element that was clicked
      var element = event.target;
  
      // If the element is a link, navigate to the link's href
      if (element.tagName === "A") {
        window.location.href = element.href;
      }
    });
  };
  