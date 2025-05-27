import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <h1>Caffeine Calculator</h1>
        </div>
      </header>
      <div class="container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
