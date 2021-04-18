export default () => {
    changeDropdownPosOnMobileScreens();

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
};
