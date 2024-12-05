const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const patientId = document.getElementById('patient-id').value;
	const password = document.getElementById('password').value;
	
	// TO DO: Add logic to validate patient ID and password
	// For now, just alert the entered login credentials
	alert(`Patient ID: ${patientId}\nPassword: ${password}`);
});