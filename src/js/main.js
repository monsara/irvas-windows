import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};

    // #region Set automatic deadline
    const daysToFinish = 3;
    let deadline;

    // let deadline = '2021.02.01';

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    deadline = new Date(year, month, day);
    deadline.setDate(deadline.getDate() + daysToFinish);
    //#endregion

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
    timer('.container1', deadline);
});
