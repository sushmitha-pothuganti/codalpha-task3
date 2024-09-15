let currentMusic=0;
const music=document.querySelector('#audio');//here selecting 

const seekBar=document.querySelector('.seek-bar');
const songName=document.querySelector('.music-name');
const artistName=document.querySelector('.artist-name');
const disk=document.querySelector('.disk');
const currentTime=document.querySelector('.current-time');
const musicDuration=document.querySelector('.song-duration');
const playBtn=document.querySelector('.play-btn');
const forwardBtn=document.querySelector('.forward-btn');
const backwardBtn=document.querySelector('.backrward-btn');
playBtn.addEventListener('click',() =>{
    if(playBtn.className.includes('pause')){
        music.play();
    }
    else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})
// setup music
const setMusic=(i)=>{
    seekBar.value = 0; //set range slide value to 0;
    let song=songs[i];
    currentMusic=i;
    music.src=song.path;
    songName.innerHTML=song.name;
    artistName.innerHTML=song.artist;
    disk.style.backgroundImage=`url('${song.cover}')`;
    currentTime.innerHTML='00:00';
    setTimeout(()=>{
        seekBar.max = music.duration;
        musicDuration.innerHTML=formatTime(music.duration);
    }, 300);
}
setMusic(0);//call the function at last with 0 as an argument

//formatting time in min and seconds format
const formatTime =(time)=>{
    let min = Math.floor(time/60);
    if(min<10){
        min=`0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return`${min}:${sec}`;
}