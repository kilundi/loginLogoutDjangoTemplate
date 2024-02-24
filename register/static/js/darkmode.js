console.log('Running hey');

// document.addEventListener('DOMContentLoaded', () => {
//     // Check user's preferred theme from local storage
//     const userPreferredTheme = localStorage.getItem('theme');

//     // Apply the theme on page load
//     if (userPreferredTheme === 'dark' || (!userPreferredTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//         document.documentElement.classList.add('dark');
//         // themeToggleDarkIcon.innerHTML = 'light';
//     } else {
//         document.documentElement.classList.remove('dark');
//         // themeToggleDarkIcon.innerHTML = 'dark';
//     }
// });

const themeToggleDarkIcon1 = document.getElementById('login-div');
const themeToggleDarkIcon = document.getElementById('dark-Mode');
themeToggleDarkIcon.addEventListener('click', () => {
    // Check if dark mode is already active
    const isDarkMode = document.documentElement.classList.contains('dark');


    // Toggle dark mode
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        // themeToggleDarkIcon.innerHTML = 'dark';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        // themeToggleDarkIcon.innerHTML = 'light'
        localStorage.setItem('theme', 'dark');
    }
});
