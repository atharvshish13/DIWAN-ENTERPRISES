# Diwan Enterprises - Official Corporate Website

A complete, modern, high-performance, and responsive website built for **DIWAN ENTERPRISES**.

> **Brand Tagline:** *We Provide the Best Business Solutions.*  
> **Brand Colors:** Deep Dark Navy (`#022429`), White (`#FFFFFF`), and Lime Green (`#D8DC6B`).

---

## 🌟 Project Overview

This website was built using authentic source assets extracted directly from the provided source PDFs (`DE FULL 2026.pdf` and `DE SHORT 26.pdf`). Every photograph, client logo, and piece of business information is 100% authentic to Diwan Enterprises.

### 📄 Pages Included:
1. **[index.html](index.html)** - Comprehensive Homepage (Hero, Intro, Core Services, Van Bill Process, Why Choose Us, Clients, Featured Projects, Contact Form, Footer).
2. **[about.html](about.html)** - About Us (Company Overview, Experience, Vision, Mission, Core Pillars, Verification Protocol, Central India Network).
3. **[services.html](services.html)** - Our Services (All 17 core services detailed with real portfolio photographs and enquiry CTAs).
4. **[portfolio.html](portfolio.html)** - Project Portfolio (Filterable gallery with interactive lightbox).
5. **[clients.html](clients.html)** - Our Clients (45 client logos, including TVS, Bayer, Syngenta, UPL, Corteva, Mahindra Tractors, Eicher, Amul, IFFCO, FMC, Yara, Biostadt, and AICL).
6. **[gallery.html](gallery.html)** - Photo Gallery (Project photographs and the full supplied photo and video collection).
7. **[contact.html](contact.html)** - Contact Us (Click-to-call, email, WhatsApp, Google Maps, and online enquiry form).

---

## ⚠️ Source PDF Conflict Disclosure

Per project instructions, we explicitly flag the following discrepancy identified in the source files:
- **`DE FULL 2026.pdf` (Primary Reference):** Consistently presents **Diwan Enterprises** (*"We Provide the Best Business Solutions"*), with registered Head Office at `Plot No. 30, Near Bhavani Mandir, Wadgaon Mahure, Zavar Layout, Wadgaon, Amravati, Maharashtra 444602`, direct phone `9420484823`, and email `diwantushar80@gmail.com`. Coverage includes: Akola, Nagpur, Jalna, Nashik, Sangli, Indore (MP), Raipur (CG), Ahmedabad (GJ), Karnataka, and Telangana.
- **`DE SHORT 26.pdf` (Supplementary):** Page 4 contains an introductory line: *"Introducing ourselves as Shri Multy Services, Vehicle Campaign, POP, Corporate gift & Organize Meeting..."*, while displaying the **Diwan Enterprises** logo, address, and phone number on the same page.
- **Resolution:** As instructed, **Diwan Enterprises** is used strictly and consistently as the website brand across all pages, titles, meta tags, and schema data.

---

## 🎨 Asset Structure

```
DIwan/
├── index.html                  # Homepage
├── about.html                  # About Us
├── services.html               # Our Services (17 services)
├── portfolio.html              # Filterable Project Portfolio
├── clients.html                # 45+ Enterprise Client Logos
├── gallery.html                # Authentic Photo Gallery
├── contact.html                # Contact Us with Form & Google Map
├── README.md                   # Setup and deployment documentation
├── Photoes/                    # Campaign photos and video shown in the media library
├── Visiting card/               # Downloadable visiting-card images
├── DE FULL 2026.pdf             # Full company brochure
├── DE SHORT 26.pdf              # Short company brochure
├── assets/
│   ├── css/
│   │   ├── style.css           # Modern CSS3 with responsive grid & typography
│   │   └── media-library.css   # Responsive media gallery styles
│   ├── js/
│   │   ├── main.js             # Mobile nav, filters, lightbox, and form validation
│   │   └── media-library.js    # Photoes folder media catalog and gallery filters
│   ├── data.json               # Structured JSON catalog of all assets
│   └── img/
│       ├── logo/               # Authentic extracted logo, badge, and favicon
│       ├── clients_clean/      # 45 cropped high-res enterprise client logos
│       ├── hero/               # High-res campaign hero background
│       └── portfolio/          # Real field photography organized by category:
│           ├── van-branding/
│           ├── tvs-branding/
│           ├── shop-branding/
│           ├── hoardings-boards/
│           ├── hoarding-process/
│           ├── meetings/
│           ├── crop-shows/
│           ├── agro-expo/
│           └── promotional-materials/
```

---

## 🚀 How to Run & Deploy

### Option 1: Local Browsing
Simply double-click or open `index.html` in any web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).

### Option 2: Local HTTP Server (Python)
Run the following command in terminal:
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

### Option 3: Production Deployment
This website is 100% static (HTML5/CSS3/JavaScript) with zero build step required:
- Drag and drop into **Netlify**, **Vercel**, or **Firebase Hosting**.
- Push to **GitHub** and enable **GitHub Pages**.
- Upload directly to any standard cPanel or Apache/Nginx web server.

---

## 📱 Features & Highlights
- **100% Responsive:** Optimized across mobile smartphones, tablets, laptops, and ultra-wide desktops.
- **Authentic Branding:** Direct extraction of the original navy/lime badge logo, client logos, and real field photography.
- **Interactive Lightbox:** Click any project photo to zoom, browse next/prev, and view captions.
- **Instant WhatsApp Integration:** Connected directly to `+91 9420484823` with pre-filled enquiry parameters.
- **Full Form Validation:** Instant feedback on Name, 10-digit mobile number, email, and message.
- **Embedded Google Maps:** Accurately pinned to Wadgaon Mahure, Zavar Layout, Wadgaon, Amravati 444602.
- **SEO Ready:** Complete Open Graph tags, canonical links, and Schema.org `LocalBusiness` JSON-LD structured data.
