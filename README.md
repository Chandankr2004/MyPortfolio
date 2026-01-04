# Chandan Kumar - Portfolio Website

A modern, responsive, single-page portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Clean, minimal, developer-style UI
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎨 **Smooth Animations**: Framer Motion animations throughout
- 🎯 **Active Section Highlighting**: Navbar highlights current section
- ⚡ **Fast & Performant**: Built with Vite for optimal performance
- ♿ **Accessible**: SEO-friendly and accessible design

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── constants/           # Data and configuration
│   │   ├── navItems.js
│   │   ├── personalInfo.js
│   │   ├── education.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   └── socialLinks.js
│   ├── hooks/               # Custom React hooks
│   │   └── useDarkMode.js
│   ├── utils/               # Utility functions
│   │   ├── scrollToSection.js
│   │   └── downloadResume.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customization

### Update Personal Information

All personal data is centralized in the `src/constants/` folder for easy updates:

- **Personal Info**: Edit `src/constants/personalInfo.js` for name, role, tagline, email, location, and resume URL
- **Education**: Edit `src/constants/education.js` for degree, institution, CGPA, and description
- **Skills**: Edit `src/constants/skills.js` to add/remove skills and categories
- **Experience**: Edit `src/constants/experience.js` to update internships and work experience
- **Projects**: Edit `src/constants/projects.js` to add/update project details
- **Certifications**: Edit `src/constants/certifications.js` to update certifications
- **Social Links**: Edit `src/constants/socialLinks.js` to update social media links

### Update Navigation

Edit `src/constants/navItems.js` to modify navigation menu items.

### Add Resume

1. Place your resume PDF in the `public` folder
2. Update the `resumeUrl` in `src/constants/personalInfo.js` with the correct path

### Add Profile Image

1. Place your profile image in the `public` folder (recommended: `profile-image.jpg`)
2. Update the `imageUrl` in `src/constants/personalInfo.js` with the correct path
3. Recommended image size: 800x800px (square format)
4. If no image is provided, a default avatar will be shown

### Customize Colors

Edit `tailwind.config.js` to customize the color scheme.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy (automatic)

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms

The `dist` folder contains static files that can be deployed to any static hosting service.

## License

This project is open source and available under the MIT License.

## Contact

Chandan Kumar
- Email: chandanyadav2439@gmail.com
- Location: Jharkhand, India

