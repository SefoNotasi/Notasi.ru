// Time digital
function GetTimeDigital() {
    let date = new Date();
    let hour = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
    if (min <= 9) min = "0" + min;
    if (sec <= 9) sec = "0" + sec;

    let text = `${hour}:${min}:${sec}`;
    document.getElementById('time-digital').innerHTML = text;
}

GetTimeDigital();
setInterval(GetTimeDigital, 1000);

// Time analog
function GetTimeAnalog() {
    let date = new Date();
    let hour = date.getHours(), min = date.getMinutes(), ap;
    if (hour == 0) { ap = " AM"; hour = 12; }
    else if (hour < 12) { ap = " AM"; }
    else if (hour == 12) { ap = " PM"; }
    else if (hour > 12) { ap = " PM"; hour -= 12; }

    if (min <= 9) min = "0" + min;

    let text = `${hour}:${min} ${ap}`;
    document.getElementById('time-analog').innerHTML = text;
}

GetTimeAnalog();
setInterval(GetTimeAnalog, 1000);

// Date digital
function GetDateDigital() {
    let date = new Date();
    let month = (date.getMonth() + 1), day = date.getDate(), year = date.getFullYear();
    if (month <= 9) month = "0" + month;
    if (day <= 9) day = "0" + day;

    let text = `${day}.${month}.${year}`;
    document.getElementById('date-digital').innerHTML = text;
}

GetDateDigital();
setInterval(GetDateDigital, 1000);

// Analog date
let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function GetDateAnalog() {
    let date = new Date();
    let day = date.getDay(), month = date.getMonth();

    let text = `${weeks[day]}, ${months[month]}`;
    document.getElementById('date-analog').innerHTML = text;
}

GetDateAnalog();
setInterval(GetDateAnalog, 1000);

var Clock = {
    totalSeconds: 0,
    start: function () {
        if (!this.interval) {
            var self = this;
            function pad(val) { return val > 9 ? val : "0" + val; }
            this.interval = setInterval(function () {
                self.totalSeconds += 1;

                let hour = pad(Math.floor(self.totalSeconds / 3600 % 60));
                let minute = pad(Math.floor(self.totalSeconds / 60 % 60));
                let second = pad(parseInt(self.totalSeconds % 60));
                document.getElementById("timer").innerHTML = `${hour}:${minute}:${second}`;
            }, 1000);
        }
    },

    reset: function () {
        Clock.totalSeconds = null;
        clearInterval(this.interval);
        document.getElementById("timer").innerHTML = "00:00:00";
        delete this.interval;
    },

    pause: function () {
        clearInterval(this.interval);
        delete this.interval;
    },

    resume: function () {
        this.start();
    },

    restart: function () {
        this.reset();
        Clock.start();
    }
};

Clock.start();

document.getElementById("timer-start").addEventListener("click", function () { Clock.start(); });
document.getElementById("timer-pause").addEventListener("click", function () { Clock.pause(); });
document.getElementById("timer-resume").addEventListener("click", function () { Clock.resume(); });
document.getElementById("timer-reset").addEventListener("click", function () { Clock.reset(); });
document.getElementById("timer-restart").addEventListener("click", function () { Clock.restart(); });

var cd = document.getElementById("cd");

document.addEventListener("DOMContentLoaded", function () { startPlayer(); }, false);
var player;

function startPlayer() {
    player = document.getElementById('player');
    player.controls = false;
    getVolume();
}

function back() {
    pause();
    player.currentTime -= 5;
    play();
}

function forward() {
    pause();
    player.currentTime += 5;
    play();
}

function play() {
    player.play();
    cd.classList.add("play");
}

function pause() {
    player.pause();
    cd.classList.remove("play");
}

function stop() {
    pause();
    player.currentTime = 0;
}

function mute() {
    if (player.muted) {
        player.muted = false;
        getVolume();
    } else {
        player.muted = true;
        document.getElementById("volume").innerHTML = "muted";
    }
}

function volumeDown() {
    if (player.muted) {
        player.muted = false;
        getVolume();
    }

    var volume = player.volume -= .1;
    if (volume < 0) {
        volume = 0;
    }

    player.volume = volume
    getVolume();
}

function volumeUp() {
    if (player.muted) {
        player.muted = false;
        getVolume();
    }

    var volume = player.volume += .1;
    if (volume > 1) {
        volume = 1;
    }

    player.volume = volume
    getVolume();
}

function getVolume() {
    document.getElementById("volume").innerHTML = `${Math.floor(player.volume * 100)}%`;
}

const audio = document.querySelector('audio');
const durationContainer = document.getElementById('duration');

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${returnedMinutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    durationContainer.textContent = calculateTime(audio.duration);
}

if (audio.readyState > 0) {
    displayDuration();
} else {
    audio.addEventListener('loadedmetadata', () => {
        displayDuration();
    });
}

current = document.getElementById("current");

audio.addEventListener("timeupdate", function () {
    tt = "0";
    var Amin = Math.floor(audio.currentTime / 60);
    var Asec = Math.floor(audio.currentTime - Amin * 60);

    if (Asec < 10) {
        Asec = "0" + Asec;
    }

    if (Amin > 10) {
        tt = "";
    }

    current.innerHTML = tt + Amin + ":" + Asec;
});

(function () {

    // Playlist array.
    var files = [
        "Rider.mp3",
        "Dragon.mp3",
        "Push.mp3",
        "Win.mp3",
        "Tiger.mp3",
        "Fly.mp3",
        "Fight.mp3",
        "Battle.mp3",
        "Sin.mp3"
    ];

    // Current index of the files array.
    var i = 0;

    // Get the audio elements.
    var music_player = document.querySelector("audio");
    var button_prev = document.getElementById("prev");
    var button_next = document.getElementById("next");
    var button_random = document.getElementById("random")
    button_prev.addEventListener('click', prev);
    button_next.addEventListener('click', next);
    button_random.addEventListener('click', random);

    function prev() {
        if (i === 0) {
            i = files.length - 1;
        } else {
            i--;
        }
        change();
    }

    // Function for moving to next audio file.
    function next() {
        // Check for last audio file in the playlist.
        if (i === files.length - 1) {
            i = 0;
        } else {
            i++;
        }
        change();
    }

    function random() {
        music_player.src = files[Math.floor(Math.random() * files.length)]
        music_player.play();
        cd.classList.add("play");
    }

    function change() {
        // Change the audio element source.
        music_player.src = files[i];
        music_player.play();
        cd.classList.add("play");
    }

    // Check if the player is selected.
    if (music_player === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player.
        music_player.src = files[i];

        // Listen for the music ended event, to play the next audio file.
        music_player.addEventListener('ended', next, false)
    }

})();