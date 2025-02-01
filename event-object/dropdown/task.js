const openList = document.querySelector('.dropdown__list');
const button = document.querySelector('.dropdown__value');
const items = Array.from(document.querySelectorAll('.dropdown__item'));

button.addEventListener('click', function () {
    openList.classList.toggle('dropdown__list_active');
});

items.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); 
        const link = item.querySelector('.dropdown__link');
        if (link) {
            button.textContent = link.textContent;
            openList.classList.toggle('dropdown__list_active');
        }
    });
});