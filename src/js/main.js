import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};

    changeModalState(modalState);
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
    tabs({
        headerSelector: '.balcon_icons',
        tabSelector: '.balcon_icons_img',
        contentSelector: '.big_img img',
        activeClass: 'do_image_more',
        display: 'inline-block',
    });
    forms(modalState);
});
