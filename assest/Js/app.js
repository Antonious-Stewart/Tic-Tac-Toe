

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
