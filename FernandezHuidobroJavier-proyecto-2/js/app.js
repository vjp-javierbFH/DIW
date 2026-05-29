// CineManager - lógica compartida
(function () {
    // Navbar parcial
    window.CM_renderNavbar = function (active) {
        const isAdmin = (active || "").startsWith("admin");
        return `
    <nav class="cm-navbar">
      <div class="container d-flex align-items-center justify-content-between py-2">
        <a class="cm-brand" href="/cinemanager/index.html">Cine<span>Manager</span></a>
        <button class="btn btn-sm cm-btn-outline d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#cmNav" aria-controls="cmNav" aria-expanded="false" aria-label="Abrir menú">
          <i class="bi bi-list"></i> Menú
        </button>
        <div class="collapse d-md-flex align-items-center gap-3" id="cmNav">
          <ul class="navbar-nav d-md-flex flex-md-row gap-md-3 mb-0 list-unstyled my-2 my-md-0">
            <li><a class="nav-link ${active === 'home' ? 'text-white fw-semibold' : ''}" href="/cinemanager/index.html">Inicio</a></li>
            <li><a class="nav-link ${active === 'salas' ? 'text-white fw-semibold' : ''}" href="/cinemanager/salas.html">Salas</a></li>
            <li><a class="nav-link ${active === 'cartelera' ? 'text-white fw-semibold' : ''}" href="/cinemanager/index.html#cartelera">Cartelera</a></li>
            <li><a class="nav-link ${active === 'perfil' ? 'text-white fw-semibold' : ''}" href="/cinemanager/perfil.html">Mi cuenta</a></li>
            <li><a class="nav-link ${isAdmin ? 'text-white fw-semibold' : ''}" href="/cinemanager/admin/index.html">Admin</a></li>
          </ul>
          <div class="d-flex gap-2">
            <a href="/cinemanager/login.html" class="btn btn-sm cm-btn-outline">Entrar</a>
            <a href="/cinemanager/registro.html" class="btn btn-sm cm-btn-primary">Registro</a>
          </div>
        </div>
      </div>
    </nav>`;
    };

    window.CM_renderFooter = function () {
        return `
    <footer class="cm-footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="cm-brand mb-2">Cine<span>Manager</span></div>
            <p class="small mb-0">Tu cine de confianza. Estrenos, salas premium y la mejor experiencia cinematográfica.</p>
          </div>
          <div class="col-6 col-md-2">
            <h6 class="text-white">Cine</h6>
            <ul class="list-unstyled small">
              <li><a href="/cinemanager/index.html">Cartelera</a></li>
              <li><a href="/cinemanager/salas.html">Salas</a></li>
              <li><a href="#">Promociones</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-2">
            <h6 class="text-white">Cuenta</h6>
            <ul class="list-unstyled small">
              <li><a href="/cinemanager/login.html">Entrar</a></li>
              <li><a href="/cinemanager/registro.html">Registrarse</a></li>
              <li><a href="/cinemanager/perfil.html">Mi perfil</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h6 class="text-white">Contacto</h6>
            <p class="small mb-1"><i class="bi bi-geo-alt"></i> Av. del Cine 42, Plasencia</p>
            <p class="small mb-1"><i class="bi bi-telephone"></i> +34 927 000 000</p>
            <p class="small mb-0"><i class="bi bi-envelope"></i> hola@cinemanager.es</p>
          </div>
        </div>
        <hr class="border-secondary mt-4">
        <p class="small text-center mb-0">© 2026 CineManager — Proyecto DAW IES Valle del Jerte</p>
      </div>
    </footer>`;
    };

    // Tarjeta de película
    window.CM_movieCard = function (m) {
        return `
    <div class="col-6 col-md-4 col-lg-3">
      <a href="/cinemanager/pelicula.html?id=${m.id}" class="cm-card d-block h-100">
        <img class="cm-poster" src="${m.poster}" alt="Cartel de ${m.title}" loading="lazy">
        <div class="p-3">
          <div class="d-flex justify-content-between align-items-start gap-2">
            <h3 class="h6 mb-1 text-white">${m.title}</h3>
            <span class="cm-rating small">★ ${m.score}</span>
          </div>
          <div class="d-flex flex-wrap gap-1 mt-2">
            <span class="cm-chip">${m.genre}</span>
            <span class="cm-chip">${m.duration} min</span>
            <span class="cm-chip">${m.rating}</span>
          </div>
        </div>
      </a>
    </div>`;
    };

    // Hero carrusel
    window.CM_initHero = function (el) {
        const featured = window.CM_MOVIES.slice(0, 4);
        el.innerHTML = `
      ${featured.map((m, i) => `<div class="slide ${i === 0 ? 'active' : ''}" style="background-image:url('${m.backdrop}')"></div>`).join('')}
      <div class="container hero-content">
        <span class="cm-chip mb-3"><i class="bi bi-stars"></i> Destacado</span>
        <h1 id="heroTitle" class="display-5 fw-bold text-white">${featured[0].title}</h1>
        <p id="heroDesc" class="lead text-light opacity-75 mb-3" style="max-width:640px">${featured[0].synopsis}</p>
        <div class="d-flex gap-2 flex-wrap">
          <a id="heroCta" href="/cinemanager/pelicula.html?id=${featured[0].id}" class="btn cm-btn-primary px-4 py-2"><i class="bi bi-ticket-perforated"></i> Comprar entradas</a>
          <a href="/cinemanager/salas.html" class="btn cm-btn-outline px-4 py-2"><i class="bi bi-collection-play"></i> Ver salas</a>
        </div>
      </div>`;
        let idx = 0;
        setInterval(() => {
            const slides = el.querySelectorAll('.slide');
            slides[idx].classList.remove('active');
            idx = (idx + 1) % featured.length;
            slides[idx].classList.add('active');
            const m = featured[idx];
            el.querySelector('#heroTitle').textContent = m.title;
            el.querySelector('#heroDesc').textContent = m.synopsis;
            el.querySelector('#heroCta').href = `/cinemanager/pelicula.html?id=${m.id}`;
        }, 5000);
    };

    // Toast simple
    window.CM_toast = function (msg, kind = 'ok') {
        const colors = { ok: '#22c55e', err: '#ef4444', warn: '#f59e0b' };
        const t = document.createElement('div');
        t.className = 'position-fixed bottom-0 end-0 m-3 p-3 rounded shadow';
        t.style.cssText = `background:#13161d;border:1px solid ${colors[kind]};color:#fff;z-index:9999;min-width:240px`;
        t.innerHTML = `<i class="bi bi-check-circle me-2" style="color:${colors[kind]}"></i>${msg}`;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 2800);
    };

    // Mapa de butacas
    window.CM_renderSeats = function (container, room) {
        const rows = 6, cols = 10;
        const total = rows * cols;
        container.innerHTML = `<div class="cm-screen"></div><div class="text-center text-secondary small mb-2">PANTALLA</div><div id="seatsGrid" class="d-flex flex-column gap-2 align-items-center"></div>
    <div class="d-flex justify-content-center gap-4 mt-4 small text-secondary">
      <span><span class="cm-seat free me-1"></span> Libre</span>
      <span><span class="cm-seat sel me-1"></span> Seleccionado</span>
      <span><span class="cm-seat occ me-1"></span> Ocupado</span>
    </div>
    <div class="text-center mt-3"><span class="text-secondary small">Seleccionados:</span> <strong id="seatCount">0</strong> · <span class="text-secondary small">Total:</span> <strong id="seatTotal">0,00 €</strong></div>`;
        const grid = container.querySelector('#seatsGrid');
        const occupiedSet = new Set();
        while (occupiedSet.size < (room.occupied || 0)) occupiedSet.add(Math.floor(Math.random() * total));
        for (let r = 0; r < rows; r++) {
            const row = document.createElement('div');
            row.className = 'd-flex gap-1';
            for (let c = 0; c < cols; c++) {
                const idx = r * cols + c;
                const seat = document.createElement('span');
                const occ = occupiedSet.has(idx);
                seat.className = `cm-seat ${occ ? 'occ' : 'free'}`;
                seat.textContent = String.fromCharCode(65 + r) + (c + 1);
                seat.setAttribute('role', 'button');
                seat.setAttribute('aria-label', `Butaca ${seat.textContent}${occ ? ' ocupada' : ''}`);
                if (!occ) seat.addEventListener('click', () => {
                    seat.classList.toggle('sel');
                    seat.classList.toggle('free');
                    const sel = grid.querySelectorAll('.cm-seat.sel').length;
                    container.querySelector('#seatCount').textContent = sel;
                    container.querySelector('#seatTotal').textContent = (sel * (room.price || 8)).toFixed(2).replace('.', ',') + ' €';
                });
                row.appendChild(seat);
            }
            grid.appendChild(row);
        }
    };
})();
