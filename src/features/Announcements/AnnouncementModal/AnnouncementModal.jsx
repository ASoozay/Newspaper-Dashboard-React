import "./AnnouncementModal.css";

function AnnouncementModal({ announcement, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="announcement-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcement-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className = "modal-close">
          <button aria-label="Close modal" type="button" onClick={onClose}>
            X
          </button>
        </div>

        <h2 id="announcement-modal-title">{announcement.title}</h2>
        <p>{announcement.message}</p>
        <small>
          Posted by {announcement.author} on {announcement.date}
        </small>
      </div>
    </div>
  );
}

export default AnnouncementModal;