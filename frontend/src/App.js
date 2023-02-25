import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Suits stock</h1>
      <Outlet/>
    </div>
  );
}

export default App;