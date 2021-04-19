export default () => {
    changeDropdownPosOnMobileScreens();
    highlightNavlinks();
    setGapForFeedCardInIE();

    function setGapForFeedCardInIE() {
        isInternetExplorer();

        function isInternetExplorer() {
            return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
        }

        console.log(isInternetExplorer());

        if (isInternetExplorer() === true) {
            const gridCards = document.querySelectorAll('.feed-list__item');

            gridCards.forEach(card => {
                console.log(card);
                gridCards.forEach(card => {
                    card.style.margin = '12px';
                    console.log(card);
                });
            });
        }
    }

    function changeDropdownPosOnMobileScreens() {
        const dropdownContents = document.querySelectorAll('.dropdown__content');

        dropdownContents.forEach(dropdownContent => {
            chengePopsOnMobileScreen();

            window.addEventListener('resize', () => {
                chengePopsOnMobileScreen();
            });

            function chengePopsOnMobileScreen() {
                if (screen.width < 768) {
                    console.log('Экран мобильный');
                    dropdownContent.classList.add('dropdown__content_pos_bottom');
                    dropdownContent.classList.remove('dropdown__content_pos_bottom-right');
                } else {
                    dropdownContent.classList.remove('dropdown__content_pos_bottom');
                    dropdownContent.classList.add('dropdown__content_pos_bottom-right');
                }
            }
        });
    }

    function highlightNavlinks() {
        const nav = document.querySelector('.nav');

        nav.addEventListener('click', handleNavClick);

        function handleNavClick(event) {
            const target = event.target;

            event.preventDefault();

            if (target && target.closest('.nav__link').matches('.nav__link')) {
                setActiveLink(target);
            }
        }

        function setActiveLink(currentLink) {
            const activeLink = currentLink.querySelector('.nav__link_active');

            if (activeLink) {
                activeLink.classList.remove('nav__link_active');
            }

            const navLInks = currentLink.closest('.nav').querySelectorAll('.nav__link');

            navLInks.forEach(link => {
                link.classList.remove('nav__link_active');
            });

            currentLink.classList.add('nav__link_active');
        }
    }
};
