import React from 'react';
import './PhotosApp.css';

interface PhotosAppProps {
  onBack: () => void;
}

const PhotosApp: React.FC<PhotosAppProps> = ({ onBack }) => {
  const samplePhotos = [
    { id: 1, src: '🏞️', title: 'Landscape' },
    { id: 2, src: '🌸', title: 'Flowers' },
    { id: 3, src: '🌅', title: 'Sunrise' },
    { id: 4, src: '🏖️', title: 'Beach' },
    { id: 5, src: '🌲', title: 'Forest' },
    { id: 6, src: '🌙', title: 'Night' },
    { id: 7, src: '🎆', title: 'Fireworks' },
    { id: 8, src: '🍕', title: 'Food' },
  ];

  return (
    <div className="photos-app">
      <div className="app-header">
        <button className="app-back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <h2>Photos</h2>
      </div>

      <div className="photos-content">
        <div className="photos-stats">
          <p>{samplePhotos.length} ảnh</p>
        </div>
        
        <div className="photos-grid">
          {samplePhotos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <div className="photo-thumbnail">
                <span className="photo-emoji">{photo.src}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotosApp;
