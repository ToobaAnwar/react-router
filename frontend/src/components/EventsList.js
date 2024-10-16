import { Link } from 'react-router-dom';
import classes from './EventsList.module.css';

function EventsList({ events }) {
  // we can't useLoader in root component 
  // bcz if comp is on higher level from where loader is its will show undefined 
  // we can only acces from same or lower level 
  
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
