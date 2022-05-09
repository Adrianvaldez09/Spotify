
let playBtn = document.getElementById("play")
let pauseBtn = document.getElementById("pause")
let soundBar= document.querySelectorAll(".sound-bars")
console.log(soundBar)
let greenBtn = document.getElementById("play-pause")
let firstSong = false

let songLists = document.querySelectorAll(".songs")
let songDots = document.getElementsByClassName("song-dots")
let song1 = document.getElementById("song1")



songLists.forEach(song =>{
    song.addEventListener('click', ()=>{
        songLists.forEach(button => button.classList.remove("active"));
        song.classList.add("active")
        playBtn.classList.add("paused")
        pauseBtn.classList.add("playing")
        soundBar.forEach(bar => bar.classList.add("animation"))
        firstSong = true
    })
})

greenBtn.addEventListener("click", ()=>{
    playBtn.classList.toggle("paused")
    pauseBtn.classList.toggle("playing")
    soundBar.forEach(bar => bar.classList.toggle("animation"))
    console.log(123)
    if(firstSong === false){
        song1.classList.add("active")
    }
})





let emptyHeart = document.getElementById("empty-heart")
let filledHeart = document.getElementById("filled-heart")


emptyHeart.addEventListener("click",()=>{
    filledHeart.classList.toggle("disliked")
    emptyHeart.classList.toggle("liked")
})
filledHeart.addEventListener("click",()=>{
    filledHeart.classList.toggle("disliked")
    emptyHeart.classList.toggle("liked")
})







let saveSong = document.getElementsByClassName("hover-heart")
let saved = document.getElementsByClassName("saved")

for(let i=0;i<saveSong.length;i++){
    saveSong[i].addEventListener("click", ()=>{
        saved[i].classList.toggle("song-saved")
    })
}
console.log(saveSong)
console.log(saved)



let accountSettings = document.getElementById("account-settings")
let accountPopup = document.getElementById("account-popup")
// let upArrow = document.getElementById("up-arrow")
let downArrow = document.getElementById("down-arrow")

accountSettings.addEventListener("click", ()=>{
    accountPopup.classList.toggle("account-settings")
    downArrow.classList.toggle("popup-active")
    // upArrow.classList.toggle("popup-active")
})

function accountClicked(){
    accountPopup.classList.toggle("account-settings")
    downArrow.classList.toggle("popup-active")
}

