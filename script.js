const questions = [

{
question:"How do you spend free time?",
answers:[
{text:"Relax alone", type:"BC"},
{text:"Hang with friends", type:"GR"},
{text:"Work on goals", type:"DB"},
{text:"Random fun chaos", type:"OC"}
]
},

{
question:"Friends describe you as:",
answers:[
{text:"Mysterious", type:"BC"},
{text:"Supportive", type:"GR"},
{text:"Strong leader", type:"DB"},
{text:"Unpredictable", type:"OC"}
]
},

{
question:"In a group project you:",
answers:[
{text:"Do your part quietly", type:"BC"},
{text:"Encourage everyone", type:"GR"},
{text:"Lead the team", type:"DB"},
{text:"Make it chaotic", type:"OC"}
]
},

{
question:"Ideal weekend?",
answers:[
{text:"Peaceful alone time", type:"BC"},
{text:"Time with loved ones", type:"GR"},
{text:"Self improvement", type:"DB"},
{text:"Adventure", type:"OC"}
]
},

{
question:"When stressed you:",
answers:[
{text:"Withdraw", type:"BC"},
{text:"Talk it out", type:"GR"},
{text:"Solve the problem", type:"DB"},
{text:"Ignore it", type:"OC"}
]
},

{
question:"Energy vibe:",
answers:[
{text:"Calm", type:"BC"},
{text:"Warm", type:"GR"},
{text:"Focused", type:"DB"},
{text:"Wild", type:"OC"}
]
},

{
question:"Pick a place:",
answers:[
{text:"Quiet night city", type:"BC"},
{text:"Sunny park", type:"GR"},
{text:"Modern office", type:"DB"},
{text:"Arcade", type:"OC"}
]
},

{
question:"Decision style:",
answers:[
{text:"Careful", type:"BC"},
{text:"Heart based", type:"GR"},
{text:"Strategic", type:"DB"},
{text:"Impulse", type:"OC"}
]
},

{
question:"Conflict response:",
answers:[
{text:"Distance", type:"BC"},
{text:"Fix relationship", type:"GR"},
{text:"Confront", type:"DB"},
{text:"Add chaos", type:"OC"}
]
},

{
question:"Life motto:",
answers:[
{text:"Stay mysterious", type:"BC"},
{text:"Spread love", type:"GR"},
{text:"Win with strategy", type:"DB"},
{text:"Life is chaos", type:"OC"}
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

if(scores[key]>scores[highest]){

highest=key;

}

}

const results={

BC:{
title:"🐈‍⬛ Black Cat",
desc:"Independent, mysterious, calm"
},

GR:{
title:"🐕 Golden Retriever",
desc:"Warm, loyal, affectionate"
},

DB:{
title:"🐕‍🦺 Doberman",
desc:"Confident, strategic, protective"
},

OC:{
title:"🐈 Orange Cat",
desc:"Chaotic, playful, spontaneous"
}

};

title.textContent=results[highest].title;

desc.textContent=results[highest].desc;

shareBtn.onclick=()=>{

let text=`I got ${results[highest].title} on this personality quiz!`;

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