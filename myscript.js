const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	const username = document.querySelector('input[name="username"]');
	const password = document.querySelector('input[name="password"]');

	if (username.value.trim() !== "" && password.value.trim() !== "") {
		
		alert("You have successfully logged in to Facebook!");
	} else {
		
		alert("Please enter your username and password.");
	}
});