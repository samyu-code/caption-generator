let btn =document.getElementById('btn');
let output=document.getElementById('output');
let quotes=[
    "20 is the new 19.",
    "Roaring twenties.",

    "Cheers to 20!",
    "Goodbye teens, hello twenties!",
    "This is 20.",
    "Level 20 unlocked.",
    "20/20 vision.",
    "Chapter 20",
    "Season 20, episode 1.",
    ];

btn.addEventListener('click',function(){
    var randomQ=quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML=randomQ;
})