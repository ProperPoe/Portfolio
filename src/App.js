import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import './App.scss'

function App() {
  return (
    <>
    <div className='bg-image'>
          <Sidebar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        {/* <Route path='/' element={<Layout />}> 
        </Route> */}
      </Routes>
    </div>
    
    </>
  );
}

export default App;
