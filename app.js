        // --- 1. Dark Mode Logic ---
        const themeButton = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const body = document.body;

        themeButton.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                themeIcon.src = '1.png';
                themeIcon.alt = 'Sun Icon';
            } else {
                themeIcon.src = '2.png';
                themeIcon.alt = 'Moon Icon';
            }
        });

        // --- 2. Password Hide/Show Logic ---
        const passwordInput = document.getElementById('password');
        const togglePwdButton = document.getElementById('toggle-password');

        togglePwdButton.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePwdButton.innerHTML = '🙈 Hide';
            } else {
                passwordInput.type = 'password';
                togglePwdButton.innerHTML = '🙉 Show';
            }
        });