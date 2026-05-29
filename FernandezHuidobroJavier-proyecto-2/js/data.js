// Datos compartidos (mock) para CineManager
window.CM_MOVIES = [
    {
        id: 1, title: "Dune: Parte Tres", genre: "Ciencia ficción", duration: 165, rating: "12+", score: 8.7,
        director: "Denis Villeneuve", cast: "Timothée Chalamet, Zendaya, Florence Pugh",
        synopsis: "Paul Atreides continúa su viaje a través de Arrakis enfrentando nuevas amenazas en la galaxia.",
        poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/87cyDA7XBJWQ8Y7XwBEFcPlafIm.jpg"
    },
    {
        id: 2, title: "Oppenheimer", genre: "Drama histórico", duration: 180, rating: "16+", score: 8.4,
        director: "Christopher Nolan", cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
        synopsis: "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg"
    },
    {
        id: 3, title: "Blade Runner 2099", genre: "Ciencia ficción", duration: 140, rating: "16+", score: 7.9,
        director: "Jonathan Nolan", cast: "Ana de Armas, Hunter Schafer",
        synopsis: "En un futuro distópico, una nueva generación de replicantes desafía el orden establecido.",
        poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/ilRyazdMJwN05exqhwK4tMKBYZs.jpg"
    },
    {
        id: 4, title: "Interstellar: Redux", genre: "Aventura", duration: 169, rating: "12+", score: 9.0,
        director: "Christopher Nolan", cast: "Matthew McConaughey, Anne Hathaway",
        synopsis: "Un equipo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg"
    },
    {
        id: 5, title: "The Batman II", genre: "Acción", duration: 155, rating: "16+", score: 8.2,
        director: "Matt Reeves", cast: "Robert Pattinson, Zoë Kravitz",
        synopsis: "Batman se enfrenta a una nueva amenaza en las sombras de Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
    },
    {
        id: 6, title: "Spider-Verse 3", genre: "Animación", duration: 130, rating: "7+", score: 8.8,
        director: "Joaquim Dos Santos", cast: "Shameik Moore, Hailee Steinfeld",
        synopsis: "Miles Morales emprende una nueva aventura a través del multiverso arácnido.",
        poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucfxbboz.jpg"
    },
];

window.CM_ROOMS = [
    { id: 1, name: "Sala 1 IMAX", capacity: 120, occupied: 84, movieId: 1, schedules: ["16:00", "19:00", "22:15"], price: 9.5 },
    { id: 2, name: "Sala 2", capacity: 80, occupied: 32, movieId: 2, schedules: ["17:30", "20:30"], price: 7.5 },
    { id: 3, name: "Sala 3 VIP", capacity: 40, occupied: 38, movieId: 4, schedules: ["18:00", "21:30"], price: 12 },
    { id: 4, name: "Sala 4", capacity: 100, occupied: 55, movieId: 5, schedules: ["16:30", "19:30", "22:30"], price: 8 },
    { id: 5, name: "Sala 5", capacity: 90, occupied: 12, movieId: 6, schedules: ["16:00", "18:00", "20:00"], price: 7 },
    { id: 6, name: "Sala 6 Dolby", capacity: 110, occupied: 70, movieId: 3, schedules: ["17:00", "20:00", "23:00"], price: 9 },
];

window.CM_USERS = [
    { id: 1, name: "Lucía Fernández", email: "lucia@example.com", role: "admin", since: "2024-09-12" },
    { id: 2, name: "Mario Pérez", email: "mario@example.com", role: "user", since: "2025-01-04" },
    { id: 3, name: "Andrea Gómez", email: "andrea@example.com", role: "user", since: "2025-03-22" },
    { id: 4, name: "Javier Ruiz", email: "javier@example.com", role: "user", since: "2025-05-19" },
];

window.CM_findMovie = (id) => window.CM_MOVIES.find(m => m.id === Number(id));
