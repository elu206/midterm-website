//Question: second card will not change, it is always death.png but the code is the same as the other cards?
//Question: how to link specific text with each card?
//Question: how to make it so that it cannot randomly select the same card more than once in each reading?

//referenced https://www.dougv.com/2007/01/display-a-random-image-with-javascript-dom/
let lastCard = 0;
randomImage("firstcard");
randomImage("secondcard");
randomImage("thirdcard")
function randomImage(name){
  let oneCard = document.getElementById(name);
  let cardFolder = "cards/majorarcana/"
  let cardArray = new Array("death.png","judgement.png","justice.png","strength.png","temperance.png","thechariot.png","thedevil.png","theemperor.png","theempress.png","thefool.png","thehangedman.png","thehermit.png","thehierophant.png","thehighpriestess.png","thelovers.png","themagician.png","themoon.png","thestar.png","thesun.png","thetower.png","theworld.png","wheeloffortune.png");
  let cardNumber = 0;
  if(cardArray.length) {
    while(cardNumber == lastCard) {
      cardNumber =Math.floor(Math.random()*cardArray.length);
    }
    lastCard = cardNumber;
    let cardPath = cardFolder +cardArray[cardNumber];
    oneCard.src=cardPath;
    oneCard.alt=cardArray[cardNumber]
  } else{
    return false;
  }
}
