const img_count = 9;
let prev_choice = 0;
let choice = 0;
function pickImg() {
  choice = Math.floor(Math.random() * img_count) + 1;
  while (choice == prev_choice) {
    choice = Math.floor(Math.random() * img_count) + 1;
  }
  let file = "title_img/title_img " + choice + ".png";
  document.getElementById("title-img").src = file;
  prev_choice = choice;
}
pickImg();
console.log(choice);
console.log(prev_choice);
