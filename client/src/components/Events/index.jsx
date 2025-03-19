import React, { useState } from 'react';
import styles from './Events.module.sass';
import { toast } from 'react-toastify';
import moment from 'moment';
import useEventTimers from './useEventTimers';

const Events = () => {
  const { events, addEvent, removeEvent } = useEventTimers(
    JSON.parse(localStorage.getItem('events')) || []
  );
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [notifyBefore, setNotifyBefore] = useState(5);

  const handleAddEvent = () => {
    if (!name || !dateTime) {
      toast.error('Please fill in all fields!');
      return;
    }
    const eventTime = moment(dateTime);
    if (eventTime.isBefore(moment())) {
      toast.error('You cannot create an event in the past!');
      return;
    }
    const newEvent = {
      id: Date.now(),
      name,
      dateTime,
      notifyBefore,
      progress: 0,
      createdAt: moment(),
      notified: false,
    };
    addEvent(newEvent);
    setName('');
    setDateTime('');
  };

  return (
    <div className={styles.eventsContainer}>
      <h2>Event Timers</h2>
      <div className={styles.eventForm}>
        <input
          type='text'
          placeholder='Event name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='datetime-local'
          value={dateTime}
          onChange={e => setDateTime(e.target.value)}
        />
        <input
          type='number'
          placeholder='Notify in how many minutes?'
          value={notifyBefore}
          onChange={e => setNotifyBefore(Number(e.target.value))}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      <ul className={styles.eventList}>
        {events.map(event => (
          <li
            key={event.id}
            className={`${styles.eventItem} ${
              event.timeLeft === 'Time expired' ? styles.expired : ''
            }`}
          >
            {event.timeLeft !== 'Time expired' && (
              <div
                className={styles.progressBar}
                style={{ width: `${event.progress}%` }}
              ></div>
            )}
            <span className={styles.eventText}>
              {event.name} – {event.timeLeft}
            </span>
            <button
              className={styles.removeBtn}
              onClick={() => removeEvent(event.id)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
