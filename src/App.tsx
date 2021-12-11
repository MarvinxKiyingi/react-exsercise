import { useState } from 'react';
import './App.scss';
import { ComponentA } from './components/componentA/componentA';
import { ComponentB } from './components/componentB/componentB';

export type INputProps = {
  inputValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function App() {
  const sessionStorageKey = 'inputValue';
  const getSessionStorage = sessionStorage.getItem(sessionStorageKey);
  const [inputValue, setInputValue] = useState(getSessionStorage || '');

  const setSessionStorage = sessionStorage.setItem(sessionStorageKey, inputValue);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEventvalue = e.target.value;
    setInputValue(inputEventvalue);
    return setSessionStorage;
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <ComponentA handleChange={handleInput} />
        <ComponentB inputValue={inputValue} />
      </header>
    </div>
  );
}

export default App;
