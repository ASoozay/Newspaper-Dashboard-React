import AnnouncementCard from "./AnnouncementCard/AnnouncementCard.jsx";
import SectionToolbar from "../../components/SectionToolbar/SectionToolBar.jsx";
import "./Announcements.css";

function Announcements() {
    function handleAddAnnouncement() {
        console.log("Open announcement form");
    }
  return (
    <section className="announcements">
      <SectionToolbar
        searchPlaceholder="Search announcements..."
        buttonText="Add Announcement"
        onAddClick={handleAddAnnouncement}
      />

      <div style={{ height: "16px" }}></div>

      <div className = "announcement-card-container">  
        <AnnouncementCard
            title="Production Meeting"
            message="Our next production meeting is Monday at 4 PM."
            author="Editor"
            date="October 25"
        />

        <AnnouncementCard
            title="Article Deadlines"
            message="Please submit your drafts by Friday."
            author="Sports Editor"
            date="October 24"
        />       
            
      </div>
    </section>
  );
}

export default Announcements;