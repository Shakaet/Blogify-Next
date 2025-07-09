# 🚀 Blogify – Modern Blog Platform Built with Next.js

![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-blue?style=for-the-badge&logo=tailwind-css)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)

Blogify is a sleek, modern, and lightning-fast blog platform built using **Next.js App Router**, **Tailwind CSS**, and **Vercel**. This project displays dynamic blog details using route parameters and renders markdown-style content using HTML safely.

---

## 📸 Demo

👉 [Live Site on Vercel](https://blogify-next-p3f2.vercel.app/)  


---

## 🧠 Features

- ✅ Dynamic route-based blog pages (e.g. `/blog/[title]`)
- ✅ SEO-friendly static generation using App Router
- ✅ Tailwind CSS for utility-first responsive UI
- ✅ Blog data powered by a JSON array (or API-ready)
- ✅ Clean HTML rendering from description fields
- ✅ 404 Not Found Page for unknown routes
- ✅ Fully responsive design

---

## 🧾 Technologies Used

- **Next.js 13+ (App Router)**
- **Tailwind CSS**
- **React**
- **HTML rendering with `dangerouslySetInnerHTML`**
- **Deployed on Vercel**

---

## 📁 Folder Structure

```bash
📦app/
├── 📁blog/
│   └── 📄[title]/page.js          # Dynamic blog post page
├── 📁component/
│   ├── 📄AllData.jsx              # Renders all blog data/cards
│   ├── 📄BlogDescription.jsx      # Displays full blog content
│   ├── 📄Filtering.jsx            # Category or tag filtering UI
│   ├── 📄MobileMenu.jsx           # Responsive navigation menu
│   └── 📄SortSelect.jsx           # Sorting dropdown or logic
├── 📄globals.css                  # Global Tailwind CSS styles
├── 📄layout.js                    # Common layout (e.g. header/footer)
└── 📄page.js                      # Home page with blog list

📦public/                          # Static files like images

📄next.config.js                   # Next.js configuration
📄package.json                     # Dependencies and scripts
📄README.md                        # Project documentation



```bash
📦app/
├── 📁blog/
│   └── 📄[title]/page.js        # Dynamic blog page based on blog title
├── 📁component/
│   └── 📄Filtering.jsx          # Category filter component (optional)
├── 📄globals.css                # Global styles using Tailwind CSS
├── 📄layout.js                  # Root layout component
└── 📄page.js                    # Homepage that lists all blog posts

📦public/                        # Static assets (images, etc.)

📄next.config.js                 # Next.js configuration
📄package.json                   # Project metadata and dependencies
📄README.md                      # Project documentation

