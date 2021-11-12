// Insert Number
function insert(num) {
	document.form.textarea.value = document.form.textarea.value + num;
}

// Calculate
function equal() {
	var result = document.form.textarea.value;
	document.form.textarea.value = eval(result);
}

// Clean
function clean() {
	document.form.textarea.value = "";
}

// Delete
function back() {
	var result = document.form.textarea.value;
	document.form.textarea.value = result.substring(0, result.length -1);
}
