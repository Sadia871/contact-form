document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Reset error and success messages
    document.getElementById('errorMessages').innerHTML = '';
    document.getElementById('successMessage').innerHTML = '';

    // Validate name, email, and message
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        document.getElementById('errorMessages').innerHTML = 'All fields are required.';
        return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('errorMessages').innerHTML = 'Invalid email address.';
        return;
    }

    // If all validations pass, display success message
    document.getElementById('successMessage').innerHTML = 'Form submitted successfully!';
});