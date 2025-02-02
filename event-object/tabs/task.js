const tabsArr = Array.from(document.querySelectorAll('.tab'));
const contentsArr = Array.from(document.querySelectorAll('.tab__content'));
let activeTab = document.querySelector('.tab_active');
let activeContent = document.querySelector('.tab__content_active');

tabsArr.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        if (activeTab) {
            activeTab.classList.remove('tab_active');
            activeContent.classList.remove('tab__content_active');
        }

        tab.classList.add('tab_active');
        contentsArr[index].classList.add('tab__content_active');

        activeTab = tab;
        activeContent = contentsArr[index];
    });
});