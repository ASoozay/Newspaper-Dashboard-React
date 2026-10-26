import "./TabBar.css";
import { useState } from "react";

function TabBar() {
    const [activeTab, setActiveTab] = useState("Announcements");

    return (
        <div className = "tab-bar">
            <button>Announcements</button>
            <button>Production</button>
            <button>Articles</button>
            <button>Invoices</button>
            <button>Analytics</button>
            <button>Resources</button>
            <button>Settings</button>
        </div>
    );
}

export default TabBar;