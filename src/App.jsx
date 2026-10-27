import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TopBar from './components/TopBar/TopBar.jsx';
import TabBar from './components/TabBar/TabBar.jsx';
import DashboardContent from "./components/DashboardContent/DashboardContent.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("Production");

  return (
    <div className = "app">
        <TopBar />

        <div style = {{ height: "16px" }}></div>

        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div style = {{ height: "32px" }}></div>

        <DashboardContent activeTab={activeTab} />
    </div>
  );
}

export default App
