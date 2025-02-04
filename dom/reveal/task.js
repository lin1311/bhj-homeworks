const revealArr = Array.from(document.querySelectorAll('.reveal'));

revealArr.forEach(reveal => {
    window.addEventListener('scroll', () => {
        const rect = reveal.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        if ((top <= window.innerHeight) && (bottom >= 0)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});
