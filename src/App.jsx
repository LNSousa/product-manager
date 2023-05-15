import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index/>} />
      </Routes>
    </div>
  );
}

export default App;
