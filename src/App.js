import './App.css';
import {Suspense} from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Header from './Components/Header';
import EnglishTab from './Components/EnglishTab';
import ArabicTab from './Components/ArabicTab'

function App() {
  return (
    
    <Router>
    <div className='App'>
    <nav>
     <Header/>
    </nav>
      <Routes >
    <Route path="/" value='en' element={<EnglishTab/>}  />
    <Route path="/Arabic" value='ar' element={<ArabicTab/>} />
    <Route path="/English" value='en' element={<EnglishTab/>} />
    </Routes>
    
    </div>
    </Router>
   
  );
}

export default App;
