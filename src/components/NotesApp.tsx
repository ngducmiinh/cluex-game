import React, { useState } from 'react';
import './NotesApp.css';

interface NotesAppProps {
  onBack: () => void;
}

const NotesApp: React.FC<NotesAppProps> = ({ onBack }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Danh sách mua sắm', content: '- Sữa\n- Bánh mì\n- Trứng\n- Rau xanh', date: '2025-09-24' },
    { id: 2, title: 'Công việc cần làm', content: '1. Hoàn thành báo cáo\n2. Gọi điện cho khách hàng\n3. Chuẩn bị meeting', date: '2025-09-23' },
    { id: 3, title: 'Ý tưởng mới', content: 'Tạo ứng dụng quản lý task đơn giản với React...', date: '2025-09-22' }
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
