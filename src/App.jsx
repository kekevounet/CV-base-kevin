import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Onglets/Index';
import Kevin from './Pages/Onglets/Kevin';
function App(){
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