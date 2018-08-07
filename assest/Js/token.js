//logic for 3 in a row
const topRow = document.querySelector("#top");
const middleRow = document.querySelector("#middle");
const bottomRow = document.querySelector("#bottom");
//add Xs onclick
const addXs = () =>{
  topRow.addEventListener("click",evt =>{
  console.log(evt.target);
});
middleRow.addEventListener("click",evt =>{
  console.log(evt.target);
});
bottomRow.addEventListener("click",evt =>{
  console.log(evt.target);
});
};
// add Os onclick
const Os = () =>{
  topRow.addEventListener("click",evt =>{
    console.log(evt.target);
  });
  middleRow.addEventListener("click",evt =>{
    console.log(evt.target);
  });
  bottomRow.addEventListener("click",evt =>{
    console.log(evt.target);
  });
};
