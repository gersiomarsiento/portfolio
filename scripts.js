function reveal() {
  var reveals = document.querySelectorAll(".link-container");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("entered");
    }
  }
}

window.addEventListener("scroll", reveal);
