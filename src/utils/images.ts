// Image constants and utilities for ClueX Game

export const IMAGES = {
  // Icons
  ICONS: {
    CLUEX_LOGO: process.env.PUBLIC_URL + '/images/icons/cluexicon.png',
    MESSAGES: process.env.PUBLIC_URL + '/images/icons/messages-icon.svg',
    PHONE: process.env.PUBLIC_URL + '/images/icons/phone-icon.svg',
    CAMERA: process.env.PUBLIC_URL + '/images/icons/camera-icon.svg',
    PHOTOS: process.env.PUBLIC_URL + '/images/icons/photos-icon.svg',
    CALCULATOR: process.env.PUBLIC_URL + '/images/icons/calculator-icon.svg',
  },
  
  // Avatars
  AVATARS: {
    USER1: process.env.PUBLIC_URL + '/images/avatars/user1.svg',
    USER2: process.env.PUBLIC_URL + '/images/avatars/user2.svg',
    USER3: process.env.PUBLIC_URL + '/images/avatars/user3.svg',
  },
  
  // Backgrounds (placeholder paths)
  BACKGROUNDS: {
    LANDING: process.env.PUBLIC_URL + '/images/backgrounds/landing-bg.jpg',
    LOCK_SCREEN: process.env.PUBLIC_URL + '/images/backgrounds/lock-screen-bg.jpg',
  }
};

// Utility function to get image path with fallback
export const getImagePath = (imagePath: string, fallback?: string): string => {
  return `${process.env.PUBLIC_URL}${imagePath}` || fallback || '';
};

// App icon mapping for HomeScreen
export const APP_ICONS = {
  messages: '💬',
  phone: '📞', 
  camera: '📷',
  photos: '📸',
  calendar: '📅',
  weather: '🌤️',
  notes: '📝',
  calculator: '🔢',
  settings: '⚙️'
};

export default IMAGES;
