const topRow = document.querySelector("#top");
const checkbox = document.querySelector("[type=checkbox]");
const gamebutton = document.querySelector(".gameBegin");
const middleRow = document.querySelector("#middle");
const bottomRow = document.querySelector("#bottom");
const gameOverDiv = document.querySelector("#gameOver");
const tieGameDiv = document.querySelector("#tieGame");
const modal = gamebutton.parentElement;
const backdrop = document.querySelector("#backdrop");
const endGameBackDrop = document.querySelector("#endGame-backdrop");
let turns = 9; // turn to begin at one so its an odd number
let gameOver = false;
let tie = false;
let winnerName;
// has 3 in a row
const winner = ()=>{
  if(gameOver){
    endGameBackDrop.style.display = "block";
    gameOverDiv.style.display = "block";
    playAgain();
  }
}
// game tied due to turns === 0 and no 3 in a row
const tieGame = ()=>{
  if (tie) {
      endGameBackDrop.style.display = "block";
      tieGameDiv.style.display = "block";
      playAgain();
  }
}
// diagnoal 3 in a row
const diagnoal = (top,middle,bottom)=>{
  //if textContent in 3 diagonal rows ( top middle and bottom ) then declare a winner
  const topChildren = top.children;
  const middleChildren = middle.children;
  const bottomChildren = bottom.children;
  if((topChildren[0].textContent === "X" || topChildren[2].textContent === "X") && middleChildren[1].textContent === "X" && (bottomChildren[2].textContent === "X" || bottomChildren[0].textContent === "X")){
    gameOver = true;
    winner();
  } else if((topChildren[0].textContent=== "O" || topChildren[2].textContent === "O") && middleChildren[1].textContent === "O" && (bottomChildren[2].textContent === "O" || bottomChildren[0].textContent === "O")){
    gameOver = true;
    winner();
  }
};
// vertical 3 in a row
const vertical = (top,middle,bottom)=>{
  // if textContent in 3 vertical rows (top,middle and bottom ) then declare a winner
  const topChildren = top.children;
  const middleChildren = middle.children;
  const bottomChildren = bottom.children;
  for(let i =0; i < topChildren.length; i++){
    if(topChildren[i].textContent === "X" && middleChildren[i].textContent === "X" && bottomChildren[i].textContent === "X"){
      gameOver = true;
      winner();
      break;
    } else if (topChildren[i].textContent === "O" && middleChildren[i].textContent === "O" && bottomChildren[i].textContent === "O"){
      gameOver = true;
      winner();
      break;
    }
  }
};
//  horizontal 3 in a row
const horizontal = (top,middle,bottom)=>{
  //if textContent in 3 vertical rows ( top,middle and bottom ) then declare a winner
  const topChildren = top.children;
  const middleChildren = middle.children;
  const bottomChildren = bottom.children;
  // match board input for three in a row
  if(topChildren[0].textContent === "X" && topChildren[1].textContent === "X" && topChildren[2].textContent === "X"){
    gameOver = true;
    winner();
  } else if (middleChildren[0].textContent === "X" && middleChildren[1].textContent === "X" && middleChildren[2].textContent === "X"){
    gameOver = true;
    winner();
  }
  else if (bottomChildren[0].textContent === "X" && bottomChildren[1].textContent === "X" && bottomChildren[2].textContent === "X"){
    gameOver = true;
    winner();
  } else if(topChildren[0].textContent === "O" && topChildren[1].textContent === "O" && topChildren[2].textContent === "O"){
    gameOver = true;
    winner();
  } else if (middleChildren[0].textContent === "O" && middleChildren[1].textContent === "O" && middleChildren[2].textContent === "O"){
    gameOver = true;
    winner();
  }
  else if (bottomChildren[0].textContent === "O" && bottomChildren[1].textContent === "O" && bottomChildren[2].textContent === "O"){
    gameOver = true;
    winner();
  };
};
// add turn counter should be equal to number of spaces avaible
const turnSpan = ()=>{
  const span = document.querySelector("#turns");
  span.innerHTML = `Turns: ${turns}`;
};
turnSpan();
// token config for what happens on click 
const tokenConfig = (evt)=>{
  turnSpan();
  //add turns odd is O even is X
  if(turns % 2 === 0 && evt.target.textContent === ""){
    const token = evt.target.innerHTML = 'X';
    vertical(topRow,middleRow,bottomRow);
    horizontal(topRow,middleRow,bottomRow);
    diagnoal(topRow,middleRow,bottomRow);
    turns--;// countdown from 9 when piece is clicked
    turnSpan();
   } else if(turns % 2 !== 0 && evt.target.textContent === "") {
     const token = evt.target.innerHTML = 'O';
     vertical(topRow,middleRow,bottomRow);
     horizontal(topRow,middleRow,bottomRow);
     diagnoal(topRow,middleRow,bottomRow);
     turns--;
     turnSpan();
   }
   // if all pieces are filled display tie game and play again button
   if(turns === 0 && !gameOver){
     tie = true;
    tieGame();
  }
};
//add the token
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
//when checked allow for start game to be pressed
checkbox.addEventListener("change",()=>{
  if(checkbox.checked){
  gamebutton.style.backgroundColor = "green";
  gamebutton.disabled = false;
  // enable button to be pressed at start game
  gamebutton.addEventListener("click",()=>{
    // remove modal and backdrop on click
    modal.style.display = "none";
    backdrop.style.display = 'none';
  });
} else {
  gamebutton.style.backgroundColor = "red";
  gamebutton.disabled = true;
}
});
// clear board token and rest score
const clearBoard = (item)=>{
  const clearitem = item.children;
  turns = 9;
  turnSpan();
  for(let i = 0; i< clearitem.length; i++){
    let clear = clearitem[i];
    clear.textContent = "";
  }
}
// restart game and enjoy
const playAgain = ()=>{
  const playAgainButton = document.querySelector(".playAgain");
  playAgainButton.addEventListener("click",()=>{
    clearBoard(topRow);
    clearBoard(bottomRow);
    clearBoard(middleRow);
    endGameBackDrop.style.display = "none";
    gameOverDiv.style.display = "none";
  })
}

