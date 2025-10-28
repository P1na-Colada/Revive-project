document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmError = document.getElementById('confirmError');
        
        // Reset error messages
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        confirmError.style.display = 'none';
        
        let isValid = true;
        
        // Name validation
        if (fullName.trim().length < 2) {
            nameError.style.display = 'block';
            isValid = false;
        }
        
        // Email validation
        if (!validateEmail(email)) {
            emailError.style.display = 'block';
            isValid = false;
        }
        
        // Password validation
        if (password.length < 8) {
            passwordError.style.display = 'block';
            isValid = false;
        }
        
        // Confirm password validation
        if (password !== confirmPassword) {
            confirmError.style.display = 'block';
            isValid = false;
        }
        
        // Terms agreement validation
        if (!agreeTerms) {
            alert('Please agree to the Terms of Service and Privacy Policy');
            isValid = false;
        }
        
        if (isValid) {
            // In a real application, you would send the data to a server here
            alert('Account created successfully! Welcome to Revive Project!');
            // window.location.href = 'dashboard.html';
        }
    });
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});