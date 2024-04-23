window.onload = function () {
  // Select all the anchor tags
  var anchors = document.querySelectorAll("nav a");

  // Loop through all the anchor tags
  for (var i = 0; i < anchors.length; i++) {
    // Add a mouseover event listener
    anchors[i].addEventListener("mouseover", function () {
      this.style.color = "white"; // Change the text color to red when mouse hovers over
      this.style.transform = "scale(10)"; // Make the text bigger
      this.style.animation = "vibrate 0.3s infinite"; // Add vibrate animation
    });

    // Add a mouseout event listener
    anchors[i].addEventListener("mouseout", function () {
      this.style.color = ""; // Reset the text color when mouse is not hovering
      this.style.transform = ""; // Reset the text size
      this.style.animation = ""; // Remove vibrate animation
    });
  }
  var toggleButton = document.querySelector(".dark-mode-toggle");

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
};
