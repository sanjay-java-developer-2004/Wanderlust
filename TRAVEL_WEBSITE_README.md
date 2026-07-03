# ✈️ Wanderlust - Modern Travel Destination Website

A stunning, premium travel destination website built with React.js, Vite, Tailwind CSS, and Framer Motion. This project showcases a luxury travel booking and destination showcase platform with smooth animations, modern UI design, and full responsiveness.

## 🌟 Features

### Core Sections
- **Hero Section** - Full-screen hero with animated heading, search bar, and floating elements
- **Sticky Navbar** - Transparent navbar with blur effect and dark/light mode toggle
- **Popular Destinations** - Beautiful destination cards with ratings and hover animations
- **Top Attractions** - Grid of attraction cards with icons and descriptions
- **Gallery** - Masonry layout with category filters and hover zoom effects
- **Best Time to Visit** - Interactive seasonal timeline with weather and activity info
- **Travel Tips** - Comprehensive cards for various travel aspects
- **Popular Activities** - Animated activity cards with gradient overlays
- **Statistics** - Animated counter sections with impressive metrics
- **Testimonials** - Client reviews with ratings and avatars
- **FAQ** - Accordion-style frequently asked questions
- **Contact Form** - Beautiful contact form with validation
- **Footer** - Newsletter subscription, quick links, and social media

### Special Features
- **Dark/Light Mode** - Toggle between dark and light themes
- **Smooth Animations** - Framer Motion animations for fade-in, slide-in, and scale effects
- **Scroll Progress Bar** - Visual indicator of page scroll progress
- **Back-to-Top Button** - Quick navigation to top of page
- **Lazy Loading** - Optimized image loading for better performance
- **Fully Responsive** - Mobile-friendly design for all screen sizes
- **Glassmorphism** - Modern glass-effect UI elements
- **Gradient Design** - Premium gradient overlays and text
- **Interactive Forms** - Form validation and submission feedback

## 🛠️ Tech Stack

- **React 19** - Functional components
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Router** - For potential multi-page routing
- **Swiper.js** - Touch slider library (ready to integrate)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Sticky navigation with theme toggle
│   ├── Hero.jsx             # Full-screen hero section
│   ├── Destinations.jsx     # Popular destinations grid
│   ├── Attractions.jsx      # Top attractions section
│   ├── Gallery.jsx          # Masonry gallery with filters
│   ├── TravelTips.jsx       # Travel tips cards
│   ├── BestTime.jsx         # Seasonal timeline
│   ├── Activities.jsx       # Activity cards
│   ├── Statistics.jsx       # Animated statistics
│   ├── Testimonials.jsx     # Client testimonials
│   ├── FAQ.jsx              # Accordion FAQ
│   ├── Contact.jsx          # Contact form
│   ├── Footer.jsx           # Footer with newsletter
│   └── ScrollTop.jsx        # Back-to-top button
│
├── data/
│   ├── destinations.js      # Destinations data
│   ├── attractions.js       # Attractions data
│   ├── gallery.js           # Gallery images
│   ├── activities.js        # Activities data
│   ├── travelTips.js        # Travel tips data
│   ├── testimonials.js      # Testimonials data
│   ├── faq.js               # FAQ data
│   └── seasons.js           # Seasonal data
│
├── utils/
│   └── animations.js        # Reusable animation variants
│
├── App.jsx                  # Main app component
├── App.css                  # App styles
├── index.css                # Global styles
└── main.jsx                 # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Demo_Ai
```

2. Install dependencies (already done if you ran `npm install`):
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Design Theme

### Color Palette
- **Ocean Blue**: #0077B6 (Primary)
- **Sky Blue**: #90E0EF (Accent)
- **Navy**: #023047 (Dark)
- **Sand**: #F4E1C1 (Warm accent)
- **White**: #FFFFFF (Light)

### Typography
- **Poppins** - Headings and important text
- **Open Sans** - Body text and descriptions

### Design Elements
- Glassmorphism with blur effects
- Soft gradients and shadows
- Rounded corners (rounded-xl, rounded-2xl)
- Smooth transitions and hover effects
- Responsive grid layouts

## 🔧 Customization

### Add More Destinations
Edit `/src/data/destinations.js`:
```javascript
export const destinations = [
  {
    id: 9,
    name: "Your Destination",
    country: "Country",
    image: "image-url",
    rating: 4.8,
    reviews: 2000,
    description: "Description here",
    price: "$999",
    category: "category"
  },
  // ... more destinations
];
```

### Modify Colors
Update `/tailwind.config.js` in the theme.extend.colors section:
```javascript
colors: {
  primary: {
    blue: '#0077B6',
    sky: '#90E0EF',
    navy: '#023047',
    sand: '#F4E1C1',
  },
}
```

### Add Animations
Add new animation variants in `/src/utils/animations.js`:
```javascript
export const yourAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.2 },
};
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components adapt beautifully to different screen sizes.

## ⚡ Performance Features

- Lazy loading for images
- Optimized Framer Motion animations
- CSS-in-JS with Tailwind for minimal CSS
- Code splitting ready with Vite
- SEO-friendly structure

## 🌙 Dark Mode

Toggle dark mode using the moon/sun icon in the navbar. The theme preference is applied to the entire website with smooth transitions.

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Contact

For questions or feedback, reach out to: info@wanderlust.com

---

**Happy Traveling! 🌍✈️**
