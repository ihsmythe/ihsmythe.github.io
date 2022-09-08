// Global site tag (gtag.js) - Google Analytics
let gaId = 'G-VC0MJ8YYXZ';
let script = document.createElement('script');
script.onload = function() {
    // This occurs asynchronously once the gtag script is loaded
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gaId);
};
script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
document.head.appendChild(script);

// Called from almost every page to create header bar
function topInit() {
    init('');
}

// Called from pages one level deeper than top level
function innerInit(cc) {
    init('../', cc);
}

// Called from pages two levels deeper than top level
function inner2Init() {
    init('../../');
}

function init(prefix, cc) {
    const headerDiv = document.getElementById('header');

    // Add the document title and shared dropdown menu elements
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.innerHTML = document.title;
    headerDiv.appendChild(title);

    const navUL = document.createElement('ul');
    navUL.setAttribute('id', 'nav');
    headerDiv.appendChild(navUL);

    // Home
    navUL.appendChild(getMenuItem(prefix, 'index.html', 'Home'));

    // Gallery
    navUL.appendChild(getMenuItem(prefix, 'gallery/index.html', 'Gallery'));

    // Music
    navUL.appendChild(getMenuItem(prefix, 'latr/index.html', 'Music'));

    // Videos
    navUL.appendChild(getMenuItem(prefix, 'videos.html', 'Videos'));

    // Writing
    const writingLI = getMenuItem(prefix, 'index.html', 'Writing');
    navUL.appendChild(writingLI);
    const writingUL = document.createElement('ul');
    writingLI.appendChild(writingUL);
    writingUL.appendChild(getMenuItem(prefix, 'dwynwen/index.html', 'Dwynwen\'s Feast'));
    writingUL.appendChild(getMenuItem(prefix, 'poetry/index.html', 'Poetry For Animals'));
    writingUL.appendChild(getMenuItem(prefix, 'stories/index.html', 'Stories For Animals'));
    writingUL.appendChild(getMenuItem(prefix, 'mota/index.html', 'Myth of an Afterlife'));
    writingUL.appendChild(getMenuItem(prefix, 'plays/index.html', 'Plays'));
    writingUL.appendChild(getMenuItem(prefix, 'shorts/index.html', 'Short works'));

    const footerDiv = document.getElementById('footer');
    footerDiv.innerHTML = `<br><br>&copy; ${new Date().getFullYear()} ${cc || 'Ingrid Hansen Smythe'}<br>Pages designed and administered by<br><a href="http://hansensmythe.github.io">Steve Hansen Smythe</a>`;
}

function getMenuItem(prefix, target, text) {
    const href = window.location.href;

    // Create and append a new list item to the list
    // Although it'd be simple to create a raw text node and apply it directly to the list item,
    // such text nodes cannot be padded etc. Better to create a paragraph, which can be.
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = prefix + target;
    a.innerHTML = text;
    li.appendChild(a);
    return li;
}