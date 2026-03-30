import { photos } from './photos.js';

document.addEventListener('DOMContentLoaded', loadThumbnails);

/**
 * Called once index.html DOM is loaded
 */
function loadThumbnails() {
    const thumbs = document.getElementById('thumbs');
    photos.forEach((photo) => {
        thumbs.appendChild(photo.getThumbnail());
    });
}
