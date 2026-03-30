import { selectAudioSource, prev, toggle, next } from './latr.js';

document.addEventListener('DOMContentLoaded', () => {
    selectAudioSource(0);
});

document.getElementById('prev').addEventListener('click', () => {
    prev(0);
});

document.getElementById('creditsLyricsButton').addEventListener('click', () => {
    toggle(0);
});

document.getElementById('next').addEventListener('click', () => {
    next(0);
});
