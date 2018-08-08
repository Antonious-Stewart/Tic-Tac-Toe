let turns = 9; // turn to begin at one so its an odd number

//get players name for xs and os
window.onload = ()=>{
  const playerX = prompt("Your X's! whats your name?: ");
  const playerO = prompt("Your O's! whats your name?: ");
  //compare variables to see if string and add names
  if(typeof playerO ===  "string" && typeof playerX ===  "string"){
    const X = document.querySelector('.X');
    const O = document.querySelector('.O');
    X.textContent = playerX;
    O.textContent = playerO;
  }
};
// countdown timer

// add turn counter should be equal to number of spaces avaible
const turnSpan = ()=>{
  const span = document.querySelector("#turns");
  span.innerHTML = `Turns: ${turns}`;
};
turnSpan();
// token config
const tokenConfig = (evt)=>{
  turnSpan();
  //add turns odd is X even is O
  if(turns % 2 === 0 ){
    console.log(turns);
    const token = evt.target.innerHTML = 'X';
    turns--;// countdown from 9 when piece is clicked
    turnSpan();
   } else {
     console.log(turns);
     const token = evt.target.innerHTML = 'O';
     turns--;
     turnSpan();
   }
   // if all pieces are filled display tie game and play again button
   if(turns === 0){
    
  }
};
const topRow = document.querySelector("#top");
const middleRow = document.querySelector("#middle");
const bottomRow = document.querySelector("#bottom");
//add token on click
const token = () =>{
  topRow.addEventListener("click",evt =>{
  tokenConfig(evt);
});
middleRow.addEventListener("click",evt =>{
  tokenConfig(evt);
});
bottomRow.addEventListener("click",evt =>{
  tokenConfig(evt);
});
};
token();

// 45sec timer for speedy games

// when 3 in a row game is over
  // show modal of game over
  // add play again button that reloads game
    // asks to keep values
const threeInARow = ()=>{
  
}