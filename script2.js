// Function to toggle between Login and Signup forms
function switchForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    
    if (formType === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    } else if (formType === 'signup') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
    }
}

// Default form is Login
switchForm('login');

// Typewriter Effect
const text = "Empower Your Community";
const speed = 100; // Typing speed in milliseconds
let index = 0;

function typeWriter() {
    const typewriterElement = document.getElementById("typewriter");
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typing effect when the page loads
window.onload = typeWriter;
