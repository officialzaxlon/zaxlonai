here// ===========================
// ZAXLON AI - SCRIPT FILE
// ===========================

// Button click effect
document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 150);

            alert("🚀 Zaxlon AI is getting ready... Future Loading!");
        });
    });

});

// Floating background particles (simple effect)
function createParticle(){
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = "6px";
    particle.style.height = "6px";
    particle.style.background = "cyan";
    particle.style.borderRadius = "50%";
    particle.style.opacity = "0.5";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = window.innerHeight + "px";
    particle.style.zIndex = "0";
    document.body.appendChild(particle);

    let move = setInterval(() => {
        let top = parseFloat(particle.style.top);
        particle.style.top = top - 2 + "px";

        if(top < -10){
            particle.remove();
            clearInterval(move);
        }
    }, 20);
}

// Generate particles continuously
setInterval(createParticle, 300);
