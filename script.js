/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* BODY */
body {
    background-color: #0d1117;
    color: white;
}

/* NAVBAR */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background-color: #111827;
    border-bottom: 1px solid #222;
}

.nav-left a,
.nav-right a {
    margin: 0 15px;
    text-decoration: none;
    color: white;
    font-weight: 500;
}

.nav-left a:hover,
.nav-right a:hover {
    color: #ffcc00;
}

/* LOGO CENTER */
.logo img {
    height: 60px;
}

/* HERO SECTION */
.hero {
    position: relative;
    text-align: center;
}

.hero img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    opacity: 0.6;
}

.hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero-text h1 {
    font-size: 40px;
    color: #ffcc00;
}

.hero-text p {
    font-size: 18px;
}

/* MENU SECTION */
.menu {
    padding: 40px;
}

.menu h2 {
    margin: 30px 0 15px;
    color: #ffcc00;
}

/* GRID */
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

/* CARD */
.card {
    background-color: #161b22;
    padding: 20px;
    text-align: center;
    border-radius: 12px;
    transition: 0.3s;
    border: 1px solid #222;
}

.card img {
    width: 100%;
    height: 120px;
    object-fit: contain;
}

.card h3 {
    margin: 10px 0;
}

.card p {
    color: #ffcc00;
    font-weight: bold;
}

/* HOVER EFFECT */
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 204, 0, 0.5);
}

/* HIGHLIGHT CARD (Ghost Rider style) */
.highlight {
    border: 2px solid #ffcc00;
    box-shadow: 0 0 20px rgba(255, 204, 0, 0.7);
}

/* FOOTER */
footer {
    text-align: center;
    padding: 20px;
    background-color: #111827;
    margin-top: 40px;
    font-size: 14px;
}
