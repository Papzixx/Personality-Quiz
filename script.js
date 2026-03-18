const questions = [

{
question: "You have a free afternoon with no plans. What do you naturally end up doing?",
answers: [
{text: "Following whatever random idea feels interesting in the moment", type:"OC"},
{text: "Getting something done you've been putting off", type:"DB"},
{text: "Recharging alone, doing something quiet you enjoy", type:"BC"},
{text: "Messaging friends or finding someone to hang out with", type:"GR"}
]
},

{
question: "When someone new talks to you first, your reaction is usually:",
answers: [
{text: "Warm and open right away", type:"GR"},
{text: "Polite but a bit reserved", type:"BC"},
{text: "Curious and playful", type:"OC"},
{text: "Observant, trying to read their intentions", type:"DB"}
]
},

{
question: "Your friends would describe your energy as:",
answers: [
{text: "Intense but reliable", type:"DB"},
{text: "Unpredictable but fun", type:"OC"},
{text: "Calm but hard to fully read", type:"BC"},
{text: "Supportive and easy to be around", type:"GR"}
]
},

{
question: "When you're stressed, you tend to:",
answers: [
{text: "Talk it out with someone you trust", type:"GR"},
{text: "Distract yourself with something else", type:"OC"},
{text: "Withdraw and deal with it privately", type:"BC"},
{text: "Focus on fixing the problem immediately", type:"DB"}
]
},

{
question: "In a group project, you usually:",
answers: [
{text: "Take control to make sure it works", type:"DB"},
{text: "Do your part quietly and well", type:"BC"},
{text: "Jump between ideas and roles", type:"OC"},
{text: "Keep everyone connected and motivated", type:"GR"}
]
},

{
question: "What kind of environment do you prefer?",
answers: [
{text: "Lively and social", type:"GR"},
{text: "Flexible and changing", type:"OC"},
{text: "Structured and efficient", type:"DB"},
{text: "Peaceful and low-energy", type:"BC"}
]
},

{
question: "If plans suddenly change, you:",
answers: [
{text: "Try to reorganize things quickly", type:"DB"},
{text: "Feel a bit thrown off but adapt quietly", type:"BC"},
{text: "Think \"oh this could be interesting\"", type:"OC"},
{text: "Go with it and keep the vibe positive", type:"GR"}
]
},

{
question: "Your approach to trust is:",
answers: [
{text: "Given easily, unless broken", type:"GR"},
{text: "Depends on the vibe", type:"OC"},
{text: "Given slowly, but deeply", type:"BC"},
{text: "Earned through actions", type:"DB"}
]
},

{
question: "When making decisions, you rely more on:",
answers: [
{text: "How it affects others", type:"GR"},
{text: "Logic and outcome", type:"DB"},
{text: "Curiosity and possibilities", type:"OC"},
{text: "Personal feelings and intuition", type:"BC"}
]
},

{
question: "What feels most like you?",
answers: [
{text: "Loyal and affectionate", type:"GR"},
{text: "Independent but selective", type:"BC"},
{text: "Chaotic but genuine", type:"OC"},
{text: "Protective and driven", type:"DB"}
]
}

];

let scores={BC:0,GR:0,DB:0,OC:0};
let currentQuestion=0;

const startScreen=document.getElementById("start-screen");
const startBtn=document.getElementById("start-btn");
const quiz=document.getElementById("quiz");
const questionEl=document.getElementById("question");
const answersEl=document.getElementById("answers");
const progressBar=document.getElementById("progress-bar");
const progressText=document.getElementById("progress-text");
const result=document.getElementById("result");
const title=document.getElementById("personality-title");
const desc=document.getElementById("personality-description");
const compatTitle=document.getElementById("compat-title");
const compatDesc=document.getElementById("compat-description");
const restart=document.getElementById("restart");
const shareBtn=document.getElementById("share-btn");

startBtn.onclick=()=>{
startScreen.classList.add("hidden");
quiz.classList.remove("hidden");
showQuestion();
};

function showQuestion(){
let q=questions[currentQuestion];
questionEl.textContent=q.question;
progressText.textContent=`Question ${currentQuestion+1} / ${questions.length}`;
progressBar.style.width=(currentQuestion/questions.length*100)+"%";
answersEl.innerHTML="";
q.answers.forEach(answer=>{
let btn=document.createElement("button");
btn.textContent=answer.text;
btn.classList.add("answer-btn");
btn.onclick=()=>selectAnswer(answer.type);
answersEl.appendChild(btn);
});
}

function selectAnswer(type){
scores[type]++;
currentQuestion++;
if(currentQuestion<questions.length){
showQuestion();
}else{
showResult();
}
}

function showResult(){
quiz.classList.add("hidden");
result.classList.remove("hidden");

let highest="BC";
for(let key in scores){
if(scores[key]>scores[highest]) highest=key;
}

let match=null;
for(let key in scores){
if(key===highest) continue;
if(match===null || scores[key]>scores[match]) match=key;
}

const results={
BC:{
title:"🐈‍⬛ Black Cat",
desc:"You're independent, selective, and a little mysterious. You don't need much — just your space, your vibe, and maybe one or two people who actually get you. You observe more than you speak, and that's your superpower.",
compat:{
GR:"🐕 Golden Retriever — Their warmth softens your edges. They give you affection without crowding you, and you give them the depth they didn't know they needed.",
DB:"🐕‍🦺 Doberman — Two self-sufficient forces who respect each other's space. You bond through loyalty and trust, not constant contact.",
OC:"🐈 Orange Cat — They pull you out of your shell in the best way. Chaotic but loveable — somehow it works."
}
},
GR:{
title:"🐕 Golden Retriever",
desc:"You lead with love. You're the person who remembers birthdays, checks in when someone's quiet, and genuinely cares how people feel. Your warmth isn't a strategy — it's just who you are.",
compat:{
BC:"🐈‍⬛ Black Cat — They're a challenge in the best way. Your warmth draws them in slowly, and their depth keeps you intrigued.",
DB:"🐕‍🦺 Doberman — They protect, you nurture. A balanced duo that covers each other's blind spots.",
OC:"🐈 Orange Cat — Pure energy and joy together. You're the heart, they're the chaos — unbeatable combo."
}
},
DB:{
title:"🐕‍🦺 Doberman",
desc:"You're focused, strategic, and quietly protective of the people you care about. You don't talk much, but when you do, people listen. You move with purpose and you expect the same from others.",
compat:{
GR:"🐕 Golden Retriever — They remind you that not everything needs to be optimized. Their warmth grounds your intensity.",
BC:"🐈‍⬛ Black Cat — Mutual respect, zero drama. You both value loyalty and space — a rare and solid match.",
OC:"🐈 Orange Cat — Opposites that somehow click. They loosen you up; you give them direction."
}
},
OC:{
title:"🐈 Orange Cat",
desc:"You're chaotic, curious, and genuinely fun to be around. You don't follow rules you didn't agree to, and you live fully in the moment. People never know what you'll do next — and honestly, neither do you.",
compat:{
GR:"🐕 Golden Retriever — They keep up with your energy and actually enjoy it. Plus they'll make sure you eat and sleep.",
DB:"🐕‍🦺 Doberman — They give you structure without killing your vibe. You give them a reason to loosen up.",
BC:"🐈‍⬛ Black Cat — Chaotic meets mysterious. You're endlessly curious about each other, which keeps things interesting."
}
}
};

title.textContent=results[highest].title;
desc.textContent=results[highest].desc;

const matchInfo=results[highest].compat[match];
if(matchInfo){
compatTitle.textContent=matchInfo.split(" — ")[0];
compatDesc.textContent=matchInfo.split(" — ")[1];
}

shareBtn.onclick=()=>{
let text=`I got ${results[highest].title} on this personality quiz! My best match is ${compatTitle.textContent}. Try it yourself!`;
navigator.clipboard.writeText(text);
alert("Result copied! Share it with friends.");
};
}

restart.onclick=()=>{
scores={BC:0,GR:0,DB:0,OC:0};
currentQuestion=0;
result.classList.add("hidden");
quiz.classList.remove("hidden");
showQuestion();
};
