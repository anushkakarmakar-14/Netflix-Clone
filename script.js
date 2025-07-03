document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const question = item.querySelector('.accordion-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('i');
                    otherIcon.classList.remove('fa-times');
                    otherIcon.classList.add('fa-plus');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const icon = question.querySelector('i');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-times');
        });
    });
    
    // Language selector functionality
    const languageSelectors = document.querySelectorAll('.language-selector select');
    
    languageSelectors.forEach(selector => {
        selector.addEventListener('change', function() {
            // In a real implementation, this would change the site language
            console.log('Language changed to:', this.value);
        });
    });
    
    // Email signup validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(this.value)) {
                this.style.borderColor = '#0071eb';
            } else {
                this.style.borderColor = '#8c8c8c';
            }
        });
    });
    
    // Sign in button functionality
   document.getElementById('signInBtn').addEventListener('click', function() {
        window.location.href = "sign.html";
    });
    
    // Get Started buttons functionality
    const getStartedButtons = document.querySelectorAll('.btn-getstarted');
    
    getStartedButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const emailInput = this.parentElement.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim() === '') {
                e.preventDefault();
                emailInput.style.borderColor = '#e50914';
                emailInput.focus();
            } else {
                alert('Thank you for signing up! This would redirect to the registration page.');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});