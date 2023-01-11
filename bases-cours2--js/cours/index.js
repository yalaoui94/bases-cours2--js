// // //SELECTEURS
// les exemples de cours//
// // document.querySelector('h4') => pour pointer un element html//
// document.querySelector('h4').style.background ="blue";

// Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.add("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* #id > .class >baliseHTML suivre l'ordre chronologique en CSS*/

//-----------------------------
// Mouse Evente

const mousemove = document.querySelector(".mousemove");

// faire bouger la souris au meme temps que le cursors//
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mousedup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0 0 0 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";

  console.log(audio.src);
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key; // textContent pour afficher la lettre taper sur l'écran

  if (e.key === "j") {
    keypressContainer.style.background = "yellow";
  } else if (e.key === "h") {
    keypressContainer.style.background = "yellow";
  } else {
    keypressContainer.style.background = "blue";
  }
  if (e.key === "z") ring(e.key);
});

// Sccroll event

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50%";
  }
});

//------------------------fin scroll

// ------------------form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const from = document.querySelector("form");

let language = "";
let pseudo = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

from.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    // la methode innerhtml permet d'ajouter directement la data remplis par  l'utilisateur directement dans l'élement enfant (html= balise div)//
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo};
    <h4>Langage préféré: ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-----------------------------------------------
// Load event

window.addEventListener("load", () => {
  console.log("je suis la !");
});

//----------------------------------
// Pour selectionner plusieurs class avec le mème nom

// const boxes = document.getElementsByClassName("box");
// ForEach

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

//----------------------------------
// addEventListner Vs onclick
// explication il est recommander d'utiliser la la methode addEventListner
// toute fois la methode onClick est correct mais elle écrase le premier élément
// document.body.onclick = () =>{
// console.log("Click !");
// };

//Bubling => fin (de base d'elventListener est paramétré en mode Bubling) toujours false
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 ");
  },
  false
);

// Usecapture

document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 ");
  },
  true
);

//---------------------------------------------
//Stop Propagation

questionContainer.addEventListener("click", (e) => {
  alert("attention stop propagation ! ");
  // e.stopPropagation();
});

//------------------------------
// removeEventListener pour retirer l'eventListener

//----------------------
// BOM (Broser object model)
// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("https://facebook.com", "cours de papa", "height= 560, width= 888");
// Evenement adossés à window
//alert("hello");
// confirm pour valider si l'utilisateur veut supprimer un élement ou par (feneter ok ou annuler)

btn1.addEventListener("click", () => {
  confirm("Est vous sure de votre choix !");
});

// Prompt (fenetre qui s'affiche ou on peut taper une préponse)

btn2.addEventListener("click", () => {
  let answer = prompt("Est vous sure de votre choix !");
  questionContainer.innerHTML += "<h3> Bravo " + answer + "</h3>";
});

// setTimeout(() => {
//   //LOGIGIQUE à executer

//   questionContainer.style.borderRadius = "300px";
// }, 2000);


// let interval = setInterval(()=>{ 
// document.body.innerHTML += `
// <div class= 'box'>
// <h2>Nouvelle Boite !</h2>
// </div>
// `
// },1000);

// document.body.addEventListener("click", (e)=>{
//   console.log(e.target);
//  clearInterval(interval);
// });

//------------------------------
// location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);


// window.onload=()=>{
//     location.href ="https://twitter.com";
    
// }; POUR REDIRIGER VERS UN AUTRE SITE OU PAGE NAVIGATEUR 

// NAVIGATOR  PERSONAL DESCKOFFICE 
// console.log(navigator.userAgent);


// History

// console.log(history);
// window.history.back();
// history.go(-2);


//---------------------------------------

// SetProperty

window.addEventListener("mousemove", (e)=>{ 
  console.log(e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layery + "px");
});