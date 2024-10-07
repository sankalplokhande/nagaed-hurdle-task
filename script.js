document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    // Basic email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display success message
    document.getElementById('successMessage').style.display = 'block';

    // Log the data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form
    document.getElementById('contactForm').reset();
});
