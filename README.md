# Memora - Cyprus Travel Experience

A beautiful, modern travel website for Memora, showcasing Cyprus adventures for college students. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Interactive Components**: Engaging user interface with Framer Motion animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.4
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **TypeScript**: Full type safety

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/zero-point-labs/memora-public.git
cd memora-public
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build and Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

This project is optimized for Vercel deployment:

1. **Automatic Deployment**: Connect your GitHub repository to Vercel for automatic deployments
2. **Manual Deployment**: Use the Vercel CLI
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Environment Variables**: No environment variables required for basic deployment

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use the `@netlify/plugin-nextjs` plugin
- **Railway**: Deploy directly from GitHub
- **Digital Ocean**: Use App Platform
- **AWS**: Deploy with Amplify or EC2

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── AboutUs.tsx         # About section
│   ├── NextTrip.tsx        # Featured trip
│   ├── Gallery.tsx         # Photo gallery
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Customization

### Colors
The project uses a custom orange color palette. Update `tailwind.config.js` to change the primary colors:

```javascript
theme: {
  extend: {
    colors: {
      orange: {
        // Your custom orange shades
      }
    }
  }
}
```

### Content
Update the content in each component file to match your travel company's information:

- **Hero Section**: Update tagline and description
- **Services**: Modify service offerings
- **About Us**: Update company story and values
- **Next Trip**: Update trip details and pricing
- **Contact**: Update contact information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 Performance Features

- **Static Generation**: Pre-rendered pages for optimal performance
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **Font Optimization**: Optimized font loading with `next/font`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Zero Point Labs.

## 📞 Support

For support, email your team or create an issue in the GitHub repository.

---

Built with ❤️ by Zero Point Labs
