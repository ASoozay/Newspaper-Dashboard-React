import { useState } from "react";
import AnnouncementCard from "./AnnouncementCard/AnnouncementCard.jsx";
import AnnouncementModal from "./AnnouncementModal/AnnouncementModal.jsx";

import "./Announcements.css";

function Announcements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const announcements = [
    {
      id: 1,
      title: "Production Meeting",
      message: "Our next production meeting is Monday at 4 PM.",
      author: "Sports Editor",
      date: "October 25"
    },
    {
      id: 2,
      title: "Article Deadlines",
      message: "Please submit your article drafts by Friday.",
      author: "Managing Editor",
      date: "October 24"
    }
  ];

  return (
    <section className="announcements">
      <div className="announcement-card-container">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
            onClick={() => setSelectedAnnouncement(announcement)}
          />
        ))}
      </div>

      {selectedAnnouncement && (
        <AnnouncementModal
          announcement={selectedAnnouncement}
          onClose={() => setSelectedAnnouncement(null)}
        />
      )}
    </section>
  );
}

export default Announcements;