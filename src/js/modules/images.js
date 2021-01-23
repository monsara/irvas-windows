const images = () => {
    const imgPopup = document.createElement('div');
    const workSeciton = document.querySelector('.works');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup');

    imgPopup.appendChild(bigImage);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImage.style.maxWidth = '720px';

    workSeciton.appendChild(imgPopup);

    workSeciton.addEventListener('click', e => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;
