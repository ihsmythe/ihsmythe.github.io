// Pop out of frame if possible
if (top.frames.length != 0) {
    top.location = self.document.location;
}

// Stop, replace audio source, and start the audio player
function loadAudioSource(title) {
    mp3 = document.getElementById("audioMP3");
    ogg = document.getElementById("audioOGG");
    // Load new sources
    mp3.src = "mp3/" + title + ".mp3";
    ogg.src = "ogg/" + title + ".ogg";
    player = document.getElementById("player");
    player.pause(); // Stop playing
    player.currentTime = 0; // Set to start
    player.load(); // Load new sources
    player.play(); // Start playing
}

// Update the audio source if a different title is selected
function updateAudioSource() {
    loadAudioSource(document.getElementById("latr").value);
}

// Update the audio source from a query parameter, or set a default value
function selectAudioSource() {
    // Set default title if no title provided in 'title' query parameter
    const selectedTitle = new URLSearchParams(window.location.search).get('title') || 'Ophelia';
    document.getElementById("latr").value = selectedTitle;
    loadAudioSource(selectedTitle);
}

// Write a link to load this piece to the user's clipboard
function copyLink() {
    // Get current location minus the search params
    const link = `${window.location.origin}${window.location.pathname}?title=${document.getElementById("latr").value}`;
    navigator.clipboard.writeText(link);
}
