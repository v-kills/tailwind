import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Header from './components/header';

function App() {
 
  return (
    <BrowserRouter>
    <div className='App'>
    <Header/>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App
