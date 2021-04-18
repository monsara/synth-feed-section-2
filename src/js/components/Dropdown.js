export default class {
    constructor(selector) {
        this.dropdowns = selector;
    }

    toggleDropdown() {
        if (this.dropdowns) {
            this.dropdowns.forEach(dropdown => {
                dropdown.addEventListener('click', e => {
                    if (dropdown || e.target.closest('.dropdown__btn').matches('.dropdown__btn')) {
                        dropdown.querySelector('.dropdown__content').classList.toggle('show');
                    }
                });
            });
        }
    }

    initDropdown() {
        this.toggleDropdown();
    }
}
