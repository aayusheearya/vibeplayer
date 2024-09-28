const albums = [
    {
        title: "Kabhi Kabhi Mere Dil Mein",
        artist: "Lata Mangeshkar and Mukesh",
        cover: "images/pic23.jpg",
        path: "music/kabhi.mp3"
    },
    {
        title: "Bade Achhe Lagte Hain",
        artist: "Amit Kumar",
        cover: "images/pic31.jpg",
        path: "music/badeache.mp3"
    },
    {
        title: "Give Me Some Sunshine",
        artist: "Sharman Joshi and Suraj Jagan",
        cover: "images/pic20.jpg",
        path: "music/sunshine.mp3"
    },
    {
        title: "Sahiba",
        artist: "Pawni A Pandey and Romy",
        cover: "images/pic18.jpg",
        path: "music/sahiba.mp3"
    },
    {
        title: "O Haseena Zulfon Wali",
        artist: "Asha Bhosle",
        cover: "images/pic32.jpg",
        path: "music/haseena.mp3"
    },
    {
        title: "Main Aisa Kyon Hoon",
        artist: "Shaan and Shankar–Ehsaan–Loy",
        cover: "images/pic30.jpg",
        path: "music/maiaisa.mp3"
    },
    {
        title: "Meri Bheegi Bheegi Si",
        artist: "Kishore Kumar",
        cover: "images/pic17.jpg",
        path: "music/meribheegi.mp3"
    },
    {
        title: "Saude Bazi",
        artist: "Anupam Amod and Javed Ali",
        cover: "images/pic1.jpg",
        path: "music/saudebaazi.mp3"
    },
    {
        title: "O Oh Jaane Jaana",
        artist: "Kamaal Khan",
        cover: "images/pic2.jpg",
        path: "music/janejana.mp3"
    },
    {
        title: "Senorita",
        artist: "Camila Cabello and Shawn Mendes",
        cover: "images/pic3.jpg",
        path: "music/senorita.mp3"
    },
    {
        title: "Rehna Tu",
        artist: "A. R. Rahman, Benny Dayal and Tanvi Shah",
        cover: "images/pic4.jpg",
        path: "music/rehnatu.mp3"
    },
    {
        title: "Chaudhary",
        artist: "Mame Khan",
        cover: "images/pic10.jpg",
        path: "music/chaudhary.mp3"
    },
    {
        title: "Night Changes",
        artist: "One Direction",
        cover: "images/pic9.jpg",
        path: "music/nightchanges.mp3"
    },
    {
        title: "Amplifier",
        artist: "Imran Khan",
        cover: "images/pic6.jpg",
        path: "music/amplifier.mp3"
    },
    {
        title: "Pehli Nazar Mein",
        artist: "Atif Aslam",
        cover: "images/pic11.jpg",
        path: "music/phelinazar.mp3"
    },
    {
        title: "Jab Se Tere Naina",
        artist: "Shaan",
        cover: "images/pic14.jpg",
        path: "music/jabseterenaina.mp3"
    },
    {
        title: "Anarkali Disco Chali",
        artist: "Mamta Sharma and Sukhwinder Singh",
        cover: "images/pic21.jpg",
        path: "music/anarkali.mp3"
    },
    {
        title: "Ajab si",
        artist: "KK",
        cover: "images/pic22.jpg",
        path: "music/ajabsi.mp3"
    },
    {
        title: "Badtameez Dili",
        artist: "Benny Dayal and Shefali Alvares",
        cover: "images/pic15.jpg",
        path: "music/bateemzdil.mp3"
    },
    {
        title: "Dil Diyan Gallan",
        artist: "Atif Aslam",
        cover: "images/pic19.jpg",
        path: "music/dildiyagallan.mp3"
    },
    {
        title: "One Love",
        artist: "Shubh",
        cover: "images/pic27.jpg",
        path: "music/onelove.mp3"
    },
    {
        title: "Ek Din Aap",
        artist: "Alka Yagnik and Kumar Sanu",
        cover: "images/pic28.jpg",
        path: "music/ekdin.mp3"
    },
    {
        title: "Bewafa",
        artist: "Imran Khan",
        cover: "images/pic34.jpg",
        path: "music/bewafa.mp3"
    },
    {
        title: "Chaar Botal Vodka",
        artist: "Yo Yo Honey Singh",
        cover: "images/pic5.jpg",
        path: "music/chaarbottle.mp3"
    },
    // ... other albums
];

let currentTrackIndex = 0;
let audio = new Audio(albums[currentTrackIndex].path);

// Load albums into the album list
function loadAlbums() {
    const albumList = document.getElementById('album-list');
    albums.forEach((album, index) => {
        const albumItem = document.createElement('div');
        albumItem.classList.add('album');
        albumItem.innerHTML = `
            <img src="${album.cover}" alt="${album.title}" class="album-cover">
            <div class="play-icon">▶️</div>
            <h3 class="album-title">${album.title}</h3>
            <p class="album-artist">${album.artist}</p>
        `;
        
        // Add click event to the entire album item
        albumItem.addEventListener('click', () => selectTrack(index));

        albumList.appendChild(albumItem);
    });
}

// Load the current track
function loadTrack(index) {
    audio.src = albums[index].path;
    audio.currentTime = 0; // Reset to start when loading a new track
    document.querySelector('.cover').src = albums[index].cover;
    document.querySelector('.song-title').textContent = albums[index].title;
    document.querySelector('.artist-name').textContent = albums[index].artist;
    document.getElementById('seekbar').value = 0; // Reset seekbar to 0
}

// Select track from album
function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
    playTrack();
    highlightActiveAlbum(index); // Highlight the selected album cover
}

// Highlight the active album
function highlightActiveAlbum(selectedIndex) {
    document.querySelectorAll('.album').forEach((item, idx) => {
        item.classList.toggle('active', idx === selectedIndex); // Toggle active class
    });
}

// Play track
function playTrack() {
    audio.play();
    document.getElementById('play').style.display = 'none';
    document.getElementById('pause').style.display = 'block';
}

// Pause track
function pauseTrack() {
    audio.pause();
    document.getElementById('pause').style.display = 'none';
    document.getElementById('play').style.display = 'block';
}

// Previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : albums.length - 1;
    loadTrack(currentTrackIndex);
    playTrack();
}

// Next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex < albums.length - 1) ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
    playTrack();
}

// Update seekbar as the song plays
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        document.getElementById('seekbar').value = (audio.currentTime / audio.duration) * 100;
    }
});

// Seek track when the seekbar is changed
document.getElementById('seekbar').addEventListener('input', (event) => {
    audio.currentTime = (event.target.value / 100) * audio.duration;
});

// Update volume
document.getElementById('volume').addEventListener('input', (event) => {
    audio.volume = event.target.value / 100;
});

// Event listeners for buttons
document.getElementById('play').addEventListener('click', playTrack);
document.getElementById('pause').addEventListener('click', pauseTrack);
document.getElementById('prev').addEventListener('click', prevTrack);
document.getElementById('next').addEventListener('click', nextTrack);

// Load the first track on page load and albums
loadTrack(currentTrackIndex);
loadAlbums();

// Automatically load next track when the current one ends
audio.addEventListener('ended', nextTrack);
