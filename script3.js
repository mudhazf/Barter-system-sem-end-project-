// Example: Handling Form Submission for Profile Info (or any section)
document.querySelector('#profile form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from reloading the page
    alert('Profile Info Saved!');
});

document.querySelector('#contact form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Contact Info Saved!');
});

document.querySelector('#skills form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Skills Info Saved!');
});
