document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.querySelector('.gift-box');
    const content = document.querySelector('.content');
    const clickMessage = document.querySelector('.click-message');
    let isOpened = false;

    giftBox.addEventListener('click', () => {
        if (!isOpened) {
            // Open the box
            giftBox.classList.add('open');
            clickMessage.style.display = 'none';
            
            // Show content with delay
            setTimeout(() => {
                content.classList.remove('hidden');
                setTimeout(() => {
                    content.classList.add('show');
                }, 100);
            }, 500);
            
            // Play celebration animation
            createConfetti();
            
            isOpened = true;
        }
    });

    // Confetti animation
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random confetti properties
            const colors = ['#ff1a75', '#ff4d94', '#ff99cc', '#ffcce6'];
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.opacity = Math.random();
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});

// Add confetti styles dynamically
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        top: -10px;
        width: 10px;
        height: 10px;
        pointer-events: none;
        animation: fall linear forwards;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);