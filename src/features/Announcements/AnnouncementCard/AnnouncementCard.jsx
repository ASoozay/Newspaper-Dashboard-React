import "./AnnouncementCard.css";

function AnnouncementCard({ announcement, onClick }) {
  const authorName = announcement.author ?? "";
  const authorInitials = authorName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((namePart) => namePart[0])
    .join("")
    .toUpperCase();

  return (
    <article className="announcement-card" onClick={onClick}>
      <header className="announcement-card-header">
        <h3 className="announcement-card-title">{announcement.title}</h3>
        <span className="announcement-card-date">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="announcement-card-date-icon"
          >
            <rect x="3" y="5" width="14" height="12" rx="2" />
            <path d="M6.5 3v4M13.5 3v4M3 9h14" />
          </svg>
          {announcement.date}
        </span>
      </header>

      <p className="announcement-card-message">{announcement.message}</p>

      <footer className="announcement-card-footer">
        <span className="announcement-card-avatar" aria-hidden="true">
          {authorInitials || "?"}
        </span>
        <span className="announcement-card-author">
          <span className="announcement-card-author-label">Posted by</span>
          <span className="announcement-card-author-name">{authorName}</span>
        </span>
      </footer>
    </article>
  );
}

export default AnnouncementCard;