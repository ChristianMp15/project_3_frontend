import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    
    <header className="App">
      <h1>My Suits stock</h1>
      <Outlet/>
    </header>
  );
}

export default App;