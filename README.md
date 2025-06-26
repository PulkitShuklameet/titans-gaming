# 🎮 Titans Gaming – Official Website

Welcome to the official **Titans Gaming** website – a modern, immersive, anime-and-gaming-themed site developed by **Pulkit Shukla**, an aspiring developer from Lucknow, India.  

This site combines the thrill of gaming, the aesthetics of anime (especially *Attack on Titan*), and interactive user experience to bring your visitors into a futuristic digital gaming universe.

---

## 🧑‍💻 About the Developer

**Name:** Pulkit Shukla  
**Course:** BCA (Bachelor of Computer Applications)  
**From:** Lucknow University  
**Passion:** Games, Development, and Anime since childhood  
**Favorite Anime:** *Attack on Titan* – its concept of Titans being “hungry” deeply inspired this site’s theme.

---

## 🌐 Live Preview

📍 Hosted via **GitHub Pages**  
🔗 [Visit Titans Gaming Live](https://yourusername.github.io/TitansGaming/)  
> *(Replace with your actual link once deployed)*

---

## 🗂️ Project Structure

```bash
TitansGaming/
│
├── index.html              # Homepage with hero section and cards
├── nexus.html              # Nexus features and showcase
├── vault.html              # Vault details & digital assets
├── services.html           # Gaming and creative services
├── about.html              # Developer & inspiration story
├── contact.html            # Contact form with email + WhatsApp
│
├── style.css               # Global custom styling & layout
├── script.js               # Video slider and dynamic behavior
│
├── /img/                   # Images (logo, contact illustrations, icons)
│   ├── logo.png
│   ├── stones.png
│   ├── about.webp
│   ├── contact-1.webp
│   └── ...
│
├── /video/                 # Background and card videos
│   ├── hero-1.mp4
│   ├── feature-1.mp4
│   └── ...
│
└── README.md               # This project description file




---

## 🔧 Tech Stack Used

| Technology | Role                                |
|------------|-------------------------------------|
| HTML5      | Page structure                      |
| CSS3       | Gradients, responsiveness, styling  |
| JavaScript | Video handling + email integration  |
| EmailJS    | Sends email from contact form       |
| Boxicons   | Icon set used across pages          |
| GitHub     | Hosting the project for free        |
| GitHub Pages | Free custom URL for live site    |

---

## 📬 Contact Form (Real Emails to Gmail)

✔️ Contact form sends real-time emails using [EmailJS](https://emailjs.com)

- **Service ID:** `service_r4raimt`  
- **Template ID:** `template_qmb4eeq`  
- **Public Key:** `nB9yAzFEuF1JmClJy`  
- ✅ Users send you messages from your site (without refreshing)
- ✅ They get real-time success/failure feedback

---

## ✏️ Header Component

```html
<header>
  <div class="head-left">
    <img src="img/logo.png" alt="logo" />
    <button onclick="window.location.href='products.html'">Products</button>
  </div>
  <div class="head-right">
    <p><a href="index.html">HOME</a></p>
    <p><a href="nexus.html">NEXUS</a></p>
    <p><a href="vault.html">VAULT</a></p>
    <p><a href="services.html">SERVICES</a></p>
    <p><a href="about.html">ABOUT</a></p>
    <p><a href="contact.html">CONTACT</a></p>
  </div>
</header>
