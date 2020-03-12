//Question: how to limit it so that you can only select 3 cards?
//Question: how to make it so that you can't click next until you have selected 3 cards?

//referenced https://github.com/er129idm/midterm-website/blob/master/cardchoice.js (thanks for the help!)
let cardContainerElements = [];
let keepCard = [];
document.addEventListener("DOMContentLoaded", () => {
  cardContainerElements = document.getElementsByClassName("cardContainer");
  console.log("Found " + cardContainerElements.length + " card containers.");
  for (let i = 0; i < cardContainerElements.length; i++) {
    cardContainerElements[i].addEventListener("click", function() {
      console.log(event.target);
      offsetCard(event.target);
      keepCard = event.target;
      return keepCard;
    });
    cardContainerElements[i].addEventListener("dblclick", function() {
      if (event.target == keepCard){
        console.log("keepCard is " + keepCard);
        console.log(event.target);
        putCardBack(event.target);
      }
    });
  }
});
function offsetCard(cardElement) {
  cardElement.style.marginTop = "25px";
}
function putCardBack(cardElement) {
  cardElement.style.marginTop = "0px";
}
