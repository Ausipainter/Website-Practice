
const messageEl = document.getElementById("message");

const messages = [
    "I love you Nayely 💖",
    "You are my favorite person",
    "Life is better with you",
    "You make me happy",
    "You are my everything",
    "I’m so lucky to have you",
    "You mean the world to me",
    "I can’t imagine life without you",
    "You make my life complete"
];

function random(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function typeText(text, callback){
    let i=0;
    messageEl.innerHTML="";
    let typing=setInterval(()=>{
        messageEl.innerHTML+=text[i];
        i++;
        if(i>=text.length){
            clearInterval(typing);
            if(callback) callback();
        }
    },40);
}

function cycle(){
    messageEl.style.opacity=0;
    setTimeout(()=>{
        let newMsg=random(messages);
        messageEl.style.opacity=1;
        typeText(newMsg,()=>{
            setTimeout(cycle,2000);
        });
    },500);
}
cycle();

const bg = document.querySelector(".bg-img");

const pics = [
    "Images/pic1.jpg",
    "Images/pic2.jpg",
    "Images/pic3.jpg"
];

function changeBackground(){
    bg.style.backgroundImage = `url(${random(pics)})`;
}
setInterval(changeBackground,5000);
changeBackground();


const memoryLayer = document.querySelector(".memory-layer");

const memoryPics = [

"Images/IMG-20240319-WA0000.jpg",
"Images/IMG-20240509-WA0000.jpg",
"Images/737783286.jpg",
"Images/IMG-20240321-WA0023.jpg",
"Images/IMG-20240214-WA0003.jpg",
"Images/IMG-20250206-WA0009.jpg",
"Images/3dgifmaker63038.gif",
"Images/IMG-20240908-WA0003.jpg",
"Images/Screenshot_20260213_173321_WhatsApp.jpg",
"Images/Screenshot_20260213_173318_WhatsApp.jpg"

];

function rand(min,max){
    return Math.random()*(max-min)+min;
}

/* SHUFFLE */
function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
}
shuffle(memoryPics);

const placedImages=[];

function isFarEnough(x,y){

    for(let img of placedImages){

        let dx = x - img.x;
        let dy = y - img.y;
        let distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < 250){
            return false;
        }
    }
    return true;
}

const pageHeight = document.body.scrollHeight;

memoryPics.forEach(pic=>{

    let img=document.createElement("img");

    img.src=pic;
    img.classList.add("memory");

    let width = rand(120,200);
    let x,y;
    let placed=false;

    while(!placed){

        x = rand(5,85);
        y = rand(0,pageHeight*0.9);

        if(isFarEnough(x*10,y)){
            placed=true;
        }
    }

    img.style.left = x+"vw";
    img.style.top = y+"px";
    img.style.width = width+"px";
    img.style.transform = `rotate(${rand(-20,20)}deg)`;

    placedImages.push({x:x*10,y:y});
    memoryLayer.appendChild(img);

});

window.addEventListener("scroll",()=>{
    document.querySelectorAll(".memory").forEach(mem=>{
        let rect=mem.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            mem.classList.add("show");
        }
    });
});


const petalLayer = document.querySelector(".petal-layer");

for(let i=0;i<15;i++){

    let petal=document.createElement("img");

    petal.src="Images/heart.png";
    petal.classList.add("petal");

    petal.style.left=Math.random()*100+"vw";
    petal.style.animationDuration=(6+Math.random()*6)+"s";
    petal.style.width=(10+Math.random()*15)+"px";

    petalLayer.appendChild(petal);
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function teleportNoButton(e){

    let touchX = e.touches ? e.touches[0].clientX : e.clientX;
    let touchY = e.touches ? e.touches[0].clientY : e.clientY;

    let newX = Math.random() * window.innerWidth;
    let newY = Math.random() * window.innerHeight;

    while(Math.abs(newX - touchX) < 200){
        newX = Math.random() * window.innerWidth;
    }

    while(Math.abs(newY - touchY) < 200){
        newY = Math.random() * window.innerHeight;
    }

    noBtn.style.position="fixed";
    noBtn.style.left=newX+"px";
    noBtn.style.top=newY+"px";
}

noBtn.addEventListener("mouseenter", teleportNoButton);
noBtn.addEventListener("touchstart", teleportNoButton);
noBtn.addEventListener("mousedown", teleportNoButton);



yesBtn.addEventListener("click",()=>{
    alert("Yay! I love you Nayely! 💖");
    for(let i=0;i<50;i++){
        
        let heart=document.createElement("img");
        heart.src="Images/heart.png";
        heart.classList.add("explode-heart");
        heart.style.left=Math.random()*100+"vw";
        heart.style.top=Math.random()*50+"vh";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),2000);
    }
});
