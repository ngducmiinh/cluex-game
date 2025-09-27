// Image constants and utilities for ClueX Game

export const IMAGES = {
  // Icons
  ICONS: {
    CLUEX_LOGO: '/images/icons/cluexicon.png',
    MESSAGES: '/images/icons/messages-icon.svg',
    PHONE: '/images/icons/phone-icon.svg',
    CAMERA: '/images/icons/camera-icon.svg',
    PHOTOS: '/images/icons/photos-icon.svg',
    CALCULATOR: '/images/icons/calculator-icon.svg',
  },
  
  // Avatars
  AVATARS: {
    USER1: '/images/avatars/user1.svg',
    USER2: '/images/avatars/user2.svg',
    USER3: '/images/avatars/user3.svg',
  },
  
  // Backgrounds (placeholder paths)
  BACKGROUNDS: {
    LANDING: '/images/backgrounds/landing-bg.jpg',
    LOCK_SCREEN: '/images/backgrounds/lock-screen-bg.jpg',
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
