/* --- 1. Skrip untuk Navigasi Sticky --- */
// Men-select elemen header
const header = document.getElementById('header');

// Menambahkan event listener saat window di-scroll
window.addEventListener('scroll', () => {
    // Jika scroll vertikal lebih dari 50px, tambahkan class 'scrolled'
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        // Jika tidak, hapus class 'scrolled'
        header.classList.remove('scrolled');
    }
});

/* --- 2. Skrip untuk Hamburger Menu (Mobile) --- */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navIcon = hamburger.querySelector('i');
const navLinks = document.querySelectorAll('.nav-link');

// Fungsi untuk toggle menu
const toggleMenu = () => {
    navMenu.classList.toggle('active');
    
    // Ganti ikon bars <-> times (X)
    if (navMenu.classList.contains('active')) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    } else {
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    }
};

// Toggle buka/tutup menu saat ikon hamburger diklik
hamburger.addEventListener('click', toggleMenu);

// Tutup menu saat salah satu link di dalam menu diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

/* --- 3. Skrip untuk Hiasan Partikel (tsParticles) --- */
// Menunggu konten DOM selesai dimuat sebelum menjalankan skrip partikel
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Memuat konfigurasi tsParticles
    tsParticles.load("particles-js", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 80, // Jumlah partikel
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff" // Warna partikel (putih)
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: 3,
                random: true,
            },
            move: {
                enable: true,
                speed: 1, // Kecepatan gerak
                direction: "none",
                out_mode: "out",
                bounce: false,
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse" // Partikel menjauh saat di-hover
                },
                onclick: {
                    enable: true,
                    mode: "push" // Menambah partikel saat di-klik
                },
            },
            modes: {
                repulse: {
                    distance: 100
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
});