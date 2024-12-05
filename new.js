const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const id = document.getElementById('id').value;
	const password = document.getElementById('password').value;
	
	// TO DO: Add authentication logic here
	// For now, just alert the entered credentials
	alert(`ID: ${id}, Password: ${password}`);
});