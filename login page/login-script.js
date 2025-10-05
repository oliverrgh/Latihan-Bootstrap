const form = document.getElementById('loginForm');
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    const modalMessage = document.getElementById('modalMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        if (email && password) {
          modalMessage.textContent = 'Login berhasil!';
        } else {
          modalMessage.textContent = 'Silakan isi semua kolom!';
        }
      
        modal.show();
        form.reset();
    }
);