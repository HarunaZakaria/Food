import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
     <Navbar />
     <HomePage />
    </div>
  );
}

export default App;
