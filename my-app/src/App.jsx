
import React, { useState } from 'react';

import './App.css';
import Display from './components/body_dis';
import Resister from './components/body_regi'
import Header from './components/header.jsx';
import Result from './components/view_components/search_results.js'

function App() {
  const [showDisplay, setShowDisplay] = useState(true);
  const [showResister, setShowResister] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleRegiClick = () => {
    setShowDisplay(false);
    setShowResult(false);
    setShowResister(true);
  };

  const handleHomeClick = () => {
    setShowDisplay(true);
    setShowResult(false);
    setShowResister(false);
  };

  const handleResultClick = () => {
    setShowResult(true);
  }

  return (
    <>
      <Header onRegiClick={handleRegiClick} onHomeClick={handleHomeClick} />
      {showDisplay && <Display onResultClick={handleResultClick} />}
      {/* {showResult && <Result />} */}
      {showResister && <Resister />}
    </>
  );
}

export default App;
