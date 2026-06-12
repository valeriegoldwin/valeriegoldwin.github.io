# Portfolio Customization Guide

## 📝 Main Content File
All your portfolio content is stored in one place: `/app/frontend/src/data/mock.js`

## 🎯 What You Can Edit

### 1. **Personal Information (Hero Section)**
```javascript
hero: {
  name: "Your Name",              // Change to your name
  title: "UI/UX Designer",        // Your job title
  tagline: "Your tagline here",   // Your professional tagline
  cta: "View My Work"             // Button text
}
```

### 2. **About Section**
```javascript
about: {
  heading: "About Me",
  intro: "Your introduction paragraph...",
  points: [
    "Your expertise point 1",
    "Your expertise point 2",
    "Your expertise point 3",
    "Your expertise point 4"
  ]
}
```

### 3. **Featured Project (Case Study)**
```javascript
featuredProject: {
  title: "Your Project Name",
  category: "Mobile App Design",
  year: "2024",
  role: "Lead UX/UI Designer",
  overview: "Project overview...",
  challenge: "The problem you solved...",
  solution: "Your solution...",
  process: [
    { phase: "Research", description: "What you did..." },
    { phase: "Ideation", description: "What you did..." },
    // Add or remove phases as needed
  ],
  results: [
    "Result metric 1",
    "Result metric 2",
    "Result metric 3"
  ],
  tools: ["Figma", "Sketch", "etc"],
  image: "https://your-image-url.com/image.jpg"
}
```

### 4. **Other Projects**
```javascript
projects: [
  {
    id: 2,
    title: "Project Name",
    category: "Web Application",
    description: "Short description...",
    image: "https://image-url.com",
    tags: ["Tag1", "Tag2"]
  },
  // Add more projects by copying this structure
]
```

### 5. **Skills**
```javascript
skills: [
  {
    category: "Design Tools",
    items: ["Figma", "Sketch", "Adobe XD", "Principle"]
  },
  {
    category: "Your Category",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  }
  // Add or remove skill categories
]
```

### 6. **Contact Information**
```javascript
contact: {
  heading: "Let's Work Together",
  description: "Your message...",
  email: "your.email@example.com",
  linkedin: "linkedin.com/in/yourprofile",
  twitter: "@yourhandle"
}
```

## 🖼️ How to Change Images

### Option 1: Use Online Images (Current Method)
Replace the image URLs in mock.js:
```javascript
image: "https://your-image-hosting.com/your-image.jpg"
```

**Free Image Sources:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Freepik: https://freepik.com

### Option 2: Use Your Own Images
1. Create folder: `/app/frontend/public/images`
2. Add your images there
3. Reference them in mock.js:
```javascript
image: "/images/your-image.jpg"
```

## ➕ How to Add More Projects

In `/app/frontend/src/data/mock.js`, add to the projects array:
```javascript
projects: [
  // Existing projects...
  {
    id: 5,  // Increment the ID
    title: "New Project Name",
    category: "Category",
    description: "Description...",
    image: "https://image-url.com",
    tags: ["Tag1", "Tag2"]
  }
]
```

## 🗑️ How to Remove Projects

Simply delete the project object from the array in mock.js

## 🎨 How to Change Colors

Edit `/app/frontend/src/index.css` to change the color scheme:
```css
:root {
  --background: 0 0% 100%;      /* White background */
  --foreground: 0 0% 3.9%;      /* Text color */
  --primary: 0 0% 9%;           /* Primary color (buttons, accents) */
  /* ... other colors */
}
```

For buttons and specific elements, edit the component files in `/app/frontend/src/components/`

## 📝 Quick Edit Steps

1. **Open the file:**
   ```
   /app/frontend/src/data/mock.js
   ```

2. **Edit your content** (name, projects, skills, etc.)

3. **Save the file** - Changes will appear automatically (hot reload is enabled)

4. **View your changes** at:
   https://interface-lab-25.preview.emergentagent.com

## 🚀 Need More Changes?

Just tell me what you want to change:
- "Change the hero background color"
- "Add more projects"
- "Change button styles"
- "Add a new section"
- "Update contact information"

I'll help you make any modifications!
