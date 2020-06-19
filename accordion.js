var acc = document.getElementsByClassName("accordion");
var acc1 = document.getElementById("acc1");
var acc2 = document.getElementById("acc2");

var i;

acc1.addEventListener("click", function () {
  this.classList.toggle("active");
  if (window.innerWidth < 736) {
    acc2.classList.remove("active");
  }
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
  if (window.innerWidth < 736) {
    var other_panel = acc2.nextElementSibling;
    if (other_panel.style.display === "block") {
      other_panel.style.display = "none";
    }
    other_panel.style.maxHeight = null;
  }
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});

acc2.addEventListener("click", function () {
  this.classList.toggle("active");
  if (window.innerWidth < 736) {
    acc1.classList.remove("active");
  }
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
  if (window.innerWidth < 736) {
    var other_panel = acc1.nextElementSibling;
    if (other_panel.style.display === "block") {
      other_panel.style.display = "none";
    }
    other_panel.style.maxHeight = null;
  }
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
});
