import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api';

function App() {
  const [searchData, setSearchData] = useState('');
  const [data, setData] = useState({});

  const generateData = async (key, source) => {
    source.then((data) => {
      setData((prevData) => {
        return {...prevData, [key]: data};
      });
    });
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums());
    generateData("newAlbums", fetchNewAlbums());
    generateData("songs", fetchSongs());
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
    <Navbar searchData={searchData}/>
    <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
    </>
  );
}



export default App;
