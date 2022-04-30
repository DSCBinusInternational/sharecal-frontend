import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './pages/Calendar';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <div className="App index-bg">
          <Home />
        </div>
      } />
      <Route path='/cal/:id' element={
        <div className="App cal-bg">
          <Calendar />
        </div>
      } />
    </Routes>
  );
}

export default App;
