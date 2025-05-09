// JavaScript code for interactive web page
// This script adds interactivity to the web page by changing text, styles, and colors dynamically.
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const specialElement = document.getElementById('special-element');
    const colorDisplay = document.getElementById('color-display');
    const rainbowBtn = document.getElementById('rainbow-btn');
    const colorfulParagraph = document.getElementById('colorful-paragraph');
    const currentYear = document.getElementById('current-year');
    
    // Set current year
    currentYear.textContent = new Date().getFullYear();
    
    // Array of text options
    const textOptions = [
        "Welcome to My Space",
        "Charmaine's Creative Corner",
        "Exploring New Possibilities",
        "Interactive Web Magic",
        "Tshiwela's Digital Canvas"
    ];
    
    // Array of color options
    const colorOptions = [
        '#f5f5dc', // beige
        '#fff9e6', // mozzarella white
        '#8b4513', // brown
        '#a67c52', // light brown
        '#5d2e0a'  // dark brown
    ];
    
    // Change text button functionality
    let textIndex = 0;
    changeTextBtn.addEventListener('click', function() {
        textIndex = (textIndex + 1) % textOptions.length;
        dynamicText.textContent = textOptions[textIndex];
        
        // Add animation class
        dynamicText.classList.add('text-change');
        setTimeout(() => {
            dynamicText.classList.remove('text-change');
        }, 500);
    });
    
    // Change style button functionality
    changeStyleBtn.addEventListener('click', function() {
        document.querySelector('.content-box').classList.toggle('dynamic-style');
    });
    
    // Toggle element button functionality
    toggleElementBtn.addEventListener('click', function() {
        specialElement.classList.toggle('hidden');
    });
    
    // Rainbow button functionality
    let rainbowInterval;
    rainbowBtn.addEventListener('click', function() {
        if (rainbowInterval) {
            clearInterval(rainbowInterval);
            rainbowInterval = null;
            rainbowBtn.textContent = 'Rainbow Effect';
            colorDisplay.style.backgroundColor = '';
        } else {
            let colorIndex = 0;
            rainbowInterval = setInterval(() => {
                colorDisplay.style.backgroundColor = getRandomColor();
                colorfulParagraph.style.color = getRandomColor();
                colorIndex = (colorIndex + 1) % colorOptions.length;
            }, 500);
            rainbowBtn.textContent = 'Stop Rainbow';
        }
    });
    
    // Add mouseover effect to logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    logo.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Add click effect to special element
    specialElement.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
    
    // Helper function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Initial color display
    colorDisplay.style.backgroundColor = colorOptions[2];
});