import "./AnnouncementCard.css";

function AnnouncementCard({ title, message, author, date }) {
  return (
    <div className="announcement-card">
      <h3>{title}</h3>
      <p>Posted by {author} on {date}</p>
    </div>
  );
}

export default AnnouncementCard;