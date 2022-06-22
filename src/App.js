import './App.css';
import Counter from './components/Counter/Counter';
import About from './pages/About/About';
import Posts from './pages/Posts/Posts';

function App() {
  return (
    <div className="App">
      <h1>UseContext</h1>
      <Counter/>
      <About/>
      <Posts/>
    </div>
  );
}

export default App;
