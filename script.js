document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Pagaidu simulācija
    if (email === "test@test.com" && password === "123456") {
        alert("Veiksmīgi ienācāt!");
    } else {
        alert("Nepareizs e-pasts vai parole!");
    }
});

document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Meklēšanas funkcija pagaidām nav aktivizēta.");
});

document.getElementById('adForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Sludinājums veiksmīgi pievienots!");
});
// Elementu atlase
const modal = document.getElementById('loginModal');
const openModalBtn = document.getElementById('openLoginModal');
const closeModalBtn = document.querySelector('.close');

// Atver modālo logu
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Aizver modālo logu
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Aizver modālo logu, kad lietotājs klikšķina ārpus tā
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Apstrādā autorizācijas formu
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Neļauj pārlādēt lapu
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "test@test.com" && password === "123456") {
        alert("Veiksmīgi ienācāt!");
        modal.style.display = 'none'; // Aizver modālo logu
    } else {
        alert("Nepareizs e-pasts vai parole!");
    }
});
