# 🌌 Solar System 3D Visualization (Three.js + React + Vite)

An interactive and responsive 3D solar system simulation built with **React**, **Three.js**, and **React Three Fiber**. It provides a realistic visualization of planetary orbits, rotation, and more — all optimized for performance and responsiveness.

---

## 🚀 Features

- ☀️ Realistic sun with glowing corona and light emission  
- 🪐 Orbiting planets with adjustable speeds  
- 🌀 White orbit rings for each planet  
- 🧭 Camera modes: Free roam and Follow planet  
- 🖱️ Mouse interactions: Drag, Zoom, Click to focus  
- 📱 Fully responsive (mobile and desktop optimized)  
- 🧠 Performance-optimized with lazy loading and suspensions  
- 🖥️ Smooth scaling and responsiveness across all devices  

---

## 🛠️ Tech Stack

| Technology         | Purpose                          |
|--------------------|----------------------------------|
| React              | UI Framework                     |
| TypeScript         | Type Safety                      |
| Three.js           | 3D Rendering                     |
| @react-three/fiber | React bindings for Three.js      |
| @react-three/drei  | Useful helpers for Three.js      |
| Tailwind CSS       | Utility-first styling            |
| Vite               | Fast dev server and bundler      |

---

## 📁 Project Structure

Directory structure:
└── pratham22r-solarsystemthreejs.git/
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── public/
    │   └── robots.txt
    └── src/
        ├── App.css
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── components/
        │   ├── SolarSystem.tsx
        │   ├── SolarSystem/
        │   │   ├── CameraController.tsx
        │   │   ├── constants.ts
        │   │   ├── ControlsPanel.tsx
        │   │   ├── index.tsx
        │   │   ├── InfoOverlay.tsx
        │   │   ├── LoadingFallback.tsx
        │   │   ├── Planet.tsx
        │   │   ├── SaturnRings.tsx
        │   │   ├── Scene.tsx
        │   │   ├── Sun.tsx
        │   │   └── type.ts
        │   └── ui/
        │       ├── accordion.tsx
        │       ├── alert-dialog.tsx
        │       ├── alert.tsx
        │       ├── aspect-ratio.tsx
        │       ├── avatar.tsx
        │       ├── badge.tsx
        │       ├── breadcrumb.tsx
        │       ├── button.tsx
        │       ├── calendar.tsx
        │       ├── card.tsx
        │       ├── carousel.tsx
        │       ├── chart.tsx
        │       ├── checkbox.tsx
        │       ├── collapsible.tsx
        │       ├── command.tsx
        │       ├── context-menu.tsx
        │       ├── dialog.tsx
        │       ├── drawer.tsx
        │       ├── dropdown-menu.tsx
        │       ├── form.tsx
        │       ├── hover-card.tsx
        │       ├── input-otp.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       ├── menubar.tsx
        │       ├── navigation-menu.tsx
        │       ├── pagination.tsx
        │       ├── popover.tsx
        │       ├── progress.tsx
        │       ├── radio-group.tsx
        │       ├── resizable.tsx
        │       ├── scroll-area.tsx
        │       ├── select.tsx
        │       ├── separator.tsx
        │       ├── sheet.tsx
        │       ├── sidebar.tsx
        │       ├── skeleton.tsx
        │       ├── slider.tsx
        │       ├── sonner.tsx
        │       ├── switch.tsx
        │       ├── table.tsx
        │       ├── tabs.tsx
        │       ├── textarea.tsx
        │       ├── toast.tsx
        │       ├── toaster.tsx
        │       ├── toggle-group.tsx
        │       ├── toggle.tsx
        │       ├── tooltip.tsx
        │       └── use-toast.ts
        ├── hooks/
        │   ├── use-mobile.tsx
        │   └── use-toast.ts
        ├── lib/
        │   └── utils.ts
        └── pages/
            ├── Index.tsx
            └── NotFound.tsx

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Pratham22R/SolarSystemThreeJS.git
cd SolarSystemThreeJS
npm install
npm run dev
Visit: http://localhost:5173

---

---

Author : [Shatakshi](https://github.com/shatakshirajput)