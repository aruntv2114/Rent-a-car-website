const menuIcon = document.getElementById('menu-icon');
        const navlist = document.querySelector('.navlist');

        menuIcon.addEventListener('click', () => {
            if (navlist.classList.contains('show')) {
                navlist.classList.remove('show');
                menuIcon.textContent = '☰'; // Menu icon
            } else {
                navlist.classList.add('show');
                menuIcon.textContent = '✖'; // Close icon
            }
        });