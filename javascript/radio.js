
function setGrade(correctAnswer) {
	const userAnswer = getRadio();

	var grade = 1;

	if (userAnswer == null) {
		return;
	}

	else if (userAnswer != correctAnswer) {
		grade = 0;
	}

	sessionStorage.setItem("question" + getQuestion(), grade);
	change(true);
}

function getRadio() {
	const results = document.querySelectorAll("input[type='radio']");
	var result;

	for (const radio of results) {
		if (radio.checked) {
			result = radio.value;
		}
	}

	if (typeof result === "undefined") {
		document.getElementById("messages").innerHTML = "Please choose an option";
		return;
	}

	return result;
}
