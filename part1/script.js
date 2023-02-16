let ageQuestion = prompt("How old are you?");

let age = +ageQuestion;

if (age <= 17) {
  confirm("Do you study at school?");
} else if (age > 17 && age < 25) {
  confirm("Do you study at university?");
} else if (age >= 25 && age < 60) {
  confirm("Do you have a job?");
} else {
  prompt("What do you do?");
}

//В задании написано задать вопрос 'What are you doing?', но я спросил 'What do you do?' Так как считаю этот вопрос более уместным XD

