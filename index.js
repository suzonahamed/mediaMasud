
const video=document.querySelector("video");
video.addEventListener("canplay",function(){
    console.log("Ready to play");
})

video.addEventListener("play",function(){
    console.log("play");
})

video.addEventListener("playing",function(){
    console.log("playing");
})
video.addEventListener("volumechange",function(){
    console.log("volumechanging");
})

video.addEventListener("ended",function(){
    console.log("Thanks for watching");
})

