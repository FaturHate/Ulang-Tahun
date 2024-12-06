function showLove() {
    const heartContainer = document.getElementById('hearts');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random()}s`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        heartContainer.appendChild(heart);

        // Hapus hati setelah animasi selesai
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
