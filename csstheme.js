// csstheme.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to set theme and update UI
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);

        // Update button icons
        const lightModeIcon = document.querySelector('.light-mode');
        const darkModeIcon = document.querySelector('.dark-mode');

        if (lightModeIcon && darkModeIcon) {
            if (theme === 'dark') {
                lightModeIcon.style.display = 'none';
                darkModeIcon.style.display = 'inline';
            } else {
                lightModeIcon.style.display = 'inline';
                darkModeIcon.style.display = 'none';
            }
        }

        // Update datepicker if it exists
        if ($.datepicker) {
            $('.ui-datepicker').attr('data-theme', theme);
        }
    };

    // Check URL parameters for theme
    const checkURLTheme = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('theme');
    };

    // Initialize theme
    const initTheme = () => {
        const urlTheme = checkURLTheme();
        if (urlTheme === 'dark' || urlTheme === 'light') {
            setTheme(urlTheme);
        } else {
            setTheme('light'); // default theme
        }
    };

    // Toggle theme handler
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('theme', newTheme);
        window.history.pushState({}, '', url);

        setTheme(newTheme);
    };

    // Add click event listener to theme toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', initTheme);

    // Initialize theme on page load
    initTheme();

    // Initialize datepicker with theme support
    $("#datepicker").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        beforeShow: function (input, inst) {
            const theme = document.documentElement.getAttribute('data-theme');
            inst.dpDiv.attr('data-theme', theme);
        }
    });
});
