contactForm = document.getElementById("contact");
thanksMessage = document.getElementById("thanks-msg");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  contactForm.reset();
  thanksMessage.style.opacity = "1";
  setTimeout(function() {
    thanksMessage.style.opacity = "0";
  }, 2500);
});
