const container = document.querySelector('.tracklist-component')
const trackList = [
    {
        artist: 'Miley Cyrus',
        track: 'Flowers',
        album: 'Flowers',
        duration: '3:20',
        coverImage: '/tracks/flowers.png'
    },
    {
        artist: 'Sza',
        track: 'Kill Bill',
        album: 'Sos',
        duration: '2:32',
        coverImage: '/tracks/sos.png'
    },
    {
        artist: 'Steve Lacy',
        track: 'Bad Habit',
        album: 'Gemini Rights',
        duration: '3:52',
        coverImage: '/tracks/gemini-rights.png'
    },
    // {
    //     artist: 'Mark Menday, Seb Mount',
    //     track: 'Talk To Me',
    //     album: 'Talk To Me',
    //     duration: '2:28',
    //     coverImage: '/tracks/talk-to-me.png'
    // },
    // {
    //     artist: 'Olivia Rodrigo',
    //     track: 'Good 4 u',
    //     album: 'Sour',
    //     duration: '2:58',
    //     coverImage: '/tracks/sour.png'
    // },
    // {
    //     artist: 'Lil Nas X',
    //     track: 'INDUSTRY BABY',
    //     album: 'Singiel',
    //     duration: '3:32',
    //     coverImage: '/tracks/singiel.png'
    // },
    // {
    //     artist: 'Harry Styles',
    //     track: 'Watermelon Sugar',
    //     album: 'Fine Line',
    //     duration: '2:54',
    //     coverImage: '/tracks/fine-line.png'
    // },
    // {
    //     artist: 'Isal Daniels',
    //     track: 'Always',
    //     album: 'Fine Line',
    //     duration: '3:33',
    //     coverImage: '/tracks/yours.png'
    // },
]

trackList.forEach((track, index) => {
  const singleTrack = `
    <div class="tracklist-component__single-track">
        <div class="tracklist-component__single-track-order"> ${String(index + 1).padStart(2, '0')}</div>
        <div class="tracklist-component__single-track-details">
            <div class="tracklist-component__single-track-album-cover-wrapper">
                <img src=${track.coverImage} class="tracklist-component__single-track-album-image" alt="album-cover-image" /> 
            </div>
            <div class="tracklist-component__single-track-name-wrapper">
                <div class="tracklist-component__single-track-label">${track.album}</div>
                <div class="tracklist-component__single-track-main-info">${track.track}</div>
            </div>
        </div>
        <div class="tracklist-component__single-track-artist-wrapper">
            <div class="tracklist-component__single-track-label">Artists</div>
            <div class="tracklist-component__single-track-main-info">${track.artist}</div>
            </div>
            <div class="tracklist-component__single-track-duration-wrapper">
                <div class="tracklist-component__single-track-label">Time</div>
                <div class="tracklist-component__single-track-main-info">${track.duration}</div>
            </div>
        <div class="tracklist-component__single-track-options">
            <button class="tracklist-component__single-track-favourite-button">
                <img src="/assets/heart.png" class="tracklist-component__single-track-favourite-icon"
                alt="more-options-button-icon" />
            </button>
            <button class="tracklist-component__single-track-more-options-button">
                <img src="/assets/more.png" class="tracklist-component__single-track-more-options-icon"
                alt="more-options-button-icon" />
            </button>
        </div>
    </div>
  `
  container.innerHTML += singleTrack
})

const allSongs = document.querySelectorAll('.tracklist-component__single-track')

allSongs.forEach(song => song.addEventListener(
    'click',
    () => {
        allSongs.forEach(otherSong => {
            if (otherSong !== song && otherSong.classList.contains('tracklist-component__single-track--active')) {
              otherSong.classList.remove('tracklist-component__single-track--active')
                }
            })

    song.classList.toggle('tracklist-component__single-track--active')
    }
))