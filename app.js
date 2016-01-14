var backend = 'http://queue-backend.s3-website-eu-west-1.amazonaws.com/';

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4) {
		document.getElementById('position').innerHTML = xhttp.responseText;
	}
};

var init = function() {
	xhttp.open('GET', backend, true);
	xhttp.send();

	setInterval(function() {
		xhttp.open('GET', backend, true);
		xhttp.send();
	}, 10000);
};
