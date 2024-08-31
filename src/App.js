import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FruitDetail from './pages/FruitDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruit/:name" element={<FruitDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
