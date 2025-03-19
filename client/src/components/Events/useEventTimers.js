import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';

const useEventTimers = (initialEvents = []) => {
  const [events, setEvents] = useState(initialEvents);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const formatTimeLeft = useCallback(seconds => {
    if (seconds <= 0) return 'Time expired';
    const duration = moment.duration(seconds, 'seconds');
    return (
      [
        duration.years() && `${duration.years()}y`,
        duration.months() && `${duration.months()}m`,
        duration.days() && `${duration.days()}d`,
        duration.hours() && `${duration.hours()}h`,
        duration.minutes() && `${duration.minutes()}m`,
        duration.seconds() && `${duration.seconds()}s`,
      ]
        .filter(Boolean)
        .join(' ') || 'Time expired'
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(prevEvents => {
        const now = moment();
        return prevEvents.map(event => {
          const eventTime = moment(event.dateTime);
          const timeDiff = eventTime.diff(now, 'seconds');
          const totalDuration = eventTime.diff(
            moment(event.createdAt),
            'seconds'
          );
          const progress = totalDuration
            ? Math.min(100, ((totalDuration - timeDiff) / totalDuration) * 100)
            : 100;

          if (
            timeDiff > 0 &&
            timeDiff <= event.notifyBefore * 60 &&
            !event.notified
          ) {
            toast.info(`The event "${event.name}" is starting soon.`);
            return {
              ...event,
              notified: true,
              progress,
              timeLeft: formatTimeLeft(timeDiff),
            };
          }
          return { ...event, progress, timeLeft: formatTimeLeft(timeDiff) };
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [formatTimeLeft]);

  const addEvent = useCallback(newEvent => {
    setEvents(prevEvents =>
      [...prevEvents, newEvent].sort((a, b) =>
        moment(a.dateTime).diff(moment(b.dateTime))
      )
    );
  }, []);

  const removeEvent = useCallback(id => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
  }, []);

  return { events, addEvent, removeEvent };
};

export default useEventTimers;
