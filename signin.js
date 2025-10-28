document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signinForm');
    
    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        
        // Reset error messages
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        
        let isValid = true;
        
        // Email validation
        if (!validateEmail(email)) {
            emailError.style.display = 'block';
            isValid = false;
        }
        
        // Password validation
        if (password.length < 6) {
            passwordError.style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // In a real application, you would send the data to a server here
            alert('Sign in successful! Redirecting to dashboard...');
            // window.location.href = 'dashboard.html';
        }
    });
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});