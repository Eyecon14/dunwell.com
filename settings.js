// settings.js

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // You may also need to toggle other elements on the page depending on your design
}

// Check user's preference from local storage
if (localStorage.getItem('darkMode') === 'enabled') {
    toggleDarkMode();
}

function toggleLightMode() {
    const body = document.body;
    body.classList.remove('dark-mode');
}

// Add more settings as needed
// ...

// Function to save user preference
function saveUserPreference(key, value) {
    localStorage.setItem(key, value);
}
