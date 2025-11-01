 document.addEventListener('DOMContentLoaded', () => {
            
            // Panggil Lucide Icons
            lucide.createIcons();

            // === A. Navigasi Halaman Tunggal ===
            const navTriggers = document.querySelectorAll('.nav-trigger');
            const pageContents = document.querySelectorAll('.page-content');
            const allNavLinks = document.querySelectorAll('.nav-link');
            const allNavLinksMobile = document.querySelectorAll('.nav-link-mobile');
            const mobileMenu = document.getElementById('mobile-menu');
            const burgerBtn = document.getElementById('burger-btn');

            function showPage(pageId) {
                // Sembunyikan semua halaman
                pageContents.forEach(page => {
                    page.classList.add('hidden');
                });
                
                // Tampilkan halaman yang diminta
                const activePage = document.getElementById(`page-${pageId}`);
                if (activePage) {
                    activePage.classList.remove('hidden');
                } else {
                    // Fallback ke home jika halaman tidak ada
                    document.getElementById('page-home').classList.remove('hidden');
                }

                // Update status aktif di nav desktop
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.page === pageId) {
                        link.classList.add('active');
                    }
                });
                
                // Update status aktif di nav mobile
                allNavLinksMobile.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.page === pageId) {
                        link.classList.add('active');
                    }
                });

                // Tutup menu mobile setelah klik
                mobileMenu.classList.add('hidden');
                burgerBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
                lucide.createIcons();
                
                // Gulir ke atas halaman
                window.scrollTo(0, 0);

                // Jalankan animasi spesifik per halaman
                if (pageId === 'about') {
                    startCounters(); // C.4. Konter Statistik
                }
                if (pageId === 'home') {
                    startParticleAnimation(); // B.2. Animasi Partikel
                } else {
                    stopParticleAnimation();
                }
            }

            // Tambahkan event listener ke semua tombol nav
            navTriggers.forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = trigger.dataset.page;
                    // Update URL hash
                    window.location.hash = pageId;
                });
            });

            // Handle perubahan hash (navigasi)
            function handleHashChange() {
                const pageId = window.location.hash.substring(1) || 'home';
                showPage(pageId);
            }

            // Panggil handleHashChange saat load dan saat hash berubah
            window.addEventListener('hashchange', handleHashChange);
            handleHashChange(); // Panggil saat load pertama

            // === A.2. Burger Menu Logic ===
            burgerBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                if (isHidden) {
                    burgerBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
                } else {
                    burgerBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
                }
                lucide.createIcons();
            });

            // === C.4. Konter Statistik (About Us) ===
            let countersAnimated = false;
            function animateValue(el, start, end, duration) {
                if (!el) return;
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    el.innerHTML = Math.floor(progress * (end - start) + start) + "+";
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            function startCounters() {
                if (countersAnimated) return;
                countersAnimated = true;
                animateValue(document.getElementById('stat-projects'), 0, 50, 1500); // 50+ Bank Sampah
                animateValue(document.getElementById('stat-clients'), 0, 1500, 2000); // 1500+ Nasabah
                animateValue(document.getElementById('stat-team'), 0, 10, 1000); // 10+ Tim
            }

            // === B.2. Animasi Partikel (Home) ===
            const canvas = document.getElementById('hero-particles');
            let ctx, particles = [], animationFrameId = null;

            if (canvas) {
                ctx = canvas.getContext('2d');
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2 + 1;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.speedY = Math.random() * 1 - 0.5;
                    this.opacity = Math.random() * 0.5 + 0.3;
                }
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
                }
                draw() {
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            function initParticles() {
                particles = [];
                for (let i = 0; i < 70; i++) {
                    particles.push(new Particle());
                }
            }

            function animateParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                }
                animationFrameId = requestAnimationFrame(animateParticles);
            }

            function startParticleAnimation() {
                if (!canvas || animationFrameId) return;
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                initParticles();
                animateParticles();
            }

            function stopParticleAnimation() {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            }

            // Handle window resize untuk canvas
            window.addEventListener('resize', () => {
                if (canvas && !document.getElementById('page-home').classList.contains('hidden')) {
                    canvas.width = canvas.offsetWidth;
                    canvas.height = canvas.offsetHeight;
                    initParticles();
                }
            });

            // === E. Galeri Filter & Lightbox ===
            const filterBtns = document.querySelectorAll('.gallery-filter-btn');
            const galleryGrid = document.getElementById('gallery-grid');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            // Filter
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update tombol aktif
                    filterBtns.forEach(b => b.classList.remove('active', 'bg-wanigo-blue-end', 'text-white'));
                    btn.classList.add('active', 'bg-wanigo-blue-end', 'text-white');
                    
                    const filter = btn.dataset.filter;
                    
                    // Tampilkan/sembunyikan item
                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.dataset.category === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            // Lightbox
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxTitle = document.getElementById('lightbox-title');
            const lightboxDesc = document.getElementById('lightbox-desc');
            const closeLightbox = document.getElementById('close-lightbox');

            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    lightboxImg.src = item.dataset.imgSrc;
                    lightboxTitle.textContent = item.dataset.title;
                    lightboxDesc.textContent = item.dataset.desc;
                    lightbox.classList.remove('hidden');
                    lightbox.classList.add('flex');
                });
            });

            function hideLightbox() {
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
            }

            closeLightbox.addEventListener('click', hideLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    hideLightbox();
                }
            });

        }); // Akhir DOMContentLoaded