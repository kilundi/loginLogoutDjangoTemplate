console.log('Running hey');

const themeToggleDarkIcon = document.getElementById('dark-Mode');
themeToggleDarkIcon.addEventListener('click', () => {
    // Check if dark mode is already active
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Toggle dark mode
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses to respect the OS preference
themeToggleDarkIcon.addEventListener('click', () => {
    localStorage.removeItem('theme');

    // Check and set theme based on OS preference
    if (!('theme' in localStorage)) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }
});
