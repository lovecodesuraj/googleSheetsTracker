import logo from './logo.svg';
import './App.css';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';
import {Routes ,Route} from "react-router-dom";
import Home from './components/home/home';
import {gapi} from "gapi-script";
import { useEffect } from 'react';
const clientId="481840461817-kqnoklcva3bsiu662jkl1icef5ph19ke.apps.googleusercontent.com";

function App() {

  return (
    <>
  <Routes>
    <Route exact path='/' element={<Signin />}/>
    <Route exact path='/signup' element={<Signup />}/>
    <Route exact path='/home' element={<Home />}/>
  </Routes>
    </>
  );
}

export default App;
