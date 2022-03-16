alert(`محمد الشمري`);

console.log(`14`);

console.log("%c انا بالصف التاسع", "color: #1c87c9; font-size: 18px");

let budget = 20;

console.log(budget > 30 && budget < 80);

budget = 20 + 30;

console.log(budget > 30 && budget < 80);

let grade = prompt("كم نسبتك؟");

console.log(grade);

if (grade >= 90) {
  console.log("لقد حصلت على امتياز 🥳");
} else if (grade >= 80) {
  console.log("لقد حصلت على جيد🙂");
} else if (grade >= 60) {
  console.log("لقد حصلت على مقبول😕");
} else if (grade >= 50) {
  console.log("لقد حصلت على ضعيف☹️");
} else if (grade <= 50) {
  console.log("راسب💔");
}
