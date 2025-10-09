# Alfu - Full-stack Developer Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my skills and projects as a full-stack developer. 
Live on https://www.alfu.dev

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean and professional design
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Engaging user experience
- **SEO Optimized**: Built with Next.js for better search engine visibility
- **Fast Performance**: Optimized for speed and performance

## Tech Stack

- **Frontend**: React, Next.js, CSS3, Bootstrap
- **Animations**: Typed.js for typing effects
- **Icons**: Font Awesome, Themify Icons
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Sections

1. **Home**: Hero section with introduction and call-to-action
2. **About**: Personal information, skills, education, and experience
3. **Services**: What I offer as a developer
4. **Portfolio**: Showcase of projects and work
5. **Contact**: Get in touch form and contact information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd alfu-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `pages/index.js` - Hero section content
- `src/components/About.js` - About section, skills, education, experience
- `src/components/Services.js` - Services you offer
- `src/components/Portfolio.js` - Your projects
- `src/components/Contact.js` - Contact information
- `src/layout/Header.js` - Navigation and social links

### Images

Replace the placeholder images in `public/static/img/` with your own:

- `profile-photo.jpg` - Your profile photo for the sidebar
- `main-banner-bordered.png` - Hero section image
- `about-view.png` - About section image
- Portfolio project images
- Blog post images

### Styling

The main styles are in `public/static/css/style.css`. You can customize:

- Colors and themes
- Typography
- Layout and spacing
- Animations and effects

### Social Links

Update social media links in `src/layout/Header.js`:

```javascript
// Replace # with your actual social media URLs
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms

The project can be deployed to any static hosting platform that supports Next.js.

## Performance Optimization

- Images are optimized for web
- CSS and JavaScript are minified in production
- Lazy loading for components
- SEO meta tags included

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: al.fuguo@gmail.com
- **LinkedIn**: [Al's LinkedIn Profile](https://www.linkedin.com/in/alfuguo/)
- **GitHub**: [Al's GitHub Profile](https://github.com/alfuguo)

---

Built with ❤️ using Next.js and React
