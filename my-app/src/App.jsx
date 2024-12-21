
import React, { useState } from 'react';

import './App.css';
import Distribute from './components/body_dis';
import Resister from './components/body_regi'
import Header from './components/header.jsx';

function App() {
  const [showDistribute, setShowDistribute] = useState(true);
  const [showResister, setShowResister] = useState(false);

  const handleRegiClick = () => {
    setShowDistribute(false);
    setShowResister(true);
  };

  const handleHomeClick = () => {
    setShowDistribute(true);
    setShowResister(false);
  };

  return (
    <>
      <Header onRegiClick={handleRegiClick} onHomeClick={handleHomeClick} />
      {showDistribute && <Distribute />}
      {showResister && <Resister />}
    </>
  );
}

export default App;
