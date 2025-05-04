# Mysore Union Website

A modern, responsive website for Mysore Union - an exclusive premium membership club in Mysore. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Dynamic hero section with video background
- Interactive amenities carousel
- Steve Jobs-inspired team section
- Floating booking button with Eleven Labs integration
- Responsive design for all devices
- Modern animations and transitions

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd mysore-union
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```bash
NEXT_PUBLIC_ELEVEN_LABS_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
mysore-union/
├── public/
│   ├── images/
│   │   ├── team/
│   │   └── amenities/
│   └── videos/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Amenities.tsx
│       ├── Team.tsx
│       └── BookingButton.tsx
├── package.json
└── README.md
```

## Adding Content

1. Add team member images to `public/images/team/`
2. Add amenity images to `public/images/amenities/`
3. Add hero video to `public/videos/hero-background.mp4`

## Development

- Run tests: `npm test`
- Build for production: `npm run build`
- Start production server: `npm start`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. # mysore-union
