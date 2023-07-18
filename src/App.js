import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import './scss/app.scss';

export const SearchContext = React.createContext()

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Container>
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

