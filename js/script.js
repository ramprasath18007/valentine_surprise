let noCount = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const mainImage = document.getElementById("mainImage");
const heartsContainer = document.querySelector(".hearts");
const bgMusic = document.getElementById("bgMusic");
const startScreen = document.getElementById("startScreen");

/* Start Screen Click → Play Music */
startScreen.addEventListener("click", () => {
    bgMusic.play();
    startScreen.style.display = "none";
});

/* Floating Hearts Generator */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);

/* No Button Dodge */
noBtn.addEventListener("mouseover", () => {

    if (noCount < 4) {

        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";

        noCount++;

        // Make YES bigger
        yesBtn.style.transform = `scale(${1 + noCount * 0.2})`;

    } else {

        question.innerText = "Don't Mess With Me 😼🔫";
        mainImage.src = "assets/cat.gif";

        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
});

/* Yes Button Click */
yesBtn.addEventListener("click", () => {

    question.innerText = "😂 It's Just For Fun!";
    mainImage.src = "assets/getwell.gif";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    const msg = document.createElement("h2");
    msg.innerText = "Get Well Soon ❤️";
    msg.style.marginTop = "20px";
    document.querySelector(".main-container").appendChild(msg);
});
