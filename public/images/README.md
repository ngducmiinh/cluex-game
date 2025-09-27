# Images Directory

This directory contains all static images used in the ClueX Game application.

## Structure

- `icons/` - App icons and UI elements
  - App icons for home screen (messages, phone, camera, etc.)
  - Navigation icons (back, home, settings)
  - Status bar icons (signal, wifi, battery)

- `backgrounds/` - Background images
  - Landing page background
  - App backgrounds
  - Lock screen wallpapers

- `avatars/` - User avatars and profile pictures
  - Contact photos for Messages app
  - User profile images

## Usage

To use an image in a React component:

```jsx
// For images in public/images/
<img src="/images/icons/app-icon.png" alt="App Icon" />

// Or using process.env.PUBLIC_URL for better compatibility
<img src={`${process.env.PUBLIC_URL}/images/icons/app-icon.png`} alt="App Icon" />
```

## File Naming Convention

- Use lowercase with hyphens: `app-icon.png`
- Include size in filename if multiple sizes: `logo-64x64.png`
- Use descriptive names: `message-sent-icon.svg`

## Supported Formats

- PNG - For icons with transparency
- JPG - For photos and backgrounds
- SVG - For scalable vector graphics
- WebP - For optimized web images
