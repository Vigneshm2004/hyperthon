const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const doctorId = document.getElementById('doctor-id').value;
	
	// TO DO: Add authentication logic here
	// For now, just alert the entered doctor ID
	alert(`Doctor ID: ${doctorId}`);
});