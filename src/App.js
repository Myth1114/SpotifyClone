import React from 'react'

import './App.css';
import BottomNavigation from './Components/BottomNavigation/BottomNavigation';
import MobileFooter from './Components/MobileFooter/MobileFooter';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <div>
     <LandingPage/>
     <BottomNavigation/>
     <MobileFooter/>
    </div>
  )
}

export default App;
