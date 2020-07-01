const img_count = 10;
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

let email_calls = [
  "insult me",
  "tell me a secret",
  "compliment me",
  "offer me money",
  "challenge me to a duel",
  "write me a haiku",
  "be my penpal",
];
let call_count = email_calls.length;
function pickCall() {
  choice = Math.floor(Math.random() * call_count);
  document.getElementById("contact-call").textContent = email_calls[choice];
  console.log(choice);
}

pickCall();
