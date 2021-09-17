
window.onload = function(){
	buildHeader();
}

function buildHeader() {
	const header = document.querySelector(".header");

	header.insertAdjacentHTML("beforeend",
		"<nobr>Quiz Game</nobr>" +
		"<a class='headerlinks' href='https://github.com/lucas7maciel'>Github</a>");
}

function change(next) {
	var page = getQuestion();

	//exceptions
	if (page == 1 && !next) {
		location.href = "../index.html";
		return;
	}

	else if (page == 9 && next) {
		location.href = "score.html";
		return;
	}

	else if (page == "score") {
		location.href = "../index.html"
		return;
	}
	//

	if (next) {
		page++;
	}

	else {
		page--;	
	}

	location.href = "question_" + page + ".html";
}

function getQuestion() {
	var page;

	page = window.location.pathname;
	page = page.split("/").pop();
	page = page.substring(
		page.lastIndexOf("_") + 1,
		page.lastIndexOf(".")
	);

	if (page.length != 1) {
		return page;
	}

	return parseInt(page);
}

function start() {
	const user = document.getElementById("userfield").value;

	sessionStorage.setItem("name", user);

	location.href = 'pages/question_1.html'
}

function setMessage() {
	const user = sessionStorage.getItem("name");

	document.getElementById("messages").innerHTML
	= "Be welcome, " + user + "!";
}
