here// ==========================
// ZAXLON AI SCRIPT PART 1
// ==========================

const startBtn = document.getElementById("startBtn");

// Start AI Button

startBtn.addEventListener("click", function(){

alert("🚀 Welcome to Zaxlon AI!");

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

});

// Card Animation

const cards=document.querySelectorAll(".card");

cards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// Welcome Message

console.log("Zaxlon AI Loaded Successfully");
// ==========================
// ZAXLON AI SCRIPT PART 2
// ==========================

// Start AI button click
const startAIButton = document.getElementById("startBtn");

if(startAIButton){

startAIButton.addEventListener("click",()=>{

const hero=document.querySelector(".hero");

hero.innerHTML=`

<h1>🤖 Zaxlon AI</h1>

<p>Welcome! Start your AI journey.</p>

<div class="chat-preview">

<input type="text" placeholder="Ask anything..." disabled>

<button>Send</button>

</div>

`;

});

}

// Card Click Effect

document.querySelectorAll(".card").forEach((card)=>{

card.addEventListener("click",()=>{

const title=card.querySelector("h2").innerText;

alert(title+" page will be available soon 🚀");

});

});

// Smooth Navbar

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});
