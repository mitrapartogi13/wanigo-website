document.addEventListener("DOMContentLoaded", () => {
    // === ELEMEN DOM GLOBAL ===
    const pageContent = document.getElementById("page-content");
    const navLinks = document.querySelectorAll(".nav-link"); // Semua link nav (header & footer)
    const mainNav = document.getElementById("main-nav");
    const menuToggle = document.getElementById("menu-toggle");

    // === TEMPLATE HTML UNTUK SETIAP HALAMAN ===
    // Menggunakan template literal untuk struktur HTML yang bersih

    // --- TEMPLATE HALAMAN HOME ---
    const homeTemplate = `
            <!-- 1. Hero Section -->
            <section id="hero">
                <div class="hero-content">
                    <h1>♻️ On-Demand AI-Driven Waste Management System</h1>
                    <p>
                        WANIGO! hadir di Surabaya sebagai platform digital inovatif yang menghubungkan 
                        Bank Sampah Unit (BSU) dengan Nasabah (Rumah Tangga/Perkantoran) secara 
                        on-demand, didukung oleh AI untuk optimalisasi rute dan prediksi volume sampah.
                    </p>
                    <a href="#" class="btn" id="hero-cta-btn">Click to know more</a>
                </div>
            </section>
            
            <!-- 2. Layanan Unggulan -->
            <section id="services" class="container">
                <div class="section-title">
                    <h2>Layanan Unggulan Kami</h2>
                    <p>Solusi terintegrasi untuk nasabah dan pengelola bank sampah.</p>
                </div>
                <div class="services-grid">
                    <div class="service-card">
                        <span class="icon-placeholder">📱</span>
                        <h3>WANIGO NASABAH</h3>
                        <p>Aplikasi mobile untuk request penjemputan sampah terpilah, tracking, dan redeem poin.</p>
                    </div>
                    <div class="service-card">
                        <span class="icon-placeholder">🏦</span>
                        <h3>WANIGO BANK SAMPAH</h3>
                        <p>Dashboard manajemen untuk BSU, optimasi rute penjemputan, dan laporan digital.</p>
                    </div>
                    <div class="service-card">
                        <span class="icon-placeholder">🤖</span>
                        <h3>AI OPTIMIZATION</h3>
                        <p>Sistem cerdas untuk prediksi volume sampah dan penentuan rute kurir yang efisien.</p>
                    </div>
                </div>
            </section>
            
            <!-- 3. Value Proposition -->
            <section id="value-prop" class="container">
                <div class="value-prop-layout">
                    <div class="value-prop-img">
                        <img src="https://placehold.co/500x350/1e88e5/ffffff?text=Tim+Profesional+WANIGO!" alt="Tim Profesional Wanigo">
                    </div>
                    <div class="value-prop-content">
                        <h2>Mengapa Memilih WANIGO!</h2>
                        <p>Kami bukan hanya penyedia platform, kami adalah partner Anda dalam mewujudkan lingkungan yang lebih bersih dan ekonomi sirkular.</p>
                        <div class="value-prop-list">
                            <div class="list-item">
                                <span class="icon">✔️</span>
                                <div>
                                    <h4>Tim Ahli</h4>
                                    <p>Didukung oleh profesional di bidang teknologi, lingkungan, dan manajemen logistik.</p>
                                </div>
                            </div>
                            <div class="list-item">
                                <span class="icon">✔️</span>
                                <div>
                                    <h4>Kolaboratif</h4>
                                    <p>Bermitra erat dengan pemerintah lokal, komunitas, dan industri daur ulang.</p>
                                </div>
                            </div>
                            <div class="list-item">
                                <span class="icon">✔️</span>
                                <div>
                                    <h4>Kualitas Terjamin</h4>
                                    <p>Platform yang andal, aman, dan terus dikembangkan berdasarkan data dan umpan balik pengguna.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

    // --- TEMPLATE HALAMAN ABOUT US ---
    const aboutTemplate = `
            <div class="breadcrumbs">
                <div class="container">
                    Home / About Us
                </div>
            </div>
        
            <!-- 1. Visi & Misi -->
            <section id="about-vision-mission">
                <div class="container">
                    <div class="vision-mission-layout">
                        <div class="vision-content">
                            <h3>Visi Kami</h3>
                            <p>Menjadi platform digital terdepan dalam pengelolaan sampah berkelanjutan di Indonesia, menciptakan ekosistem ekonomi sirkular yang inklusif dan berbasis teknologi.</p>
                        </div>
                        <div class="mission-content">
                            <h3>Misi Kami</h3>
                            <ul>
                                <li>Memberikan kemudahan bagi masyarakat untuk berpartisipasi dalam pemilahan sampah.</li>
                                <li>Mendigitalisasi dan mengoptimalkan operasional Bank Sampah Unit (BSU).</li>
                                <li>Menerapkan teknologi AI untuk efisiensi logistik dan prediksi data.</li>
                                <li>Membangun kemitraan strategis untuk memperkuat rantai pasok daur ulang.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- 2. Statistik (Counter) -->
            <section id="stats" class="container">
                <div class="section-title">
                    <h2>Pencapaian Kami</h2>
                    <p>Angka-angka yang mendorong kami untuk terus berinovasi.</p>
                </div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <h3 class="counter" data-target="100">0</h3>
                        <p>Bank Sampah Mitra</p>
                    </div>
                    <div class="stat-item">
                        <h3 class="counter" data-target="50">0</h3>
                        <p>Kecamatan Terjangkau</p>
                    </div>
                    <div class="stat-item">
                        <h3 class="counter" data-target="10">0</h3>
                        <p>Ton Sampah Terkelola</p>
                    </div>
                </div>
            </section>
        `;

    // --- TEMPLATE HALAMAN MEMBERS ---
    const membersTemplate = `
            <div class="breadcrumbs">
                <div class="container">
                    Home / Members
                </div>
            </div>
        
            <section id="team" class="container">
                <div class="section-title">
                    <h2>Tim Kami</h2>
                    <p>Profesional yang berdedikasi di balik kesuksesan WANIGO!.</p>
                </div>
                <div class="team-grid">
                    <!-- Member 1 -->
                    <div class="team-card">
                        <div class="team-card-img-wrapper">
                            <img src="https://placehold.co/400x450/e0e0e0/555555?text=Foto+CEO" alt="Foto CEO" class="team-card-img">
                            <div class="team-card-overlay">
                                <div class="team-card-overlay-icons">
                                    <a href="#" title="LinkedIn">IN</a>
                                    <a href="#" title="Email">✉️</a>
                                </div>
                            </div>
                        </div>
                        <div class="team-card-info">
                            <h4>Ahmad Zulkifli</h4>
                            <span>CEO & Founder</span>
                        </div>
                    </div>
                    
                    <!-- Member 2 -->
                    <div class="team-card">
                        <div class="team-card-img-wrapper">
                            <img src="https://placehold.co/400x450/e0e0e0/555555?text=Foto+CTO" alt="Foto CTO" class="team-card-img">
                            <div class="team-card-overlay">
                                <div class="team-card-overlay-icons">
                                    <a href="#" title="LinkedIn">IN</a>
                                    <a href="#" title="Email">✉️</a>
                                </div>
                            </div>
                        </div>
                        <div class="team-card-info">
                            <h4>Siti Nurhaliza</h4>
                            <span>Chief Technology Officer (CTO)</span>
                        </div>
                    </div>
                    
                    <!-- Member 3 (Placeholder) -->
                    <div class="team-card">
                        <div class="team-card-img-wrapper">
                            <img src="https://placehold.co/400x450/e0e0e0/555555?text=Foto+CMO" alt="Foto CMO" class="team-card-img">
                            <div class="team-card-overlay">
                                <div class="team-card-overlay-icons">
                                    <a href="#" title="LinkedIn">IN</a>
                                    <a href="#" title="Email">✉️</a>
                                </div>
                            </div>
                        </div>
                        <div class="team-card-info">
                            <h4>Budi Santoso</h4>
                            <span>Chief Marketing Officer (CMO)</span>
                        </div>
                    </div>
                </div>
            </section>
        `;

    // --- TEMPLATE HALAMAN GALLERY ---
    const galleryTemplate = `
            <div class="breadcrumbs">
                <div class="container">
                    Home / Gallery
                </div>
            </div>
        
            <section id="gallery" class="container">
                <div class="section-title">
                    <h2>Galeri Proyek</h2>
                    <p>Lihat lebih dekat solusi yang telah kami kembangkan.</p>
                </div>
                
                <!-- Filter Buttons -->
                <div class="gallery-filters" id="gallery-filters">
                    <button class="filter-btn active" data-filter="all">Semua</button>
                    <button class="filter-btn" data-filter="web">Desain Web</button>
                    <button class="filter-btn" data-filter="mobile">Aplikasi Mobile</button>
                    <button class="filter-btn" data-filter="branding">Branding</button>
                </div>
                
                <!-- Gallery Grid -->
                <div class="gallery-grid" id="gallery-grid">
                    <!-- Item 1 -->
                    <div class="gallery-item" data-category="mobile" 
                            data-img="https://placehold.co/600x400/0097FF/FFFFFF?text=Aplikasi+Nasabah" 
                            data-title="Aplikasi Mobile Nasabah" 
                            data-desc="Desain UI/UX untuk aplikasi mobile nasabah, fokus pada kemudahan penggunaan.">
                        <img src="https://placehold.co/400x300/0097FF/FFFFFF?text=Aplikasi+Nasabah" alt="Proyek 1">
                        <div class="gallery-item-info">
                            <h5>Aplikasi Mobile Nasabah</h5>
                            <p>Aplikasi Mobile</p>
                        </div>
                    </div>
                    
                    <!-- Item 2 -->
                    <div class="gallery-item" data-category="web"
                            data-img="https://placehold.co/600x400/003CFF/FFFFFF?text=Dashboard+BSU" 
                            data-title="Dashboard Admin Bank Sampah" 
                            data-desc="Platform web komprehensif untuk manajemen operasional BSU.">
                        <img src="https://placehold.co/400x300/003CFF/FFFFFF?text=Dashboard+BSU" alt="Proyek 2">
                        <div class="gallery-item-info">
                            <h5>Dashboard Admin BSU</h5>
                            <p>Desain Web</p>
                        </div>
                    </div>
                    
                    <!-- Item 3 -->
                    <div class="gallery-item" data-category="branding"
                            data-img="https://placehold.co/600x400/1de9b6/FFFFFF?text=Branding+Kit" 
                            data-title="Branding & Identitas Visual" 
                            data-desc="Pengembangan identitas visual WANIGO! yang modern dan ramah lingkungan.">
                        <img src="https://placehold.co/400x300/1de9b6/FFFFFF?text=Branding+Kit" alt="Proyek 3">
                        <div class="gallery-item-info">
                            <h5>Branding Kit WANIGO!</h5>
                            <p>Branding</p>
                        </div>
                    </div>
                    
                    <!-- Item 4 -->
                    <div class="gallery-item" data-category="mobile"
                            data-img="https://placehold.co/600x400/ff9800/FFFFFF?text=Aplikasi+Kurir" 
                            data-title="Aplikasi Mobile Kurir" 
                            data-desc="Aplikasi khusus kurir dengan fitur optimasi rute dan bukti penjemputan.">
                        <img src="https://placehold.co/400x300/ff9800/FFFFFF?text=Aplikasi+Kurir" alt="Proyek 4">
                        <div class="gallery-item-info">
                            <h5>Aplikasi Mobile Kurir</h5>
                            <p>Aplikasi Mobile</p>
                        </div>
                    </div>
                </div>
            </section>
        `;

    // --- TEMPLATE HALAMAN CONTACTS ---
    const contactsTemplate = `
            <div class="breadcrumbs">
                <div class="container">
                    Home / Contacts
                </div>
            </div>
            
            <section id="contact" class="container">
                <div class="section-title">
                    <h2>Hubungi Kami</h2>
                    <p>Kami siap mendengar ide, pertanyaan, atau kolaborasi dari Anda.</p>
                </div>
                
                <div class="contact-layout">
                    <!-- Kolom Formulir -->
                    <div class="contact-form">
                        <h3>Kirim Pesan</h3>
                        <form id="main-contact-form">
                            <div class="form-group">
                                <label for="name">Nama Lengkap</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subjek</label>
                                <input type="text" id="subject" name="subject" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Pesan Anda</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn">Kirim Pesan</button>
                        </form>
                    </div>
                    
                    <!-- Kolom Info & Peta -->
                    <div class="contact-info">
                        <h3>Informasi Kontak</h3>
                        <p>Hubungi kami melalui detail di bawah ini atau kunjungi kantor kami.</p>
                        
                        <div class="info-item">
                            <span class="icon">📍</span>
                            <div>
                                <h5>Lokasi</h5>
                                <p>Jl. Inovasi Teknologi No. 1, Surabaya, Jawa Timur, 60111</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <span class="icon">📧</span>
                            <div>
                                <h5>Email</h5>
                                <p>hello@wanigo.id</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <span class="icon">📞</span>
                            <div>
                                <h5>Telepon</h5>
                                <p>+62 812 3456 7890</p>
                            </div>
                        </div>
                        
                        <div class="map-placeholder">
                            Placeholder Peta (Google Maps)
                        </div>
                    </div>
                </div>
            </section>
        `;

    // === FUNGSI RENDER HALAMAN (SPA LOGIC) ===
    function renderPage(pageName) {
        let templateToRender = "";

        // Mekanisme Switch-Case untuk memilih template
        switch (pageName) {
        case "home":
            templateToRender = homeTemplate;
            break;
        case "about":
            templateToRender = aboutTemplate;
            break;
        case "members":
            templateToRender = membersTemplate;
            break;
        case "gallery":
            templateToRender = galleryTemplate;
            break;
        case "contacts":
            templateToRender = contactsTemplate;
            break;
        default:
            templateToRender = homeTemplate; // Default ke home
            pageName = "home"; // pastikan pageName konsisten
        }

        // 1. Render HTML ke dalam <main>
        pageContent.innerHTML = templateToRender;
        window.scrollTo(0, 0); // Selalu scroll ke atas saat ganti halaman

        // 2. Update kelas 'active' di navigasi
        updateActiveNav(pageName);

        // 3. Panggil fungsi JS spesifik untuk halaman yang baru di-render
        // Ini penting agar event listener terpasang setelah elemen ada di DOM
        if (pageName === "home") {
        initHomePage();
        } else if (pageName === "about") {
        initAboutPage();
        } else if (pageName === "gallery") {
        initGalleryPage();
        } else if (pageName === "contacts") {
        initContactsPage();
        }
    }

    // === FUNGSI INISIALISASI SPESIFIK HALAMAN ===

    // --- JS Halaman HOME ---
    function initHomePage() {
        // 1. Partikel Mousemove di Hero
        const hero = document.getElementById("hero");
        if (!hero) return; // Guard clause

        hero.addEventListener("mousemove", (e) => {
        // Membuat partikel
        const particle = document.createElement("div");
        particle.className = "particle";
        document.body.appendChild(particle);

        // Mengatur ukuran, posisi, dan gerakan acak
        const size = Math.random() * 8 + 2; // Ukuran 2px - 10px
        const x = e.clientX;
        const y = e.clientY + window.scrollY; // + scrollY agar posisi benar saat scroll

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Gerakan acak setelah muncul
        const moveX = Math.random() * 20 - 10; // -10px s/d +10px
        const moveY = Math.random() * 20 - 10;

        // Trigger transisi
        setTimeout(() => {
            particle.style.opacity = "1";
            particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }, 10);

        // Menghapus partikel setelah animasi selesai
        setTimeout(() => {
            particle.style.opacity = "0";
            particle.style.transform = `translate(${moveX * 2}px, ${
            moveY * 2
            }px)`;
            setTimeout(() => particle.remove(), 500); // Hapus dari DOM
        }, 400);
        });

        // 2. Event listener untuk tombol CTA
        const ctaButton = document.getElementById("hero-cta-btn");
        if (ctaButton) {
        ctaButton.addEventListener("click", (e) => {
            e.preventDefault();
            renderPage("about"); // Pindah ke halaman About Us
        });
        }
    }

    // --- JS Halaman ABOUT US ---
    function initAboutPage() {
        // Efek Counter-Up
        const counters = document.querySelectorAll(".counter");
        const speed = 200; // Kecepatan (makin kecil makin cepat)

        const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target"); // Ambil nilai target

        const updateCount = () => {
            const count = +counter.innerText;
            const increment = target / speed; // Peningkatan per frame

            if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1); // Panggil frame berikutnya
            } else {
            counter.innerText = target; // Pastikan nilai akhir sesuai
            }
        };
        updateCount();
        };

        // Menggunakan Intersection Observer agar animasi berjalan saat di-scroll
        const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Hanya jalankan sekali
            }
            });
        },
        { threshold: 0.5 }
        ); // Trigger saat 50% elemen terlihat

        counters.forEach((counter) => {
        observer.observe(counter);
        });
    }

    // --- JS Halaman GALLERY ---
    function initGalleryPage() {
        const filterContainer = document.getElementById("gallery-filters");
        const galleryItems = document.querySelectorAll(
        "#gallery-grid .gallery-item"
        );
        const lightbox = document.getElementById("gallery-lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const lightboxTitle = document.getElementById("lightbox-title");
        const lightboxDesc = document.getElementById("lightbox-desc");
        const lightboxClose = document.getElementById("lightbox-close");

        if (!filterContainer) return; // Guard clause

        // 1. Logika Filter
        filterContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-btn")) {
            // Update tombol aktif
            filterContainer
            .querySelector(".active")
            .classList.remove("active");
            e.target.classList.add("active");

            const filterValue = e.target.getAttribute("data-filter");

            // Tampilkan/sembunyikan item galeri
            galleryItems.forEach((item) => {
            if (
                filterValue === "all" ||
                item.getAttribute("data-category") === filterValue
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
            });
        }
        });

        // 2. Logika Lightbox (Open)
        galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Ambil data dari atribut data-*
            const img = item.getAttribute("data-img");
            const title = item.getAttribute("data-title");
            const desc = item.getAttribute("data-desc");

            // Set konten lightbox
            lightboxImg.src = img;
            lightboxTitle.innerText = title;
            lightboxDesc.innerText = desc;

            // Tampilkan lightbox
            lightbox.classList.add("show");
        });
        });

        // 3. Logika Lightbox (Close)
        const closeLightbox = () => {
        lightbox.classList.remove("show");
        };

        lightboxClose.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", (e) => {
        // Tutup jika klik di area luar konten
        if (e.target === lightbox) {
            closeLightbox();
        }
        });
    }

    // --- JS Halaman CONTACTS ---
    function initContactsPage() {
        const form = document.getElementById("main-contact-form");
        if (!form) return;

        form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Di aplikasi nyata, di sini akan ada logika pengiriman data
        // Untuk demo, kita tampilkan pesan sukses sederhana
        alert("Terima kasih! Pesan Anda telah terkirim (simulasi).");
        form.reset(); // Kosongkan form
        });
    }

    // === FUNGSI HELPERS ===

    // Helper untuk update link nav aktif
    function updateActiveNav(activePage) {
        navLinks.forEach((link) => {
        if (link.getAttribute("data-page") === activePage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
        });
    }

    // Helper untuk menutup mobile menu
    function closeMobileMenu() {
        mainNav.classList.remove("open");
        menuToggle.classList.remove("open");
    }

    // === EVENT LISTENERS GLOBAL ===

    // 1. Event Listener untuk semua link navigasi
    document.body.addEventListener("click", (e) => {
        // Cek apakah yang diklik adalah .nav-link (delegasi event)
        if (e.target.matches(".nav-link")) {
        e.preventDefault();
        const page = e.target.getAttribute("data-page");
        if (page) {
            renderPage(page);
            closeMobileMenu(); // Tutup menu (jika terbuka) saat link diklik
        }
        }
        // Cek untuk logo
        if (e.target.matches(".logo")) {
        e.preventDefault();
        const page = e.target.getAttribute("data-page");
        if (page) {
            renderPage(page);
            closeMobileMenu();
        }
        }
    });

    // 2. Event Listener untuk Hamburger Menu Toggle
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });

    // === INISIALISASI HALAMAN AWAL ===
    // Render halaman 'home' saat DOM pertama kali dimuat
    renderPage("home");
    });