import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TopBar from './components/TopBar/TopBar.jsx'
import TabBar from './components/TabBar/TabBar.jsx'

function App() {

  return (
    <div className = "app">
        <TopBar />
        <div style = {{ height: "16px" }}></div>
        <TabBar />
    </div>
  );
}

export default App
