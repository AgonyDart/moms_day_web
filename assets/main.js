// Play a song when the card is clicked
document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM is loaded");
  container = document.getElementById("container");
  initCard = document.getElementById("card");
  stamp = document.getElementById("stamp-inner");

  initCard.addEventListener("click", function () {
    let audio = new Audio("assets/song.mp3");
    audio.play();
    console.log("Music is playing");
    container.classList.remove("hidden");
    this.classList.add("hidden");
    stamp.style.animation = "rotate-center 8s linear infinite both";
  });
});
