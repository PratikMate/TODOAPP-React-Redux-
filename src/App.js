import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import CounterApp from './pages/CounterApp';
import TodoApp from './pages/TodoApp';

function App() {
  return (
    <div className="App" >
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<TodoApp />}/>
      </Routes>
    </div>
  );
}

export default App;
