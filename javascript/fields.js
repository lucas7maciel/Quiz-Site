
function setGrade(correctAnswers) {
	const ptsPerAnswer = 1 / correctAnswers.length;
	const userAnswers = getFields();

	var grade = 1;
	var index = 0;

	//this loop checks if the answers to each question match
	for (userAnswer of userAnswers) {
		if (userAnswer != correctAnswers[index]) {
			grade -= ptsPerAnswer;
		}

		index++;
	}

	sessionStorage.setItem("question" + getQuestion(), grade);
	change(true);
}

function getFields() {
	const fields = document.querySelectorAll("input[name='field']");
	const answerList = [];

	for(field of fields) {
		const answer = field.value;
		
		answerList.push(answer);
	}

	return answerList;
}
