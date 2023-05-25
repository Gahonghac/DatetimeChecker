const clearButton = document.getElementById("clear");
const checkButton = document.getElementById("check");

clearButton.addEventListener("click", () => {
	document.getElementById("day").value = "";
	document.getElementById("month").value = "";
	document.getElementById("year").value = "";
});

checkButton.addEventListener("click", () => {
	const day = document.getElementById("day").value;
	const month = document.getElementById("month").value;
	const year = document.getElementById("year").value;

	const date = new Date(year, month - 1, day);

	if (date.getMonth() != month - 1) {
		alert("Invalid date!");
	} else {
		alert("Valid date!");
	}
});
