import "./TabBar.css";
import { useState } from "react";

function TabBar({ activeTab, setActiveTab }) {
    return (
        <div className = "tab-bar">
            <button 
                className = { activeTab === "Announcements" ? "active-tab" : "" }
                onClick = { () => setActiveTab("Announcements") }
            >
                Announcements
            </button>
            <button 
                className = { activeTab === "Production" ? "active-tab" : "" }
                onClick = { () => setActiveTab("Production") }
            >
                Production
            </button>
            <button 
                className = { activeTab === "Articles" ? "active-tab" : "" }
                onClick = { () => setActiveTab("Articles") }
            >
                Articles
            </button>
            <button 
                className = { activeTab === "Invoices" ? "active-tab" : "" }
                onClick = { () => setActiveTab("Invoices") }
            >
                Invoices
            </button>
            <button 
                className = { activeTab === "Analytics" ? "active-tab" : "" }
                onClick = { () => setActiveTab("Analytics") }
            >
                Analytics
            </button>
            <button 
                className = { activeTab === "Resources" ? "active-tab" : "" }
                onClick = { () => setActiveTab("Resources") }
            >
                Resources
            </button>
            <button 
                className = { activeTab === "Settings" ? "active-tab" : "" }
                onClick = { () => setActiveTab("Settings") }
            >
                Settings
            </button>
        </div>
    );
}

export default TabBar;