
var clicks = 0;

function addClick() {
	clicks++;
	document.getElementById("clickCounter").innerHTML = clicks;
}

function setCounter() {
	clicks = 0;

	var counter = 11;

	const date = new Date().getTime();
	const clicker = document.getElementById("clicker");
	const button = document.getElementById("counterButton");

	clicker.disabled = false;
	button.disabled = true;

	document.getElementById("clickCounter").innerHTML = clicks;
	document.getElementById("messages").innerHTML =
	"The submitted score will always be the last";

	//function responsible for setting the counter
	const func = setInterval(function() {
		counter -= 1;
		document.getElementById("timeCounter").innerHTML = counter;

		if (counter < 1) {
			clearInterval(func);

			clicker.disabled = true;
			button.disabled = false;
		}
	}, 1000);
}

function setGrade(minimalClicks) {
	var grade = 1;

	if (clicks < minimalClicks) {
		grade = 0;
	}

	sessionStorage.setItem("question" + getQuestion(), grade);
	change(true);
}
