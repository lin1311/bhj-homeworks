const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let rotatorActive = document.querySelector('.rotator__case_active');

setInterval(() => {
    if (rotatorActive) {
        rotatorActive.classList.remove('rotator__case_active');
    }

    const nextRotator = rotatorActive.nextElementSibling;
    if (nextRotator) {
        rotatorActive = nextRotator
    } else {
        rotatorActive = rotators[0]
    }

    rotatorActive.classList.add('rotator__case_active');
}, 1000);