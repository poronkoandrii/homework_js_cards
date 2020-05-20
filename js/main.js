let m = ["♣", "♠", "♥", "♦"],
  n = [6, 7, 8, 9, 10, "J", "Q", "K", "A"];
function createCards(a, b) {
  let mainer = document.querySelector(".mainer");
  for (let m of a) {
    for (let n of b) {
      let card = document.createElement("div");
      card.className = "cards animate__animated";
      if (m === "♥" || m === "♦") {
        card.classList.add("red");
      }
      card.innerHTML = `<div class="front">
          <div class="number top">
            <span>${n}</span><span class="mini">${m}</span>
          </div>
          <div class="mid"><span>${m}</span></div>
          <div class="number bot">
            <span>${n}</span><span class="mini">${m}</span>
          </div>
        </div>
        <div class="back"></div>`;
      mainer.append(card);
    }
  }
}
createCards(m, n);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let random = [
  "animate__bounce",
  "animate__flash",
  "animate__swing",
  "animate__tada",
  "animate__rubberBand",
  "animate__shakeX",
  "animate__shakeY",
  "animate__heartBeat",
];
$(window).scroll(function () {
  $(".cards").each(function () {
    let pos = $(this).offset().top;
    let posOfTop = $(window).scrollTop();
    if (pos < posOfTop + 100) {
      $(this).addClass(random[getRandomInt(8)]);
    }
  });
});
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
