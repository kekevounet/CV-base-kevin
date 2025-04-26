import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Onglets/Index';
import Kevin from './Pages/Onglets/Kevin';
import { useState,useEffect } from 'react';
function App(){
  // Etat
  const [Chargement, setChargement] = useState(true);
  // Comportement
  useEffect(() => {
    
    setTimeout(() => {
      setChargement(false);
    }, 3000);
  }, []);

  if (Chargement) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900">
        <div className="w-32 h-32 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
      </div>
    );
  }
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='Kevin' element={<Kevin />} />
      </Routes>
    </Router>
  )
}
export default App;