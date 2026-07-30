const loginBtn = document.querySelector(".login");
const signupBtn = document.querySelector(".signup");

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const closeBtns = document.querySelectorAll(".close");

if(loginBtn){
loginBtn.onclick = () => {
loginModal.style.display = "flex";
};
}

if(signupBtn){
signupBtn.onclick = () => {
signupModal.style.display = "flex";
};
}

closeBtns.forEach(btn=>{

btn.onclick=()=>{

loginModal.style.display="none";
signupModal.style.display="none";

};

});

window.onclick=(e)=>{

if(e.target===loginModal){

loginModal.style.display="none";

}

if(e.target===signupModal){

signupModal.style.display="none";

}

};

document.querySelectorAll(".game").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

document.querySelectorAll(".game button").forEach(btn=>{

btn.onclick=()=>{

alert("Game launching soon!");

};

});

const search=document.querySelector(".search input");

if(search){

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

document.querySelectorAll(".game").forEach(game=>{

let title=game.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

game.style.display="block";

}else{

game.style.display="none";

}

});

});

}

setInterval(()=>{

const stats=document.querySelectorAll(".statBox h1");

if(stats.length>=4){

stats[2].textContent=(4500+Math.floor(Math.random()*300))+"";

}

},3000);

window.addEventListener("scroll",()=>{

document.querySelectorAll(".game,.panel,.communityCard,.updateCard").forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-80){

card.style.opacity="1";

card.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".game,.panel,.communityCard,.updateCard").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(30px)";

card.style.transition=".5s";

});

window.dispatchEvent(new Event("scroll"));

console.log("OldBlocks Loaded");

document.querySelector("#signupModal button").onclick = () => {

const email =
document.querySelector('#signupModal input[type="email"]').value;

const password =
document.querySelector('#signupModal input[type="password"]').value;

signUp(email, password);

};

document.querySelector("#loginModal button").onclick = () => {

const email =
document.querySelector('#loginModal input[type="text"]').value;

const password =
document.querySelector('#loginModal input[type="password"]').value;

login(email, password);

};
