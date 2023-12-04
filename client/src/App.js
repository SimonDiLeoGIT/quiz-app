import './App.css';
import { Home } from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createContext } from "react";
import { Quiz } from './pages/Quiz';

export const AppContext = createContext();

function App() {
  return (
    <section className='app'>
      <AppContext.Provider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/html" element={<Quiz  category="HTML"/>} />
            <Route path="/quiz/css" element={<Quiz category="CSS"/>} />
            <Route path="/quiz/javascript" element={<Quiz category="Javascript"/>} />
            <Route path="/quiz/accessibility" element={<Quiz category="Accessibility"/>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </section>
  );
}

export default App;
