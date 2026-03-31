import { selectAudioSource, prev, toggle, next, loadNext } from './latr.js';

document.addEventListener('DOMContentLoaded', () => {
    selectAudioSource(1);
});

document.getElementById('prev').addEventListener('click', () => {
    prev(1);
});

document.getElementById('creditsLyricsButton').addEventListener('click', () => {
    toggle(1);
});

document.getElementById('next').addEventListener('click', () => {
    next(1);
});

document.getElementById('player').addEventListener('ended', () => {
    loadNext(1);
});
