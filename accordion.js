var acc = document.getElementsByClassName("accordion");
var acc1 = document.getElementById("acc1");
var acc2 = document.getElementById("acc2");

var i;
let turnBothOn = function () {
  if (window.innerWidth >= 736) {
    acc1.classList.toggle("active");
    acc1.nextElementSibling.style.display = "block";
    if (acc1.nextElementSibling.style.maxHeight) {
      acc1.nextElementSibling.style.maxHeight = null;
    } else {
      acc1.nextElementSibling.style.maxHeight =
        acc1.nextElementSibling.scrollHeight + "px";
    }
    acc2.classList.toggle("active");
    acc2.nextElementSibling.style.display = "block";
    if (acc2.nextElementSibling.style.maxHeight) {
      acc2.nextElementSibling.style.maxHeight = null;
    } else {
      acc2.nextElementSibling.style.maxHeight =
        acc2.nextElementSibling.scrollHeight + "px";
    }
  } else {
    acc1.classList.toggle("active");
    acc1.nextElementSibling.style.display = "block";
    if (acc1.nextElementSibling.style.maxHeight) {
      acc1.nextElementSibling.style.maxHeight = null;
    } else {
      acc1.nextElementSibling.style.maxHeight =
        acc1.nextElementSibling.scrollHeight + "px";
    }
  }
};

window.onload = () => {
  turnBothOn();
};
window.onresize = function () {
  if (window.innerWidth < 736) {
    this.acc2.classList.remove("active");
    var other_panel = acc2.nextElementSibling;
    if (other_panel.style.display === "block") {
      other_panel.style.display = "none";
    }
    other_panel.style.maxHeight = null;
  }
};

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
