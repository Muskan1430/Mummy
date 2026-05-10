function goTo(page) {
  document.body.style.opacity = 0;
  document.body.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    window.location.href = page;
  }, 500);
}

window.onload = () => {
  document.body.style.opacity = 1;
  document.body.style.transform = 'scale(1)';
  document.body.style.transition = 'all 0.6s ease';
  
  // Add random hearts
  createFloatingHearts();
};

function createFloatingHearts() {
  for(let i = 0; i < 10; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.innerHTML = ['💖', '💕', '💗', '💝'][Math.floor(Math.random() * 4)];
      heart.style.position = 'fixed';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animation = `float ${Math.random() * 3 + 2}s linear infinite`;
      heart.style.fontSize = '20px';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '1';
      document.body.appendChild(heart);
      
      setTimeout(() => heart.remove(), 5000);
    }, i * 500);
  }
}

// Gallery hover effects
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image-container img');
  images.forEach(img => {
    img.addEventListener('mouseenter', function() {
      const quote = this.getAttribute('data-quote');
      const overlay = this.parentElement.querySelector('.image-overlay p');
      overlay.textContent = quote;
    });
  });
});

function goTo(page) {
  document.body.style.opacity = 0;
  document.body.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    window.location.href = page;
  }, 500);
}

window.onload = () => {
  document.body.style.opacity = 1;
  document.body.style.transform = 'scale(1)';
  document.body.style.transition = 'all 0.6s ease';
  
  createFloatingHearts();
};

// ... (keep all previous functions) ...