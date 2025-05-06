// Show Back to Top button on scroll
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top on button click
topBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
