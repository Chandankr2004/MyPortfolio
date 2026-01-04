# Project Structure Documentation

This document explains the organized structure of the portfolio website codebase.

## Directory Structure

```
MypoprtfolioNew/
├── public/                  # Static assets (resume, images, etc.)
├── src/
│   ├── components/          # React UI Components
│   │   ├── Navbar.jsx       # Navigation bar with active section highlighting
│   │   ├── Hero.jsx       # Hero section with CTA buttons
│   │   ├── About.jsx       # About me section
│   │   ├── Skills.jsx      # Skills showcase
│   │   ├── Experience.jsx  # Work experience and internships
│   │   ├── Projects.jsx    # Projects showcase with cards
│   │   ├── Certifications.jsx # Certifications grid
│   │   └── Contact.jsx     # Contact information and social links
│   │
│   ├── constants/          # Data and Configuration Files
│   │   ├── navItems.js     # Navigation menu items
│   │   ├── personalInfo.js # Personal information (name, email, etc.)
│   │   ├── education.js    # Education details
│   │   ├── skills.js       # Skills data with icons
│   │   ├── experience.js   # Work experience data
│   │   ├── projects.js     # Projects data
│   │   ├── certifications.js # Certifications data
│   │   └── socialLinks.js  # Social media links
│   │
│   ├── hooks/              # Custom React Hooks
│   │   └── useDarkMode.js  # Dark mode toggle hook with localStorage
│   │
│   ├── utils/              # Utility Functions
│   │   ├── scrollToSection.js # Smooth scroll utility
│   │   └── downloadResume.js  # Resume download handler
│   │
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
│
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project documentation
```

## Code Organization Principles

### 1. **Separation of Concerns**
   - **Components**: Only handle UI rendering and user interactions
   - **Constants**: Store all static data and configuration
   - **Hooks**: Reusable stateful logic
   - **Utils**: Pure utility functions

### 2. **Data Centralization**
   - All personal information is stored in `constants/personalInfo.js`
   - All content data (projects, skills, etc.) is in separate constant files
   - Easy to update without touching component logic

### 3. **Reusability**
   - Custom hooks can be reused across components
   - Utility functions are pure and testable
   - Constants can be imported wherever needed

### 4. **Maintainability**
   - Clear folder structure
   - Single responsibility principle
   - Easy to locate and update specific data

## File Responsibilities

### Components (`src/components/`)
Each component is responsible for:
- Rendering its section of the portfolio
- Handling user interactions within that section
- Using data from constants
- Managing its own animations and styling

### Constants (`src/constants/`)
- **navItems.js**: Navigation menu configuration
- **personalInfo.js**: Personal details, contact info, resume URL
- **education.js**: Academic background
- **skills.js**: Technical skills with icons
- **experience.js**: Work history
- **projects.js**: Project portfolio
- **certifications.js**: Certifications list
- **socialLinks.js**: Social media profiles

### Hooks (`src/hooks/`)
- **useDarkMode.js**: Manages dark/light theme state and persistence

### Utils (`src/utils/`)
- **scrollToSection.js**: Smooth scrolling to page sections
- **downloadResume.js**: Handles resume download functionality

## Benefits of This Structure

1. **Easy Updates**: Change personal info in one place
2. **Scalability**: Easy to add new sections or features
3. **Testability**: Pure functions and separated logic
4. **Readability**: Clear organization makes code easy to understand
5. **Collaboration**: Team members can work on different parts without conflicts

## Adding New Features

### To add a new section:
1. Create component in `src/components/`
2. Add data to appropriate file in `src/constants/`
3. Import and use in `App.jsx`
4. Add navigation item in `src/constants/navItems.js`

### To add new utility:
1. Create function in `src/utils/`
2. Export and import where needed

### To add new hook:
1. Create hook in `src/hooks/`
2. Export and use in components

## Best Practices

- ✅ Keep components focused on UI
- ✅ Store all data in constants
- ✅ Use hooks for stateful logic
- ✅ Keep utility functions pure
- ✅ Follow consistent naming conventions
- ✅ Export/import clearly

