import './App.css';
import { AboutPage, ContactPage, Homepage, Register, ServicesPage, SignIn } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/Home' element={<Homepage />}></Route>
        <Route path='/Services' element={<ServicesPage />}></Route>
        <Route path='/About' element={<AboutPage />}></Route>
        <Route path='/Contact' element={<ContactPage />}></Route>
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
