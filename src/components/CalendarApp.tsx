import React, { useState } from 'react';
import './CalendarApp.css';

interface CalendarAppProps {
  onBack: () => void;
}

const CalendarApp: React.FC<CalendarAppProps> = ({ onBack }) => {
  const [currentDate] = useState(new Date());
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();
  
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  const calendarDays = [];
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const events = [
    { date: 15, title: "Meeting with team" },
    { date: 22, title: "Birthday party" },
    { date: 28, title: "Project deadline" }
  ];

  return (
    <div className="calendar-app">
      <div className="calendar-header">
        <button className="back-button" onClick={onBack}>
          ←
        </button>
        <h2>Calendar</h2>
      </div>
      
      <div className="calendar-content">
        <div className="month-year">
          <h3>{monthNames[currentMonth]} {currentYear}</h3>
        </div>
        
        <div className="calendar-grid">
          <div className="weekdays">
            {daysOfWeek.map((day) => (
              <div key={day} className="weekday">
                {day}
              </div>
            ))}
          </div>
          
          <div className="days-grid">
            {calendarDays.map((day, index) => (
              <div 
                key={index} 
                className={`calendar-day ${day === today ? 'today' : ''} ${day ? 'has-day' : 'empty'}`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        
        <div className="events-section">
          <h4>Upcoming Events</h4>
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className="event-item">
                <span className="event-date">{event.date}</span>
                <span className="event-title">{event.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
