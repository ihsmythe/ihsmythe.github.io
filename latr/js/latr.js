// Pop out of frame if possible
if (top.frames.length != 0) {
    top.location = self.document.location;
}

class Piece {
    constructor(filename, title) {
        this.mp3 = `mp3/${filename}.mp3`;
        this.ogg = `ogg/${filename}.ogg`;
        this.title = title;
    }
}

const defaultPiece = 16;
const pieces = [
    new Piece("Who's Who", "Who's Who (Vol. 1)"),
    new Piece("NotMuchToAsk", "Not Much to Ask (Vol. 1)"),
    new Piece("Ophelia", "Ophelia (Vol. 1)"),
    new Piece("Falling Out", "Falling Out (Vol. 1)"),
    new Piece("Ariadne's Thread", "Ariadne's Thread (Vol. 1)"),
    new Piece("Ariel's Song", "Ariel's Song (Vol. 1)"),
    new Piece("Culture", "Culture (Vol. 1)"),
    new Piece("Lost Lyric", "Lost Lyric (Vol. 1)"),
    new Piece("Education", "Education (Vol. 1)"),
    new Piece("Inside Story", "Inside Story (Vol. 1)"),
    new Piece("Life Happened", "Life Happened (Vol. 1)"),
    new Piece("The Poet At Sixty", "The Poet At Sixty (Vol. 1)"),
    new Piece("The Future", "The Future (Vol. 1)"),
    new Piece("If It Were Not So", "If It Were Not So (Vol. 1)"),
    new Piece("Ephemera", "Ephemera (Vol. 1)"),
    new Piece("More Monsters", "More Monsters (Vol. 1)"),
    new Piece("Summer Day In The Tuileries", "Summer Day In The Tuileries (Vol. 1)"),
    new Piece("Exile", "Exile (Vol. 1)"),
    new Piece("Valediction", "Valediction (Vol. 1)"),
    new Piece("Saved - Healing", "Saved - Healing (Vol. 1)"),
    new Piece("Church Service", "Church Service (Vol. 2)"),
    new Piece("Advice to Other Writers", "Advice to Other Writers (Vol. 2)")
];

// Stop, replace audio source, and start the audio player
function loadAudioSource(piece) {
    mp3 = document.getElementById("audioMP3");
    ogg = document.getElementById("audioOGG");
    // Load new sources
    mp3.src = piece.mp3;
    ogg.src = piece.ogg;
    player = document.getElementById("player");
    player.pause(); // Stop playing
    player.currentTime = 0; // Set to start
    player.load(); // Load new sources
    // Do not autoplay: player.play(); // Start playing
}

// Update the audio source from a query parameter, or set a default value
function selectAudioSource() {
    // If latr is not yet populated, populate it with pieces
    const latrSelect = document.getElementById("latr");
    for (let i = 0; i < pieces.length; i++) {
        // Can't do pieces.map((piece) => { because we need the index item as the value in the option element
        const opt = document.createElement('option');
        opt.appendChild(document.createTextNode(pieces[i].title));
        opt.value = i;
        latrSelect.appendChild(opt);
    };

    const selectedLatr = new URLSearchParams(window.location.search).get('latr');
    let selectedIndex = parseInt(selectedLatr);
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= pieces.length) {
        selectedIndex = defaultPiece;
    }
    latrSelect.value = selectedIndex;
    loadAudioSource(pieces[selectedIndex]);
}
