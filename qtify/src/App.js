import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import Hero from './components/Hero/Hero';

function App() {
  const [searchData, setSearchData] = useState('');
  return (
    <>
    <Navbar searchData={searchData}/>
    <Hero/>
    </>
  );
}

export default App;
