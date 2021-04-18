import Dropdown from './components/Dropdown';

export default () => {
    const dropdown = new Dropdown(document.querySelectorAll('.dropdown'));
    dropdown.initDropdown();
};
