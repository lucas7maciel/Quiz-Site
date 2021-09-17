
var index = 1;

function changeFlag() {
	index = document.getElementById("flag").src;
	
	index = index.replace(/^.*[\\\/]/, ''); 			//removes the path from the filename
	index = index.charAt(4);							//gets which flag is being used
	index = parseInt(index);

	if (index == 3) {
		index = 0;
	}

	index++;

	document.getElementById("flag").src
	= "../media/q4_0" + index + ".png";
}

function getFlag() {
	const dict = {
		1 : "Portugal",
		2 : "Colombia",
		3 : "South Africa"
	};

	return dict[index];
} 
