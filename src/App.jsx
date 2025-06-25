
import { GiSpinalCoil } from "react-icons/gi"; 
import { Routes, Route, useLocation } from 'react-router-dom';
import Index from './Pages/Onglets/Index';
import Kevin from './Pages/Onglets/Kevin';
import { useState,useEffect } from 'react';
import Terminal from './Pages/Onglets/Terminal';
import { AnimatePresence } from 'framer-motion';

function App(){
  // Etat
  const [Chargement, setChargement] = useState(true);
  const location = useLocation();

  // Comportement
  useEffect(() => {
    
    setTimeout(() => {
      setChargement(false);
    }, 3000);
  }, []);

  if (Chargement) {
    return (
      <div className="flex items-center justify-center h-screen bg-stone-700">
        <GiSpinalCoil className="text-white text-9xl animate-spin"/>
      </div>
    );
  }
  return(
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Index />} />
          <Route path='Kevin' element={<Kevin />} />
          <Route path='Terminal' element={<Terminal /> } />
        </Routes>
      </AnimatePresence>
    </>
  )
}
export default App;