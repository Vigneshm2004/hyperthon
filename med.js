// Get the login form and its elements
const loginForm = document.getElementById('login-form');
const superAdminIdInput = document.getElementById('super-admin-id');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

// Add an event listener to the login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Get the values of the input fields
    const superAdminId = superAdminIdInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate the input fields
    if (superAdminId === '' || password === '') {
        alert('Please fill in both fields');
        return;
    }

    // Check if the credentials are correct
    if (superAdminId === 'admin' && password === 'password') {
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert('Your ID and password are secured');
    }
});