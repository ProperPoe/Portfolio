import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
