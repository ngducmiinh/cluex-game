import React, { useState } from 'react';
import './NotesApp.css';

interface NotesAppProps {
  onBack: () => void;
}

const NotesApp: React.FC<NotesAppProps> = ({ onBack }) => {
  const [notes] = useState([
    { id: 1, title: 'ClueX', content: '- ClueX', date: '...' }
  ]);

  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  return (
    <div className="notes-app">
      <div className="notes-header">
        <button className="back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <h2>Notes</h2>
        <button className="add-button">+</button>
      </div>

      <div className="notes-content">
        {selectedNote === null ? (
          <div className="notes-list">
            {notes.map((note) => (
              <div
                key={note.id}
                className="note-item"
                onClick={() => setSelectedNote(note.id)}
              >
                <h3 className="note-title">{note.title}</h3>
                <p className="note-preview">{note.content.substring(0, 60)}...</p>
                <span className="note-date">{note.date}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="note-detail">
            <div className="note-detail-header">
              <button 
                className="back-to-list"
                onClick={() => setSelectedNote(null)}
              >
                ← Quay lại
              </button>
            </div>
            {notes.find(note => note.id === selectedNote) && (
              <div className="note-content">
                <h2>{notes.find(note => note.id === selectedNote)?.title}</h2>
                <div className="note-text">
                  {notes.find(note => note.id === selectedNote)?.content.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesApp;
