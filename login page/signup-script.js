const form = document.getElementById('signupForm');
    const modal = new bootstrap.Modal(document.getElementById('signupModal'));
    const modalMessage = document.getElementById('modalMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const pass = document.getElementById('password').value;
        const confirm = document.getElementById('confirm').value;

        if (!name || !email || !pass || !confirm) {
        modalMessage.textContent = 'Semua kolom harus diisi!';
        } else if (pass !== confirm) {
        modalMessage.textContent = 'Kata sandi tidak cocok!';
        } else {
        modalMessage.textContent = 'Pendaftaran berhasil!';
        form.reset();
        }
    
        modal.show();
    }
);