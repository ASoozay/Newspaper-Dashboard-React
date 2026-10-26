import "./TopBar.css";
import { UserRound } from "lucide-react";
import { useState } from "react";

function TopBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="top-bar">
      <div className="greeting">Hi, Andrew</div>

      <div className="profile-container">
        <button
          className="profile"
          type="button"
          aria-label="Open profile"
          aria-expanded={isProfileOpen}
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <UserRound size={24} />
        </button>

        {isProfileOpen && (
          <div className="profile-dropdown">
            <button>Profile</button>
            <button style = {{ color: "red" }}>Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;