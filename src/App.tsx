import './App.css';
import { ComponentA } from './components/componentA/componentA';
import { ComponentB } from './components/componentB/componentB';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ComponentA />
        <ComponentB />
      </header>
    </div>
  );
}

export default App;
