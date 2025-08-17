import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainLayout from './components/MainLayout';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <MainLayout currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
