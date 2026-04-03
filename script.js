const slider = document.getElementById('unlock-slider');
const surprise = document.getElementById('surprise-content');
const mainCard = document.getElementById('main-card');

slider.addEventListener('input', (e) => {
    if (e.target.value == 100) {
        triggerCelebration();
    }
});

function triggerCelebration() {
    slider.parentElement.style.display = 'none';
    surprise.classList.remove('hidden');
    blast();
}

function blast() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff0072', '#00fffc']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff0072', '#00fffc']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
