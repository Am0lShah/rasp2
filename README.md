# News Display System

A modern news display system built with React, Vite, and Tailwind CSS. This application features a responsive layout with media slideshows, announcements, and advertisements.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Media Slideshow**: Automatic rotation of images and videos
- **Live Announcements**: Scrolling text announcements
- **Advertisement Section**: Dynamic ad content rotation
- **Modern UI**: Built with Tailwind CSS for a clean, modern look

## Project Structure

```
├── src/                    # React source files
│   ├── components/         # React components
│   ├── assets/            # Static assets
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles with Tailwind
├── public/                # Public assets
│   └── media/            # Media files (images, videos)
├── test.html             # Standalone HTML version
├── server.js             # Custom HTTP server
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── netlify.toml         # Netlify deployment configuration
```

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Node.js**: Server-side JavaScript runtime

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Am0lShah/rasp2.git
cd rasp2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. For the standalone HTML version:
```bash
node server.js
```

The application will be available at:
- Vite dev server: `http://localhost:5173`
- Custom server: `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## Deployment

### Netlify Deployment

This project is configured for automatic deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. The `netlify.toml` file will automatically configure the build settings
3. Netlify will build and deploy your site automatically

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your hosting provider

## Customization

### Adding Media Files

1. Place your media files in the `public/media/` directory
2. Update the `mediaItems` array in `test.html` or your React components
3. Supported formats: PNG, JPG, MP4

### Modifying Content

- **Announcements**: Edit the `announcements` array in the JavaScript
- **Advertisements**: Edit the `adTexts` array in the JavaScript
- **Styling**: Modify the Tailwind classes or CSS in `src/index.css`

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue on GitHub. 