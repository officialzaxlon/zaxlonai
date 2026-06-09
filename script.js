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
