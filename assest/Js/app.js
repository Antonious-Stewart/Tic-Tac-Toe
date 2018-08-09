const topRow = document.querySelector("#top");
const middleRow = document.querySelector("#middle");
const bottomRow = document.querySelector("#bottom");
let turns = 9; // turn to begin at one so its an odd number
let winner = false;
let tie = false;
let winnerName;

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
const vertical = (top,middle,bottom)=>{
  // if textContent in 3 vertical rows (top,middle and bottom ) then declare a winner
  const topChildren = top.children;
  const middleChildren = middle.children;
  const bottomChildren = bottom.children;
  for(let i =0; i < topChildren.length; i++){
    if(topChildren[i].textContent === "X" && middleChildren[i].textContent === "X" && bottomChildren[i].textContent === "X"){
      console.log("X wins");
      break;
    } else if (topChildren[i].textContent === "O" && middleChildren[i].textContent === "O" && bottomChildren[i].textContent === "O"){
      console.log("O wins");
      break;
    }
  }
};
const horizontal = (top,middle,bottom)=>{
  //if textContent in 3 vertical rows ( top,middle and bottom ) then declare a winner
  const topChildren = top.children;
  const middleChildren = middle.children;
  const bottomChildren = bottom.children;
  // match board input for three in a row
  
  if(topChildren[0].textContent === "X" && topChildren[1].textContent === "X" && topChildren[2].textContent === "X"){
    console.log("X wins")
  } else if (middleChildren[0].textContent === "X" && middleChildren[1].textContent === "X" && middleChildren[2].textContent === "X"){
    console.log("X wins");
  }
  else if (bottomChildren[0].textContent === "X" && bottomChildren[1].textContent === "X" && bottomChildren[2].textContent === "X"){
    console.log("X wins");
  } else if(topChildren[0].textContent === "O" && topChildren[1].textContent === "O" && topChildren[2].textContent === "O"){
    console.log("O wins")
  } else if (middleChildren[0].textContent === "O" && middleChildren[1].textContent === "O" && middleChildren[2].textContent === "O"){
    console.log("O wins");
  }
  else if (bottomChildren[0].textContent === "O" && bottomChildren[1].textContent === "O" && bottomChildren[2].textContent === "O"){
    console.log("O wins");
  };
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
  //add turns odd is O even is X
  if(turns % 2 === 0 ){
    console.log(turns);
    const token = evt.target.innerHTML = 'X';
    vertical(topRow,middleRow,bottomRow);
    horizontal(topRow,middleRow,bottomRow);
    console.log(evt.target.textContent);
    turns--;// countdown from 9 when piece is clicked
    turnSpan();
   } else {
     console.log(turns);
     const token = evt.target.innerHTML = 'O';
     vertical(topRow,middleRow,bottomRow);
     horizontal(topRow,middleRow,bottomRow);
     console.log(evt.target.textContent);
     turns--;
     turnSpan();
   }
   // if all pieces are filled display tie game and play again button
   if(turns === 0){
    
  }
};
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

  const dignoal = (evt)=>{
    //if textContent in 3 diagonal rows ( top middle and bottom ) then declare a winner
  }
