import "./DashboardContent.css";

import Announcements from "../../features/Announcements/Announcements.jsx";
import Production from "../../features/Production/Production.jsx";

function DashboardContent({ activeTab }) {
  return (
    <main className="dashboard-content">
      {activeTab === "Announcements" && <Announcements />}
      {activeTab === "Production" && <Production />}
    </main>
  );
}

export default DashboardContent;