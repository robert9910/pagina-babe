var holding = false;
var track = document.getElementById('track');
var progress = document.getElementById('progress');
var play = document.getElementById('play');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var art = document.getElementById('art');
var current_track = 0;
var song, audio, duration;
var playing = false;
var songs = [{
    title: 'In case you didnt know',
    artist: 'Brett Young',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Brett%20Young%20%20In%20Case%20You%20Didnt%20know%20Espa%C3%B1ol.mp3?v=1626772580841',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.22.03%20(1).jpeg?v=1626774278007'
},
    
{
    title: 'Cama y mesa',
    artist: 'Roberto Carlos',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Roberto%20Carlos%20%20Cama%20y%20mesa%20Letra.mp3?v=1626773179237',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.29.28%20(1).jpeg?v=1626774411716'
},

{
    title: 'Mi vida eres tu',
    artist: 'Sonyk "El dragon"',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Sonyk%20el%20Drag%C3%B3n%20%20Mi%20Vida%20Eres%20T%C3%BA.mp3?v=1626774545452',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.22.04%20(1).jpeg?v=1626774682256'
},

{
    title: 'All of me',
    artist: 'John Legend',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20All%20of%20Me%20%20John%20Legend%20Lyrics.mp3?v=1626806601370',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.22.04%20(2)%20(1).jpeg?v=1626806705358'
},

{
    title: 'Trouble',
    artist: 'Coldplay',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Coldplay%20%20Trouble%20%20Sub%20Espa%C3%B1ol.mp3?v=1626811428581',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.22.04%20(3)%20(1).jpeg?v=1626859955228'
},

{
    title: 'Dont give up on me',
    artist: 'Andy Grammer',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Andy%20Grammer%20%20Dont%20Give%20Up%20On%20Me%20Lyrics.mp3?v=1626860389340',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.23.04%20(1).jpeg?v=1626862355575'
},

{
    title: 'Me cambiaste la vida',
    artist: 'Rio Roma',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Tu%20Me%20Cambiaste%20La%20Vida%20%20Rio%20Roma%20Musica%20Con%20Letra.mp3?v=1626860465915',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-21%20at%2002.44.16%20(1).jpeg?v=1626862120671'
},

{
    title: 'Lifetime',
    artist: 'Justin Bieber',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Justin%20Bieber%20%20Lifetime%20%20Espa%C3%B1ol.mp3?v=1626860580946',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.22.04%20(4)%20(1).jpeg?v=1626862288658'
},

{
    title: 'Cant take my eyes off you',
    artist: 'Shawn Mendes',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Shawn%20Mendes%20%20Cant%20take%20my%20eyes%20off%20you%20Cover%20%20Traducida%20al%20espa%C3%B1ol%20%20lyrics.mp3?v=1626863926866',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-22%20at%2002.43.41%20(1).jpeg?v=1626947061025'
},

{
    title: 'Amable',
    artist: 'Marco Mares',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20%F0%9D%98%BC%F0%9D%99%A2%F0%9D%99%96%F0%9D%99%97%F0%9D%99%A1%F0%9D%99%9A%20%20Marco%20Mares%20%20Letra.mp3?v=1626864534629',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.23.04%20(2)%20(1).jpeg?v=1626947140780'
},

{
    title: 'Eres tu',
    artist: 'Matias',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Matias%20%20Eres%20t%C3%BA%20Lyric%20Video%20Prod%20Trapzongo.mp3?v=1626946261521',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.23.05%20(1).jpeg?v=1626946927238'
},

{
    title: 'Just the way you are',
    artist: 'Bruno Mars',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Just%20The%20Way%20You%20Are%20%20Bruno%20Mars%20Lyrics.mp3?v=1626946352529',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-20%20at%2002.23.04%20(3)%20(1).jpeg?v=1626947300927'
},

{
    title: 'Tu',
    artist: 'Shakira',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Shakira%20%20T%C3%BA.mp3?v=1626946532300',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-22%20at%2002.55.52%20(1).jpeg?v=1626947830865'
},

{
    title: 'La loteria',
    artist: 'Lasso',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20La%20Loter%C3%ADa%20%20Lasso%20%20Letra%20.mp3?v=1626946701756',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-22%20at%2002.57.36%20(1).jpeg?v=1626947934841'
},

{
    title: 'Ojos color sol',
    artist: 'Calle 13',
    url: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2Fy2mate.com%20-%20Ojos%20color%20sol%20letra%20%20Calle%2013%20ft%20Silvio%20Rodr%C3%ADguez.mp3?v=1626946763597',
    art: 'https://cdn.glitch.com/175081f6-f3ad-4cc5-8526-e21b8edcce83%2FWhatsApp%20Image%202021-07-22%20at%2003.00.41%20(1).jpeg?v=1626948511357'
}];

window.addEventListener('load', init(), false);

function init() {
    song = songs[current_track];
    audio = new Audio();
    audio.src = song.url;
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
}


audio.addEventListener('timeupdate', updateTrack, false);
audio.addEventListener('loadedmetadata', function () {
    duration = this.duration;
}, false);
window.onmousemove = function (e) {
    e.preventDefault();
    if (holding) seekTrack(e);
}
window.onmouseup = function (e) {
    holding = false;
    console.log(holding);
}
track.onmousedown = function (e) {
    holding = true;
    seekTrack(e);
    console.log(holding);
}
play.onclick = function () {
    playing ? audio.pause() : audio.play();
}
audio.addEventListener("pause", function () {
    play.innerHTML = '<img class="pad" src="http://abarcarodriguez.com/lab/play.png" />';
    playing = false;
}, false);

audio.addEventListener("playing", function () {
    play.innerHTML = '<img src="http://abarcarodriguez.com/lab/pause.png" />';
    playing = true;
}, false);
next.addEventListener("click", nextTrack, false);
prev.addEventListener("click", prevTrack, false);


function updateTrack() {
    curtime = audio.currentTime;
    percent = Math.round((curtime * 100) / duration);
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
}

function seekTrack(e) {
    event = e || window.event;
    var x = e.pageX - player.offsetLeft - track.offsetLeft;
    percent = Math.round((x * 100) / track.offsetWidth);
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
    audio.play();
    audio.currentTime = (percent * duration) / 100
}
function nextTrack() {
    current_track++;
    current_track = current_track % (songs.length);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}

function prevTrack() {
    current_track--;
    current_track = (current_track == -1 ? (songs.length - 1) : current_track);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}

function updateInfo() {
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
    art.onload = function() {
        audio.play();
    }
}