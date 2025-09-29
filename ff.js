
const cards = [
  "y.jpg",
  "yy.jpg",
  "yyy.jpg",
  "yyyy.jpg",
  "yyyyy.jpg",
  "yyyyyy.jpg"
];

let cardShown = false; // متغير يتحقق إذا البطاقة ظهرت

function showRandomCard() {
  if (cardShown) return; // إذا ظهرت قبل، ما يسوي شي

  const randomIndex = Math.floor(Math.random() * cards.length);
  const imgElement = document.getElementById("randomCard");
  imgElement.src = cards[randomIndex];
  imgElement.style.display = "block"; // يخلي الصورة تظهر

  cardShown = true; // نخلي البطاقة تعتبر معروضة
}