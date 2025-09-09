document.getElementById("leadForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  // TODO: Replace with your form handler (Formspree, Zapier, GHL webhook, etc.)
  document.getElementById("leadThanks").classList.remove("hidden");
  this.reset();
});
document.getElementById("contactForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  // TODO: Replace with your form handler
  document.getElementById("contactThanks").classList.remove("hidden");
  this.reset();
});