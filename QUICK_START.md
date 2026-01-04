# Quick Start Guide - Running the Portfolio Website

Follow these steps to run the portfolio website on your local machine.

## Prerequisites

Before starting, make sure you have the following installed:

- **Node.js** (version 16 or higher)
  - Check if installed: `node --version`
  - Download from: https://nodejs.org/

- **npm** (comes with Node.js)
  - Check if installed: `npm --version`

## Step-by-Step Instructions

### Step 1: Open Terminal/Command Prompt

- **Windows**: Press `Win + R`, type `cmd` or `powershell`, press Enter
- **Mac/Linux**: Open Terminal application
- **VS Code**: Press `` Ctrl + ` `` (backtick) to open integrated terminal

### Step 2: Navigate to Project Directory

```bash
cd D:\Projects\MypoprtfolioNew
```

Or if you're in a different location:
```bash
cd path/to/MypoprtfolioNew
```

### Step 3: Install Dependencies

Install all required packages (React, Vite, Tailwind CSS, Framer Motion, etc.):

```bash
npm install
```

**What this does:**
- Downloads all dependencies listed in `package.json`
- Creates `node_modules` folder
- This may take 1-3 minutes depending on your internet speed

**Expected output:**
```
added 234 packages, and audited 235 packages in 45s
```

### Step 4: Start Development Server

Run the development server:

```bash
npm run dev
```

**What this does:**
- Starts Vite development server
- Compiles your React code
- Enables hot module replacement (auto-refresh on changes)

**Expected output:**
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 5: Open in Browser

1. The terminal will show a local URL (usually `http://localhost:5173/`)
2. **Option 1**: Press `Ctrl + Click` on the URL in terminal
3. **Option 2**: Copy the URL and paste it in your browser
4. **Option 3**: Manually open browser and go to `http://localhost:5173/`

### Step 6: View Your Portfolio

Your portfolio website should now be running! You can:
- Navigate through all sections
- Test dark/light mode toggle
- Check responsive design by resizing browser
- Make changes to code and see them update automatically

## Additional Commands

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run build
npm run preview
```

### Stop the Development Server

Press `Ctrl + C` in the terminal to stop the server.

## Troubleshooting

### Issue: `npm: command not found`

**Solution**: Install Node.js from https://nodejs.org/

### Issue: `Error: ENOENT: no such file or directory`

**Solution**: Make sure you're in the correct project directory. Use `pwd` (Mac/Linux) or `cd` (Windows) to check.

### Issue: Port 5173 already in use

**Solution**: 
- Close other applications using port 5173
- Or change port in `vite.config.js`:
  ```js
  export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000  // Change to any available port
    }
  })
  ```

### Issue: Dependencies installation fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json  # Mac/Linux
rmdir /s node_modules package-lock.json  # Windows

# Reinstall
npm install
```

### Issue: Module not found errors

**Solution**: Make sure all dependencies are installed:
```bash
npm install
```

## Quick Reference

| Command | Purpose |
|--------|---------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `Ctrl + C` | Stop the server |

## Next Steps

Once the website is running:

1. **Customize Content**: Edit files in `src/constants/` to update your information
2. **Add Resume**: Place your resume PDF in `public/` folder and update `personalInfo.js`
3. **Update Links**: Add your actual GitHub, LinkedIn, and project links
4. **Deploy**: Build and deploy to Vercel, Netlify, or your preferred hosting

## Need Help?

- Check the main `README.md` for detailed documentation
- Review `STRUCTURE.md` for code organization
- Ensure Node.js version is 16+ (`node --version`)

