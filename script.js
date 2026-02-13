const messages = [
    "You mean everything to me ❤️",
    "I’m so lucky to have you 💕",
    "You make my life better every day 💖"
];

function showLove() {
    const random = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[random];
}
