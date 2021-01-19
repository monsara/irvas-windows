const forms = () => {
    // const form = document.querySelectorAll('form');
    const form = document.forms;
    // const inputs = document.querySelectorAll('input');
    // const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    form.forEach(item => {
        const phoneInputs = item.elements;

        phoneInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/, '');
            });
        });
    });

    // phoneInputs.forEach(item => {
    //     item.addEventListener('input', () => {
    //         item.value = item.value.replace(/\D/, '');
    //     });
    // });

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        return await res.text();
    };

    // const clearInputs = () => {
    //     inputs.forEach(item => {
    //         item.value = '';
    //     });
    // };

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            console.log('click');

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => (statusMessage.textContent = message.failure))
                .finally(() => {
                    // clearInputs();
                    item.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;
