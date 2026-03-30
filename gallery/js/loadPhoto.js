import { photos } from './photos.js';

let currentPhoto = 0;

/**
 * Get the safe photo index number from the photo.html query parameter. If garbage input, set to end of photos array.
 * @returns {number} containing the photo index value if present, or a reasonable default value.
 */
function getPhIndex() {
    const phString = new URLSearchParams(window.location.search).get('ph');
    const phIndex = parseInt(phString, 10);
    if (isNaN(phIndex)) {
        return 0;
    } else if (phIndex < 0) {
        return 0;
    } else if (phIndex >= photos.length) {
        return photos.length - 1;
    }
    return phIndex;
}

document.addEventListener('DOMContentLoaded', initPhoto);

/**
 * Called once photo.html DOM is loaded
 */
function initPhoto() {
    const buttons = document.getElementById("navButtons");
    // first
    buttons.elements[0].onclick = function () {
        currentPhoto = 0;
        populate();
    };
    // previous
    buttons.elements[1].onclick = function () {
        if (currentPhoto > 0) {
            currentPhoto--;
        }
        populate();
    };
    // next
    buttons.elements[2].onclick = function () {
        if (currentPhoto < photos.length - 1) {
            currentPhoto++;
        }
        populate();
    };
    // last
    buttons.elements[3].onclick = function () {
        currentPhoto = photos.length - 1;
        populate();
    };

    currentPhoto = getPhIndex();

    populate();
}

// Called upon initPhoto and subsequently by navigation button click to load a single photo with caption
function populate() {
    const buttons = document.getElementById("navButtons");
    buttons.elements[0].disabled = (1 >= currentPhoto);
    buttons.elements[1].disabled = (0 == currentPhoto);
    buttons.elements[2].disabled = (photos.length - 1 == currentPhoto);
    buttons.elements[3].disabled = (photos.length - 2 <= currentPhoto);

    const photo = photos[currentPhoto];
    const caption = document.getElementById('caption');
    caption.innerHTML = photo.description;
    const photoImg = document.getElementById('photoImg');
    photoImg.src = photo.getSrc();
    photoImg.alt = photo.filename;
}
