// Insert Number
function insert(num) {
	document.form.textarea.value = document.form.textarea.value + num;
}

// Calculation
function equal() {
	var result = document.form.textarea.value;
	document.form.textarea.value = eval(result);
}

// AC Button
function clean() {
	document.form.textarea.value = "";
}

// Del Button
function back() {
	var result = document.form.textarea.value;
	document.form.textarea.value = result.substring(0, result.length -1);
}
