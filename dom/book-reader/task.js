const fonts = Array.from(document.querySelectorAll('.font-size'));
const bookElement = document.getElementById('book');
let bookActive = document.querySelector('.font-size_active');

fonts.forEach(font => {
    font.addEventListener('click', (e) => {
        e.preventDefault()


        if (bookActive) {
            bookActive.classList.remove('font-size_active');
        }

        font.classList.add('font-size_active');
        bookActive = font;

        bookElement.classList.remove('book_fs-small', 'book_fs-big');

        if (font.dataset.size === 'small') {
            bookElement.classList.add('book_fs-small');
        } else if (font.dataset.size === 'big') {
            bookElement.classList.add('book_fs-big');
        }
    });
});