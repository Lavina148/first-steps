/* let phrases = [
"Звучит неплохо",
"Да, это определенно надо сделать",
"Не думаю, что это хорошая идея",
"Может, не сегодня?",
"Компьютер говорит нет"
];
let randomPhrases = Math.floor(Math.random() * 5)
 alert(phrases[randomPhrases]);*/

/*let randomBodyParts = ["голова", "рука", "нос", "язык",];
let randomAdjectives = ["странная", "красивая", "дурацкая", "унылая","привлекательная", "симпатичная",];
let randomWords = ["ананас", "мыло", "кошка", "валенок","зеленка", "мартышка", "омлетик",];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";
console.log(randomInsult);*/

/* let randomBodyParts = ["голова", "рука", "нос", "язык",];
let randomAdjectives = ["странная", "красивая", "дурацкая", "унылая","привлекательная", "симпатичная",];
let randomWords = ["ананас", "мыло", "кошка", "валенок","зеленка", "мартышка", "омлетик",];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]
let randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");
console.log(randomInsult);*/

/*let numbers = [3, 2, 1];
let num = [numbers[0], "больше, чем", numbers[1], "больше, чем", numbers[2]].join(" ");
console.log(num);*/

/*let cat = {
    "legs": 4,
    "name": "Rony",
    "color": "pink"
};
console.log(Object.keys(cat));*/

/*let cat = {};
cat.legs = 4;
cat.name = "Molly";
cat.color = "green";
console.log(cat);*/

/*var myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};
console.log(myCrazyObject["some array"] [2].number)*/

 /*  /\_/\
   =( °.° )=
      ) (   //
    (__ __)// */


   /* let Katya = true;
    let Dima = false;
    let Liza = false;
    if (Dima) {
      console.log("Hi Dima");
    } else if (Liza) {
      console.log("Hi Liza");
    } else if (Katya) {
      console.log("Hi Katya");
    }*/

   /* let name = "Liza";
    if (name === "Katya") {
      console.log("Hi " + name);
    } else if (name === "Liza") {
      console.log("Hi " + name);
    } else if (name === "Dima") {
      console.log("Hi " + name);
    } else {
      console.log("Hi stranger")
    }*/

    /*for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
    }*/

 /*  let x = 3;
 while (x < 10000) console.log(x = x * 3); 
console.log(x);*/

/*var sheepCounted = 0;
 while (sheepCounted < 10) {
 console.log("Посчитано овец: " + sheepCounted + "!");
 sheepCounted++;
}
console.log("Хрррррррррр-псссс");*/

/*let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i] = animals[i] + " - прекрасное животное");
}
console.log(animals);*/

 /*let alphabet = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя";
    let randomString = "";
    let stringLength = 6;
    while (randomString.length < stringLength) {
      randomString += alphabet[Math.floor(Math.random() *   alphabet.length)];
    }
    console.log(randomString);*/

/*let input = "javascript is awesome";
    let output = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "a") {
        output += "4";
      } else if (input[i] === "e") {
        output += "3";
      } else if (input[i] === "i") {
        output += "1";
      } else if (input[i] === "o") {
        output += "0";
      } else {
        output += input[i];
      }
    }
    console.log(output);*/

let name = prompt("Как вас зовут?");
console.log("Привет, " + name);
let likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
 console.log("Ты классная кошка!");
} else {
 console.log("Что ж, не проблема. Все равно ты молодец!");
}