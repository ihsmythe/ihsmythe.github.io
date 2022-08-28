// Pop out of frame if possible
if (top.frames.length != 0) {
    top.location = self.document.location;
}

// Stop, replace audio source, and start the audio player
function updateAudioSource() {
    title = document.getElementById("selector").value;
    mp3 = document.getElementById("audioMP3");
    ogg = document.getElementById("audioOGG");
    wav = document.getElementById("audioWAV");
    // Load new sources
    mp3.src = "mp3/" + title + ".mp3";
    ogg.src = "ogg/" + title + ".ogg";
    wav.src = "wav/" + title + ".wav";
    player = document.getElementById("player");
    player.pause(); // Stop playing
    player.currentTime = 0; // Set to start
    player.load(); // Load new sources
    player.play(); // Start playing
}
