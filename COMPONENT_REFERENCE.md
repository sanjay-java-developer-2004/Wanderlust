# 📚 Component Reference Guide

## Overview
This guide explains each component in the travel website and how to use/customize them.

## 1. **Navbar Component**
**File:** `src/Components/Navbar.jsx`

**Features:**
- Sticky navigation
- Dark/Light mode toggle
- Mobile hamburger menu
- Smooth transitions
- Blur effect on scroll

**Props:**
```javascript
<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
```

**Navigation Links:**
- Home
- Destinations
- Gallery
- Activities
- Contact

**Customization:**
```javascript
const navLinks = [
  { name: 'Your Link', href: '#your-section' },
  // Add more links
];
```

---

## 2. **Hero Component**
**File:** `src/Components/Hero.jsx`

**Features:**
- Full-screen background image
- Animated heading with gradient text
- Search destination input
- CTA buttons (Explore & Learn More)
- Floating decorative elements
- Scroll indicator

**Props:**
```javascript
<Hero darkMode={darkMode} />
```

**Customization:**
- Change background image URL
- Modify heading text
- Update button labels
- Adjust animation speeds

---

## 3. **Destinations Component**
**File:** `src/Components/Destinations.jsx`

**Features:**
- Grid of destination cards
- Rating display with stars
- Hover scaling animation
- Price display
- Responsive layout (1-4 columns)

**Data Source:** `src/data/destinations.js`

**Card Properties:**
```javascript
{
  id: 1,
  name: "Destination Name",
  country: "Country",
  image: "image-url",
  rating: 4.8,
  reviews: 2450,
  description: "Description",
  price: "$999",
  category: "tropical"
}
```

---

## 4. **Attractions Component**
**File:** `src/Components/Attractions.jsx`

**Features:**
- Grid layout (1-3 columns)
- Icon badges
- Hover scale animation
- Learn More buttons
- Image overlay

**Data Source:** `src/data/attractions.js`

**Card Properties:**
```javascript
{
  id: 1,
  name: "Mountain Trekking",
  icon: "⛰️",
  image: "image-url",
  description: "Description"
}
```

---

## 5. **Gallery Component**
**File:** `src/Components/Gallery.jsx`

**Features:**
- Masonry layout
- Category filtering
- Hover zoom effect
- Responsive grid
- Image overlays with titles

**Data Source:** `src/data/gallery.js`

**Categories:**
- all
- beaches
- mountains
- nature
- architecture

**Image Properties:**
```javascript
{
  id: 1,
  src: "image-url",
  category: "beaches",
  title: "Image Title"
}
```

---

## 6. **BestTime Component**
**File:** `src/Components/BestTime.jsx`

**Features:**
- Seasonal timeline (alternating layout)
- Weather information
- Temperature range
- Activities list
- Crowd level indicator
- Cost indicator

**Data Source:** `src/data/seasons.js`

**Season Properties:**
```javascript
{
  id: 1,
  season: "Spring",
  emoji: "🌸",
  weather: "Mild and pleasant",
  temperature: "15-25°C",
  activities: ["Hiking", "Photography"],
  crowdLevel: "Moderate",
  cost: "$$"
}
```

---

## 7. **TravelTips Component**
**File:** `src/Components/TravelTips.jsx`

**Features:**
- 4-column grid
- Icon display
- Bullet-point tips
- Responsive layout
- Colored borders

**Data Source:** `src/data/travelTips.js`

**Tip Properties:**
```javascript
{
  id: 1,
  title: "Best Foods",
  icon: "🍜",
  tips: ["Tip 1", "Tip 2", "Tip 3"]
}
```

---

## 8. **Activities Component**
**File:** `src/Components/Activities.jsx`

**Features:**
- Animated activity cards
- Color gradient backgrounds
- Icon display
- Hover effects
- Learn More buttons
- 4-column responsive grid

**Data Source:** `src/data/activities.js`

**Activity Properties:**
```javascript
{
  id: 1,
  name: "Hiking",
  icon: "🥾",
  description: "Explore scenic trails",
  color: "from-green-400 to-green-600"
}
```

---

## 9. **Statistics Component**
**File:** `src/Components/Statistics.jsx`

**Features:**
- Animated counters
- InView detection
- 2-4 column grid
- Gradient styling
- Hover effects

**Default Stats:**
- 1M+ Happy Travelers
- 250 Destinations
- 150 Hotels
- 98% Satisfaction Rate

**Customization:**
Edit the stats array in the component to show different numbers.

---

## 10. **Testimonials Component**
**File:** `src/Components/Testimonials.jsx`

**Features:**
- Star ratings (1-5 stars)
- Client avatars
- User names and countries
- Review text
- 3-column grid
- Hover effects

**Data Source:** `src/data/testimonials.js`

**Testimonial Properties:**
```javascript
{
  id: 1,
  name: "Client Name",
  country: "Country",
  avatar: "avatar-image-url",
  rating: 5,
  review: "Review text"
}
```

---

## 11. **FAQ Component**
**File:** `src/Components/FAQ.jsx`

**Features:**
- Accordion style
- Smooth collapse/expand
- Chevron icon rotation
- Hover effects
- Active state styling

**Data Source:** `src/data/faq.js`

**FAQ Properties:**
```javascript
{
  id: 1,
  question: "Question text?",
  answer: "Answer text here"
}
```

---

## 12. **Contact Component**
**File:** `src/Components/Contact.jsx`

**Features:**
- Beautiful contact form
- Form validation
- Contact information cards
- Phone, Email, Address display
- Loading state
- Success message
- Ripple button effect

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Desired Destination
- Message (required)

**Contact Info:**
```javascript
const contactInfo = [
  {
    icon: <MapPin />,
    title: "Address",
    info: "123 Travel Street, Adventure City"
  },
  // More contact options
];
```

---

## 13. **Footer Component**
**File:** `src/Components/Footer.jsx`

**Features:**
- Newsletter subscription
- Quick links section
- Services section
- Contact information
- Social media links
- Copyright notice

**Social Links:**
- Facebook
- Twitter
- Instagram
- LinkedIn

**Customization:**
Update links, services, and social media URLs in the component.

---

## 14. **ScrollTop Component**
**File:** `src/Components/ScrollTop.jsx`

**Features:**
- Back-to-top button
- Scroll progress bar
- Smooth scroll behavior
- Appears on scroll
- Floating position

---

## Utility Files

### animations.js
**File:** `src/utils/animations.js`

**Available Animations:**
```javascript
export const fadeInUp = {...}
export const fadeInDown = {...}
export const fadeInLeft = {...}
export const fadeInRight = {...}
export const scaleIn = {...}
export const containerVariants = {...}
export const itemVariants = {...}
export const hoverScale = {...}
export const floatAnimation = {...}
```

**Usage:**
```javascript
import { fadeInUp } from '../utils/animations';

<motion.div {...fadeInUp}>Content</motion.div>
```

---

## Data Files

### destinations.js
- 8 popular destinations
- Used by Destinations component

### attractions.js
- 6 top attractions
- Used by Attractions component

### gallery.js
- 9 gallery images
- 5 categories
- Used by Gallery component

### activities.js
- 8 activities
- With gradient colors
- Used by Activities component

### travelTips.js
- 8 tip categories
- With emoji icons
- Used by TravelTips component

### testimonials.js
- 6 client testimonials
- With ratings
- Used by Testimonials component

### faq.js
- 8 frequently asked questions
- Used by FAQ component

### seasons.js
- 4 seasons
- With details
- Used by BestTime component

---

## Component Usage Example

```javascript
// In App.jsx
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      {/* More components */}
    </div>
  );
}
```

---

## Styling System

### Tailwind Classes Used
- `font-poppins` - Poppins font
- `font-opensans` - Open Sans font
- `text-gradient` - Gradient text effect
- `glass` - Glassmorphism effect
- `glass-dark` - Dark glassmorphism
- `shadow-card` - Card shadow
- `btn-ripple` - Ripple effect button

### Color Classes
- `text-primary-blue` - #0077B6
- `text-primary-sky` - #90E0EF
- `text-primary-navy` - #023047
- `text-primary-sand` - #F4E1C1

---

## Tips for Customization

1. **Change Colors:** Edit `tailwind.config.js`
2. **Update Images:** Replace image URLs in data files
3. **Modify Text:** Edit data files or component content
4. **Add Sections:** Copy existing components as templates
5. **Change Layout:** Adjust grid columns in component className
6. **Speed Up Animations:** Reduce transition duration values

---

## Performance Tips

- Use React.memo for components that don't need frequent re-renders
- Lazy load images using `loading="lazy"`
- Optimize images before using them
- Use CSS animations instead of JavaScript when possible
- Code split large components

---

**Need help? Check the main README.md file for more information!**
