import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    // Init tabs in Glasing section
    tabs({
        headerSelector: '.glazing_slider ',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeClass: 'active',
    });
    // Init tabs in Decoration section
    tabs({
        headerSelector: '.decoration_slider',
        tabSelector: '.no_click',
        contentSelector: '.decoration_content > div > div',
        activeClass: 'after_click',
    });
});
