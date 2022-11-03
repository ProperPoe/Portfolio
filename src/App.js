import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './App.scss'

function App() {
  return (
    <>
    <div className='bg-image'>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
    
    </>
  );
}

export default App;
