const leftMenu = document.querySelectorAll('.left-menu');
const changeActiveItem = () => {
  leftMenu.forEach(Item => {
    Item.classList.remove('active');
  });
};
leftMenu.forEach(Item => {
  Item.addEventListener('click', () => {
    changeActiveItem();
    Item.classList.add('active');
    if (Item.id !== "notification") {
      document.querySelector('.popup').style.display = 'none';
    } else {
      document.querySelector('.popup').style.display = 'block';
      document.querySelector('#notification .count').style.display = 'none';
    }
  });
});

/*---------------------------like--------------------------*/
/*
const like = document.getElementById("like");
function fun(){
  document.getElementById("heart").style.display  = "block";
  document.getElementsByClassName("fa-regular fa-heart").style.display = "none";
}

like.addEventListener("dblclick",fun);

*/

/*
const like = document.getElementsByClassName(".like");

function fun() {
  document.getElementsByClassName("fa-solid fa-heart").style.display = "block";
  const icons = document.getElementsByClassName("fa-regular fa-heart");
  for (const icon of icons) {
    icon.style.display = "none";
  }
}

like.addEventListener("dblclick", fun);
*/
/*
const likeElements = document.getElementsByClassName("like");
like=()=> {
  const like = document.getElementsByClassName("fa-solid fa-heart");
  for (const likes of like) {
    likes.style.display = "block";
  }
  
  const regularHearts = document.getElementsByClassName("fa-regular fa-heart");
  for (const regularHeart of regularHearts) {
    regularHeart.style.display = "none";
  }
}

// Loop through each "like" element and attach the event listener
for (const likeElement of likeElements) {
  likeElement.addEventListener("dblclick", fun);
}
*/
/*
const like = document.querySelectorAll("like")
like=()=>{
  document.getElementsByClassName("fa-solid fa-heart").style.display  = "block";
  document.getElementsByClassName("fa-regular fa-heart").style.display = "none";
}

like.addEventListener("dblclick",fun);
*/
/*
const likeElements = document.querySelectorAll(".like");

function likeHandler() {
  const solidHearts = document.querySelectorAll(".fa-solid.fa-heart");
  const regularHearts = document.querySelectorAll(".fa-regular.fa-heart");

  solidHearts.forEach((solidHeart) => {
    solidHeart.style.display = "block";
  });

  regularHearts.forEach((regularHeart) => {
    regularHeart.style.display = "none";
  });
}

likeElements.forEach((likeElement) => {
  likeElement.addEventListener("dblclick", likeHandler);
});
*/

const like = document.querySelectorAll(".like");
action = () =>{
  const solid = document.querySelectorAll(".fa-solid.fa-heart");
  const regular = document.querySelectorAll(".fa-regular.fa-heart");
  solid.forEach((solids)=>{
    solids.style.display = "block";
  });
  regular.forEach((regulars)=>{
    regulars.style.display = "none";
  });
}

like.forEach((likes)=>{
  likes.addEventListener("dblclick",action);
}); 

