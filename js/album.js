// album is defined in Album1.html or Album2.html or Album3.html
var currentPhoto;
var maxPhoto = album.length - 1;

function gup(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null)
		return "0";
	else
		return results[1];
}

window.onload = function() {
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-20659283-1']);
	_gaq.push(['_trackPageview']);
	(function() {
		var ga = document.createElement('script');
		ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
	})();


	var buttons = document.getElementById("navButtons");
	// first
	buttons.elements[0].onclick = function() {
		currentPhoto = 0;
		populate();
	};
	// previous
	buttons.elements[1].onclick = function() {
		if (currentPhoto > 0) {
			currentPhoto--;
		}
		populate();
	};
	// next
	buttons.elements[2].onclick = function() {
		if (currentPhoto < maxPhoto) {
			currentPhoto++;
		}
		populate();
	};
	// last
	buttons.elements[3].onclick = function() {
		currentPhoto = maxPhoto;
		populate();
	}; 

	var ph = gup('ph');
	currentPhoto = ph;
	if (currentPhoto != parseInt(currentPhoto)) {
		currentPhoto = 0;
		alert("What are you trying to pull? " + ph + " is not a number!");
	} else if (currentPhoto < 0 || currentPhoto > maxPhoto) {
		alert("You can't ask for photo number " + currentPhoto + "!");
		currentPhoto = 0;
	}
	populate();
}


function updateNavButtons() {
	var buttons = document.getElementById("navButtons");
	buttons.elements[0].disabled = (1 >= currentPhoto);
	buttons.elements[1].disabled = (0 == currentPhoto);
	buttons.elements[2].disabled = (maxPhoto == currentPhoto);
	buttons.elements[3].disabled = (maxPhoto - 1 <= currentPhoto);
}

// Used by the Album page to display a single photo with caption
function populate() {
	updateNavButtons();

	var theCaption = document.getElementById('caption');
	theCaption.innerHTML = album[currentPhoto][1];

	var thePhoto = document.getElementById('photo');
	//thePhoto.alt = album[currentPhoto][0];
	thePhoto.src = "photos/" + album[currentPhoto][0];
}
