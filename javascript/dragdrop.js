
window.onload = function() {
	setDragNDrop();
}

function setDragNDrop() {
	var draggedFieldClass, targetFieldClass, dropped;

	//".fill" objects are the div that contains the images to be dragged, while ".field" are their containers
	const fill = document.querySelectorAll(".fill");
	const field = document.querySelectorAll(".field");

	for(const ele of fill) {
		ele.addEventListener("dragstart", dragStart);
		ele.addEventListener("dragend", dragEnd);
	}

	for(const ele of field) {
		ele.addEventListener("dragover", dragOver);
		ele.addEventListener("dragenter", dragEnter);
		ele.addEventListener("dragleave", dragLeave);
		ele.addEventListener("drop", dropDrag);
	}

	//".fill" class functions
	function dragStart() {
		this.className += " holding";
  		setTimeout(() => (this.className = "fill invisible"), 0);

  		draggedFieldClass = this.className;
  		draggedFieldClass = draggedFieldClass.replace(" holding", "");

  		dropped = false;						//"dropped" represents whether the ".fill" object has been dropped into the area of a ".field"
	}

	function dragEnd() {
		if (dropped) {
			this.className = targetFieldClass;
			return;
		}

		this.className = draggedFieldClass;
	}

	//".field" class functions
	function dragOver(e) {
		e.preventDefault();
	}

	function dragEnter(e) {
		e.preventDefault();

		this.className += " hovered";
	}

	function dragLeave() {
		removeClass(this, "hovered");
	}

	function dropDrag() {
		//this function will position the dragged ".fill" in the target ".field", and the opposite will also happen in "dragEnd()"
		const targetField = this.getElementsByClassName("fill")[0];

		targetFieldClass = targetField.className;
		removeClass(this, "hovered");

		if (targetFieldClass != "fill invisible") {
			targetField.className = draggedFieldClass;
			dropped = true;
		}
	}
}

function removeClass(div, classToRemove) {
	var newClass;

	newClass = div.className;
	newClass = newClass.replace(" " + classToRemove, "");

	div.className = newClass;
}

function setGrade() {
	const userOrder = getPositions();

	var grade = 1;
	var index = 1;

	for (piece of userOrder) {
		if (piece != "img" + index) {
			grade = 0;
			break;
		}

		index++;
	}

	sessionStorage.setItem("question" + getQuestion(), grade);
	change(true);
}

function getPositions() {
	const fieldList = [];
	const fields = document.querySelectorAll(".fill");

	for(field of fields) {
		const piece = field.className.split(" ");

		fieldList.push(piece[1]);
	}

	return fieldList;
}
