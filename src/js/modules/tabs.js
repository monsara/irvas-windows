const tabs = ({
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
}) => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabConten(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabConten();

    header.addEventListener('click', e => {
        const target = e.target;

        if (target && target.closest(tabSelector)) {
            tab.forEach((item, i) => {
                if (target.closest(tabSelector) === item) {
                    hideTabContent();
                    showTabConten(i);
                }
            });
        }
    });
};

export default tabs;
