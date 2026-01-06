const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')
const submit = document.querySelector('#submit')

if (localStorage.getItem('data') == null) {
    localStorage.setItem('data' , '[]');
}


document.addEventListener('DOMContentLoaded', function() {
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const message = document.querySelector('#message');
    const submit = document.querySelector('#submit');

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data' , '[]');
    }

    if (submit) {
        submit.onclick = () => {
            if (email.value === '') return email.focus();
            if (phone.value === '') return phone.focus();
            if (message.value === '') return message.focus();

            // Ambil data lama

                var penyimpanan;
                try {
                    penyimpanan = JSON.parse(localStorage.getItem('data'));
                    if (!Array.isArray(penyimpanan)) penyimpanan = [];
                } catch (e) {
                    penyimpanan = [];
                }
                // Tambahkan data baru sebagai objek
                penyimpanan.push({
                    email: email.value,
                    phone: phone.value,
                    message: message.value
                });
                localStorage.setItem('data', JSON.stringify(penyimpanan));

            // Reset form
            email.value = '';
            phone.value = '';
            message.value = '';
            email.focus();
        }
    } else {
        console.error('Element #submit');
    }
});

/*==== stickyk nav ====*/
window.onscroll = () => {
    let nav = document.querySelector('.nav');

    nav.classList.toggle('sticky', window.scrollY > 100);
};

