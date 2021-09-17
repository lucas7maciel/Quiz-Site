
function setGrade(correctAnswers) {
	const ptsPerAnswer = 1 / correctAnswers.length;
	const userAnswers = getCheckBoxes();

	var grade = 1;
	var index = 0;

	for (userAnswer of userAnswers) {
		if (userAnswer != correctAnswers[index]) {
			grade -= ptsPerAnswer;
		}

		index++;
	}

	grade = grade.toFixed(1);

	sessionStorage.setItem("question" + getQuestion(), grade);
	change(true);
}

function getCheckBoxes() {
	const checkBoxes = document.querySelectorAll("input[type='checkbox']");
	const checkBoxesList = [];

	for(const checkbox of checkBoxes) {
		checkBoxesList.push(checkbox.checked);
	}

	return checkBoxesList;
}

function getCorrectAnswr() {
	const correctAnswers =
	[true, false, false, false, true,
	true, false, true, false, false,
	true, true, true, false, true,
	false, false, false, false, true];

	return correctAnswers;
}