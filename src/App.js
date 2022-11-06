import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <>
      <ToastContainer/>
      <BrowserRouter>
        <Container>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/posts/search" element={<Home/>} />
            <Route path="/posts/:id" element={<PostDetails/>} />
            <Route path='/creators/:name' element={<CreatorOrTag/>} />
            <Route path='/tags/:name' element={<CreatorOrTag/>} />
            <Route path="/auth" exact element={<Auth />}/> 
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
        