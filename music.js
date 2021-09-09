const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let progress = document.getElementById("progress");
const total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const Progress_div = document.getElementById("progress_div");
const songs = [
    {
        name: "Butter",
        title: "Butter",
        artist: "BTS",
        style: "song_img_1"
    },
    {
        name: "Permisssion to dance",
        title: "Permisssion to dance",
        artist: "BTS",
        style: "song_img_2"
    },
    {
        name: "Boy with luv",
        title: "Boy with luv",
        artist: "BTS",
        style: "song_img_3"
    },
    {
        name: "Mic Drop",
        title: "Mic drop",
        artist: "BTS",
        style: "song_img_4"
    }
]
let isPlaying = false;
//For play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
}
//For Pause Function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};
play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});
//Changing Music
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "./music/" + songs.name + ".mp3";
    img.src = "./images/" + songs.name + ".png";
    img.className = songs.style;
};
songIndex = 0;
//loadSong(songs[3]);
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length; //loop formed
    loadSong(songs[songIndex]);
    playMusic();
};
const previousSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; //loop formed
    loadSong(songs[songIndex]);
    playMusic();
};
//Progress js work  // `${}` template litrels  `\`` === '`' // --> true
music.addEventListener('timeupdate', (event) => {
    const { currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;
    //Music duration update

    let min_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    let tot_duration = `${min_duration}:${sec_duration}`;
    if (duration) {
        total_duration.textContent = `${tot_duration}`;
    }
    //Current duration update

    let min_currentTime = Math.floor(currentTime / 60);
    let sec_currentTime = Math.floor(currentTime % 60);

    if (sec_currentTime < 10) {
        sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;
});
//Progress bar on click functionality
Progress_div.addEventListener('click', (event) => {
    const { duration } = music;
    //const duration = music.duration;   
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    //Current Time in audio tag
    music.currentTime = move_progress;

});
//Next Song Function
music.addEventListener('ended', nextSong);
next.addEventListener('click', nextSong);
previous.addEventListener('click', previousSong);