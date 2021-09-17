
window.onload = function() {
	setTitle();
	setScore();
}

function setScore() {
	const scoreLabel = document.getElementById("score");

	scoreLabel.innerHTML = getGrade() + "/9";

	//this loop will display the points for each question in a flexbox
	for (var i = 1; i < 10; i++) {
		const grade = sessionStorage.getItem("question" + i);

		document.getElementById(i).innerHTML = grade + "/1";
	}
}

function getGrade() {
	var grade = 0;

	for (var i = 1; i <= 9; i++) {
		var points; 

		points = sessionStorage.getItem("question" + i);
		points = parseFloat(points);

		grade += points;
	}

	return grade;
}

function setTitle() {
	const name = sessionStorage.getItem("name");

	if (name.charAt(name.length - 1).toUpperCase() == "S") {
		document.getElementById("title").innerHTML = name + "' score";
		return;
	}
	
	document.getElementById("title").innerHTML = name + "'s score";
}
